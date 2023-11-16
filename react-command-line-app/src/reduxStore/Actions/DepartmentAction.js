import {
    GET_DEPARTMENT_LIST,
    ADD_DEPARTMENT
} from './ActionTypes';


//view Department list
export const getDepartmentList = (payload) => {
    return {
        type: GET_DEPARTMENT_LIST,
        payload
    };
};

//Add New Department in department List
export const AddNewDepartment = (payload) => {
    return {
        type :ADD_DEPARTMENT,
        payload
    }
}