import { ADD_COMMENT, COMMENTS_SHOW_EDIT, COMMENT_DELETE, COMMENT_SHOW_HIDE, COMMON_LIST, DISTRICTS_CREATE, DISTRICTS_DELETE, DISTRICTS_EDIT, DISTRICTS_EDIT_DONATE, DISTRICTS_LIST, DISTRICTS_LIST_DONATE, DISTRICTS_SHOW_EDIT, DISTRICTS_SHOW_EDIT_DONATE, DISTRICT_SECTION, NAVIGATE, REMOVE_MESSAGE, SECTIONS_CREATE, SECTIONS_DELETE, SECTIONS_EDIT, SECTIONS_LIST, SECTIONS_SHOW_EDIT, SHOW_MESSAGE } from "./types";
import { v4 as uuidv4 } from 'uuid';
import { actionsList } from './store';

export default function reducer(state, action) {
    const stateClone = structuredClone(state);
    console.log('REDUCER: ', action);

    switch (action.type) {
        case NAVIGATE:
            stateClone.page = action.payload.to;
            let defaultNav = 'nav';

            switch (action.payload.to) {
                case 'login':
                case 'register':
                    stateClone.pageTop = '';
                    break;
                default:
                    stateClone.pageTop = defaultNav;
            }
            return stateClone;
        case SECTIONS_LIST:
        case SECTIONS_SHOW_EDIT:
        case DISTRICTS_LIST:
        case DISTRICTS_LIST_DONATE:
        case DISTRICTS_SHOW_EDIT:
        case DISTRICTS_SHOW_EDIT_DONATE:
        case COMMON_LIST:
        case DISTRICT_SECTION:
        case COMMENTS_SHOW_EDIT:
            if (!action.payload.disableNavigate) {
                stateClone.pageTop = 'nav';
                stateClone.page = action.payload.page;
            }
            stateClone.data = action.payload.data;
            return stateClone;

        case SECTIONS_CREATE:
        case SECTIONS_DELETE:
        case SECTIONS_EDIT:
        case DISTRICTS_CREATE:
        case DISTRICTS_DELETE:
        case DISTRICTS_EDIT:
        case DISTRICTS_EDIT_DONATE:
        case ADD_COMMENT:
        case COMMENT_SHOW_HIDE:
        case COMMENT_DELETE:
        case SHOW_MESSAGE:

            console.log('PL:', action.payload);

            if (action.payload.msg) {

                const uuid = uuidv4();
                if (!stateClone.messages) {
                    stateClone.messages = [];
                }
                stateClone.messages.push({ ...action.payload.msg, id: uuid })
                setTimeout(() => {
                    action.doDispach({
                        type: REMOVE_MESSAGE,
                        payload: {
                            uuid
                        }
                    });
                }, 3000);
            }

            if (action.payload.show) {
                setTimeout(() => {
                    console.log(action.payload.show);
                    action.doDispach(actionsList[action.payload.show]());
                }, action.payload.hasOwnProperty('pauseShow') ? action.payload.pauseShow : 1000);
            }

            return stateClone;

        case REMOVE_MESSAGE:
            stateClone.messages = stateClone.messages.filter(m => m.id !== action.payload.uuid);
            return stateClone;
        default:
    }

    return state;
}