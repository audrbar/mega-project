import { DISTRICTS_CREATE, DISTRICTS_LIST, DISTRICTS_DELETE, DISTRICTS_SHOW_EDIT, NAVIGATE, SECTIONS_CREATE, SECTIONS_DELETE, SECTIONS_EDIT, SECTIONS_LIST, SECTIONS_SHOW_EDIT } from './types';

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
            method: 'get',
            page: 'sections-list'
        }
    }
}

export const districtsList = _ => {
    return {
        type: DISTRICTS_LIST,
        payload: {
            url: 'admin/districts',
            method: 'get',
            page: 'districts-list'
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

export const districtsCreate = body => {
    return {
        type: DISTRICTS_CREATE,
        payload: {
            url: 'admin/districts',
            method: 'post',
            body,
            show: 'districts-list',
            pauseShow: 1000
        }
    }
}


export const sectionsDelete = id => {
    return {
        type: SECTIONS_DELETE,
        payload: {
            url: 'admin/sections/' + id,
            method: 'delete',
            show: 'sections-list',
            pauseShow: 0
        }
    }
}

export const districtsDelete = id => {
    return {
        type: DISTRICTS_DELETE,
        payload: {
            url: 'admin/districts/' + id,
            method: 'delete',
            show: 'districts-list',
            pauseShow: 0
        }
    }
}

export const sectionsShowEdit = id => {
    return {
        type: SECTIONS_SHOW_EDIT,
        payload: {
            url: 'admin/sections/' + id,
            method: 'get',
            page: 'sections-show-edit'
        }
    }
}

export const districtsShowEdit = id => {
    return {
        type: DISTRICTS_SHOW_EDIT,
        payload: {
            url: 'admin/districtss/' + id,
            method: 'get',
            page: 'districts-show-edit'
        }
    }
}


export const sectionsEdit = (body, id) => {
    return {
        type: SECTIONS_EDIT,
        payload: {
            url: 'admin/sections/' + id,
            method: 'put',
            body,
            show: 'sections-list',
            pauseShow: 1000
        }
    }
}