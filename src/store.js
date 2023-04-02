import { createContext, useReducer } from 'react';
import main from './Reducers/main';
import axios from 'axios';
import { sectionsList, sectionsCreate } from './actions';

export const actionsList = {
    'sections-list': sectionsList,
    'sections-create': sectionsCreate,
    //     'sections-delete': sectionsDelete,
    //     'sections-show-edit': sectionsShowEdit,
    //     'sections-edit': sectionsEdit,
}

const url = 'http://localhost:3004/';

export const Store = createContext();

export const Provider = (props) => {

    const [store, dispach] = useReducer(main, {
        page: 'home',
        pageTop: 'nav'
    });

    const dataDispach = action => {
        if (!action.payload || !action.payload.url) {
            dispach(action);
        } else {
            axios[action.payload.method](url + action.payload.url)
                .then(res => {
                    console.log(res.data);
                    dispach({
                        ...action, payload: {
                            ...action.payload, ...res.data
                        }
                    });
                })
        }
    }

    return (
        <Store.Provider value={{
            page: store.page,
            pageTop: store.pageTop,
            store,
            dispach: dataDispach,
            actionsList
        }}>
            {props.children}
        </Store.Provider>
    )
}