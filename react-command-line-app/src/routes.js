// @mui iconsa
import LocalOfferIcon from '@mui/icons-material/LocalOffer';
import PeopleIcon from '@mui/icons-material/People';
import CorporateFareIcon from '@mui/icons-material/CorporateFare';

import ViewDepartment from "layouts/Department/viewDepartment/ViewDepartment";
import AddDepartment from "layouts/Department/AddDepartMent/AddDepartment";

import ViewRole from "layouts/Role/viewRole/ViewRole";
import AddRole from "layouts/Role/AddRole/AddRole";

import ViewEmployee from "layouts/Employee/viewEmployee/ViewEmployee";
import AddEmployee from "layouts/Employee/Addemployee/AddEmployee";
import UpdateRole from "layouts/Employee/UpdateRole/UpdateRole";

const routes = [
  {
    type: "collapse",
    name: "Department",
    key: "view-department",
    icon: <CorporateFareIcon fontSize="small"></CorporateFareIcon>,
    route: "/view-department",
    component: <ViewDepartment />,
  },

  {
    key: "addDepartment",
    route: "/view-department/add-Depatment",
    component: <AddDepartment/>
 },

  {
    type: "collapse",
    name: "Role",
    key: "view-role",
    icon: <LocalOfferIcon fontSize="small"></LocalOfferIcon>,
    route: "/view-role",
    component: <ViewRole />,
  },

  {
    key: "addRole",
    route: "view-role/add-role",
    component: <AddRole/>
 },

  {
    type: "collapse",
    name: "Employee",
    key: "employee",
    icon: <PeopleIcon fontSize="small"></PeopleIcon>,
    route: "/employee",
    component: <ViewEmployee />,
  },
  
  {
    key: "addEmployee",
    route: "/employee/add-employee",
    component: <AddEmployee/>
 },

 {
  key: "update-employee-role",
  route: "/employee/update-employee-role/:id",
  component: <UpdateRole />,
 }

];

export default routes;
