import { createContext, useReducer, useState, useEffect } from 'react';
import { addComment, commentDelete, commentShowHide, commentsShowEdit, commonList, districtsCreate, districtsDelete, districtSection, districtsEdit, districtsEditDonate, districtsList, districtsShowEdit, districtsShowEditDonate, sectionsCreate, sectionsDelete, sectionsEdit, sectionsList, sectionsShowEdit, login, logout, navigate } from './actions';
import main from './Reducers/main';
import axios from 'axios';
import { SHOW_MESSAGE } from './types';

export const actionsList = {
    'sections-list': sectionsList,
    'sections-create': sectionsCreate,
    'sections-delete': sectionsDelete,
    'sections-show-edit': sectionsShowEdit,
    'sections-edit': sectionsEdit,

    'districts-create': districtsCreate,
    'districts-list': districtsList,
    'districts-delete': districtsDelete,
    'districts-show-edit': districtsShowEdit,
    'districts-show-edit-donate': districtsShowEditDonate,
    'districts-edit': districtsEdit,
    'districts-edit-donate': districtsEditDonate,

    'comments-show-edit': commentsShowEdit,
    'comment-show-hide': commentShowHide,
    'comment-delete': commentDelete,

    'common-list': commonList,
    'district-section': districtSection,
    'add-comment': addComment,

    'login': login,
    'logout': logout
}

const url = 'http://localhost:3004/';
const imgUrl = 'http://localhost:3004/img/';


export const Store = createContext();

export const Provider = (props) => {


    const [loader, setLoader] = useState(false);
    const [logged, setLogged] = useState(null);
    const [authName, setAuthName] = useState(null);

    const [store, dispach] = useReducer(main, {
        page: 'home',
        pageTop: 'nav'
    });


    const dataDispach = action => {
        if (!action.payload || !action.payload.url) {
            dispach(action);
            setLoader(false);
        } else {
            const args = [url + action.payload.url];
            if (action.payload.body) {
                args.push(action.payload.body);
            }
            setLoader(true);
            axios[action.payload.method](...args, { withCredentials: true })
                .then(res => {
                    action = {
                        ...action, payload:
                        {
                            ...action.payload, ...res.data
                        }, doDispach
                    }
                    dispach(action);
                    if (!action.payload.show) {
                        setLoader(false);
                    }
                })
                .catch(error => {
                    const errorAction = {};
                    errorAction.payload = {
                        msg: { text: 'ERROR.', type: 'danger' }
                    }
                    errorAction.type = SHOW_MESSAGE;
                    errorAction.doDispach = doDispach;
                    dispach(errorAction);

                    setLoader(false);
                })
        }
    }

    const doDispach = action => {
        dataDispach(action);
    }

    const logOut = (_) => {
        axios
            .post('http://localhost:3004/logout', {}, { withCredentials: true })
            .then((_) => {
                setAuthName(false);
                setLogged(false);
                dispach(navigate('home'));
            });
    };

    useEffect(() => {
        axios
            .get('http://localhost:3004/login', { withCredentials: true })
            .then((res) => {
                if (res.data.status === 'ok') {
                    setLogged(true);
                    setAuthName(res.data.name);
                }
            });
    }, []);

    return (
        <Store.Provider value={{
            page: store.page,
            pageTop: store.pageTop,

            store,
            dispach: dataDispach,
            actionsList,
            messages: store.messages,
            loader,
            start: () => setLoader(true),

            logged, setLogged,
            authName, setAuthName,
            logOut,

            imgUrl
        }}>
            {props.children}
        </Store.Provider>
    )
}