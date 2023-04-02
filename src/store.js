import { createContext, useReducer } from 'react';
import main from './Reducers/main';

export const actionsList = {
    //     'sections-list': sectionsList,
    //     'sections-create': sectionsCreate,
    //     'sections-delete': sectionsDelete,
    //     'sections-show-edit': sectionsShowEdit,
    //     'sections-edit': sectionsEdit,
}



export const Store = createContext();

export const Provider = (props) => {

    const [store, dispach] = useReducer(main, {
        page: 'home',
        pageTop: 'nav'
    });




    return (
        <Store.Provider value={{
            page: store.page,
            pageTop: store.pageTop,

            dispach

        }}>
            {props.children}
        </Store.Provider>
    )
}