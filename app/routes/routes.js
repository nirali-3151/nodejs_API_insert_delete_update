const router = require('express').Router();
const { addEmployee, addEmployee1 } = require('../../controllers/AddInformation/addEmployee.Controller');
const { addRole } = require('../../controllers/AddInformation/addRole.controller')
const { addDepartment } = require('../../controllers/AddInformation/addDepartment.controller')
const { viewDepartment } = require('../../controllers/viewInformation/viewDepartment.controller')
const { updateRole } = require('../../controllers/UpdateInformation/updateRole.controller')
const { viewRole } = require('../../controllers/viewInformation/viewRolesList.controller')

const { viewEmployee,
        totalPageCount,
        viewEmployeeAtFirstPage,
        viewEmployee1 } = require('../../controllers/viewInformation/viewEmployee.controller')

const { getRoleName } = require('../../controllers/DropDownInfo/RoleName.controller')
const { getManagerData } = require('../../controllers/DropDownInfo/managerData.controller')

router.post('/addEmployee', addEmployee);
router.post('/addEmployee1', addEmployee1);
router.post('/addRole', addRole)
router.post('/addDepartment', addDepartment)

router.get('/view-department', viewDepartment)
router.get('/view-role', viewRole)
router.post('/viewEmployee', viewEmployee)
router.post('/viewEmployee1', viewEmployee1)
router.get('/view-employee-first-page', viewEmployeeAtFirstPage)


router.put('/updateRole/:id', updateRole)

//get DropDown Data
router.get('/getRoleName', getRoleName)
router.post('/managerData', getManagerData)

//get total  number of page count
router.get('/page-count', totalPageCount)

module.exports = router;
