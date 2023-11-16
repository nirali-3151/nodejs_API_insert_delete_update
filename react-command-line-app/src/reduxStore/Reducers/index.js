import { combineReducers } from 'redux'
import DepartmentReducer from './DepartmentReducer'
import RoleReducer from './RoleReducer';
import EmployeeReducer from './EmployeeReducer';

const reducer = combineReducers(
    {
        DepartmentReducer: DepartmentReducer,
        RoleReducer:RoleReducer,
        EmployeeReducer:EmployeeReducer
    }
)

export default reducer;