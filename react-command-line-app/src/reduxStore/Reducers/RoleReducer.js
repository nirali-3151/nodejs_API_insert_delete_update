import {
    GET_ROLE_LIST,
    ADD_ROLE
} from '../Actions/ActionTypes';

const initialState = {
    role_list : []
}

function RoleReducer(state = initialState, action) {

    switch (action.type) {
        case GET_ROLE_LIST: {
            return {
                ...state,
                role_list: action.payload.role_list
            }
        }

        case ADD_ROLE: {
            console.log("action.payload" , action.payload);
            return {
                ...state,
                role_list: [...initialState.role_list, action.payload]
            }
        }
        default:
            return state
    }

}

export default RoleReducer

