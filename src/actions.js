import { NAVIGATE, SECTIONS_LIST, SECTIONS_CREATE } from "./types";

export const navigate = to => {
    return {
        type: NAVIGATE,
        payload: {
            to
        }
    };
}

export const sectionsList = _ => {
    return {
        type: SECTIONS_LIST,
        payload: {
            url: 'admin/sections',
            methot: 'get',
            show: 'sections-list'
        }
    }
}

export const sectionsCreate = body => {
    return {
        type: SECTIONS_CREATE,
        payload: {
            url: 'admin/sections',
            method: 'post',
            body,
            show: 'sections-list',
            pauseShow: 1000
        }
    }
}