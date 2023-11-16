import {
    GET_EMPLOYEE_LIST,
    EDIT_ROLE_DATA,
    GET_PAGINATED_DATA_EMPLOYEE,
    GET_FIRST_PAGE_EMPLOYEE
} from './ActionTypes';

//array to set slicing
export const getEmployeeList = (payload) => {
    return {
        type: GET_EMPLOYEE_LIST,
        payload
    };
};

//append A new data in main Array during Api call
export const getPaginatedDataEmployee = (payload) => {
    return {
        type:GET_PAGINATED_DATA_EMPLOYEE,
        payload
    }
}

//get Data of first Page in main array
export const getFirstPageEmployee = (payload) => {
    return {
        type:GET_FIRST_PAGE_EMPLOYEE,
        payload
    }
}

//Edit role Data of Perticular Employee
export const editRoleData = (payload) => {
    return {
        type:EDIT_ROLE_DATA,
        payload
    }
}