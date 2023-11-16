import {
    GET_ROLE_LIST,
    ADD_ROLE
} from './ActionTypes';

//get role List
export const getRoleList = (payload) => {
    return {
        type: GET_ROLE_LIST,
        payload
    };
};

//Add New Role To the List
export const addNewRole = (payload) => {
    return {
        type: ADD_ROLE,
        payload
    }
}