export const userConstants = {
    REGISTER_REQUEST: 'USERS_REGISTER_REQUEST',
    REGISTER_SUCCESS: 'USERS_REGISTER_SUCCESS',
    REGISTER_FAILURE: 'USERS_REGISTER_FAILURE',

    LOGIN_REQUEST: 'USERS_LOGIN_REQUEST',
    LOGIN_SUCCESS: 'USERS_LOGIN_SUCCESS',
    LOGIN_FAILURE: 'USERS_LOGIN_FAILURE',

    LOGOUT: 'USERS_LOGOUT',

    // what is this even for?
    GETALL_REQUEST: 'USERS_GETALL_REQUEST',
    GETALL_SUCCESS: 'USERS_GETALL_SUCCESS',
    GETALL_FAILURE: 'USERS_GETALL_FAILURE',

    DELETE_REQUEST: 'USERS_DELETE_REQUEST',
    DELETE_SUCCESS: 'USERS_DELETE_SUCCESS',
    DELETE_FAILURE: 'USERS_DELETE_FAILURE'
};

export const alertConstants = {
    SUCCESS: 'ALERT_SUCCESS',
    ERROR: 'ALERT_ERROR',
    CLEAR: 'ALERT_CLEAR'
};

export const boardConstants = {
    SET_COLUMN: 'SET_COLUMN',
    SET_ORDERED: 'SET_ORDERED',
    NEW_BOARD: 'NEW_BOARD'
};

export const stateConstants = {
    SET_HOVER:  'SET_HOVER',
    SET_SHOW_CHANNELS: 'SET_SHOW_CHANNELS',
    SET_SHELF_DRAG: 'SET_SHELF_DRAG'
};

export const feedsConstants = {
    FETCH_FEEDS: 'FETCH_FEEDS',
    SET_FEEDS: 'SET_FEEDS',
    ERROR_FEEDS: 'ERROR_FEEDS'
};

export const serverConstants = {
    GETALLFORUSER_REQUEST: 'GETALLFORUSER_REQUEST',
    GETALLFORUSER_SUCCESS: 'GETALLFORUSER_SUCCESS',
    GETALLFORUSER_FAILURE: 'GETALLFORUSER_FAILURE',

    // this is updated locally, i may not need these
    ADD_CHANNEL: 'ADD_CHANNEL',
    REMOVE_CHANNEL: 'REMOVE_CHANNEL',
    MOVE_CHANNEL: 'MOVE_CHANNEL', //not sure if will use
};

export const youtubeConstants = {
    SEARCH_REQUEST: 'SEARCH_REQUEST',
    SEARCH_SUCCESS: 'SEARCH_SUCCESS',
    SEARCH_FAILURE: 'SEARCH_FAILURE',
}

export const channelTypes = {
    CHANNEL_ADD_REQUEST: 'CHANNEL_ADD_REQUEST',
    CHANNEL_ADD_SUCCESS: 'CHANNEL_ADD_SUCCESS',
    CHANNEL_ADD_FAILURE: 'CHANNEL_ADD_FAILURE',
    
    CHANNEL_DELETE_REQUEST: 'CHANNEL_DELETE_REQUEST',
    CHANNEL_DELETE_SUCCESS: 'CHANNEL_DELETE_SUCCESS',
    CHANNEL_DELETE_FAILURE: 'CHANNEL_DELETE_FAILURE',
}

export const followTypes = {
    FOLLOW_ADD_REQUEST: 'FOLLOW_ADD_REQUEST',
    FOLLOW_ADD_SUCCESS: 'FOLLOW_ADD_SUCCESS',
    FOLLOW_ADD_FAILURE: 'FOLLOW_ADD_FAILURE',
    
    FOLLOW_DELETE_REQUEST: 'FOLLOW_DELETE_REQUEST',
    FOLLOW_DELETE_SUCCESS: 'FOLLOW_DELETE_SUCCESS',
    FOLLOW_DELETE_FAILURE: 'FOLLOW_DELETE_FAILURE',
}


export const collectionTypes = {
    COLLECTION_CREATE_REQUEST: 'COLLECTION_CREATE_REQUEST',
    COLLECTION_CREATE_SUCCESS: 'COLLECTION_CREATE_SUCCESS',
    COLLECTION_CREATE_FAILURE: 'COLLECTION_CREATE_FAILURE',

    COLLECTION_GET_REQUEST: 'COLLECTION_GET_REQUEST',
    COLLECTION_GET_SUCCESS: 'COLLECTION_GET_SUCCESS',
    COLLECTION_GET_FAILURE: 'COLLECTION_GET_FAILURE',
    
    COLLECTION_GETALL_REQUEST: 'COLLECTION_GETALL_REQUEST',
    COLLECTION_GETALL_SUCCESS: 'COLLECTION_GETALL_SUCCESS',
    COLLECTION_GETALL_FAILURE: 'COLLECTION_GETALL_FAILURE',

    COLLECTION_UPDATE_REQUEST: 'COLLECTION_UPDATE_REQUEST',
    COLLECTION_UPDATE_SUCCESS: 'COLLECTION_UPDATE_SUCCESS',
    COLLECTION_UPDATE_FAILURE: 'COLLECTION_UPDATE_FAILURE',
    
    COLLECTION_DELETE_REQUEST: 'COLLECTION_DELETE_REQUEST',
    COLLECTION_DELETE_SUCCESS: 'COLLECTION_DELETE_SUCCESS',
    COLLECTION_DELETE_FAILURE: 'COLLECTION_DELETE_FAILURE',

    COLLECTION_REORDER_REQUEST: 'COLLECTION_REORDER_REQUEST',
    COLLECTION_REORDER_SUCCESS: 'COLLECTION_REORDER_SUCCESS',
    COLLECTION_REORDER_FAILURE: 'COLLECTION_REORDER_FAILURE',
}