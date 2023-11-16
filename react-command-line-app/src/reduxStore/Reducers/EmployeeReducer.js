import {
    EDIT_ROLE_DATA,
    GET_EMPLOYEE_LIST,
    GET_PAGINATED_DATA_EMPLOYEE,
    GET_FIRST_PAGE_EMPLOYEE
} from '../Actions/ActionTypes';

const initialState = {
    employee_list : [],
    role_data:[],
    Data1 :[]
}

function EmployeeReducer(state = initialState, action) {

    switch (action.type) {
        case GET_EMPLOYEE_LIST: {
            return {
                ...state,
                employee_list: action.payload.employee_list, 
                // Data1: action.payload.employee_list, 
            }
        }

        case EDIT_ROLE_DATA:{
            return{
            ...state,
            role_data:action.payload
            }
        }

        case GET_FIRST_PAGE_EMPLOYEE:{
            return{
            ...state,
            Data1:action.payload.Data1
            }
        }

        case GET_PAGINATED_DATA_EMPLOYEE:{
            return {
                ...state,   
                // Data1: state.Data1.concat(action.payload.Data1)
                // Data1 :[...initialState.Data1,action.payload.Data1]
                Data1: [...state.Data1, ...action.payload.Data1],
            }
        }

        default:
            return state
    }

}

export default EmployeeReducer

