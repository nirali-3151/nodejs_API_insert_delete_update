import {
    GET_DEPARTMENT_LIST,
    ADD_DEPARTMENT
} from '../Actions/ActionTypes';

const initialState = {
    depat_List : []
}

function DepartmentReducer(state = initialState, action) {

    switch (action.type) {
        case GET_DEPARTMENT_LIST: {
            return {
                ...state,
                depat_List: action.payload.depat_List
            }
        }

        case ADD_DEPARTMENT: {
            return {
                ...state,
                depat_List: [...initialState.depat_List, action.payload]
            }
        }
        default:
            return state
    }

}

export default DepartmentReducer

