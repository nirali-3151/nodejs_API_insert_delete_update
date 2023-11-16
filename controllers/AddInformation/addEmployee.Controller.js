const conn = require('../../app/models/dbConnection')


//Add employee When there exist manager
exports.addEmployee = (req, res, next) => {
    const { first_name, last_name, manager, job_title, role_id, department_id } = req.body
    const query = `INSERT INTO  employee (employee.first_name,employee.last_name,employee.job_title ,employee.r_id ,employee.Reporter_id ,employee.dep_id) VALUES('${first_name}','${last_name}','${job_title}',(SELECT role_id FROM role WHERE role_ID = '${role_id}'),(SELECT employee_id FROM employee e WHERE  e.employee_id= '${manager}'),(SELECT department_id FROM department WHERE department_id = '${department_id}'))`
    conn.query(query, (error, rese) => {
        if (error) {
            res.json(error)
        }
        else {
            res.json(rese);
        }
    })
}

//Add Employee When There is no manager
exports.addEmployee1 = (req, res, next) => {
    const { first_name, last_name, manager, job_title, role_id, department_id } = req.body

    const query = `INSERT INTO  employee (employee.first_name,employee.last_name,employee.job_title ,employee.r_id ,employee.dep_id) VALUES('${first_name}','${last_name}','${job_title}',(SELECT role_id FROM role WHERE role_ID = '${role_id}'),(SELECT department_id FROM department WHERE department_id = '${department_id}'))`
    conn.query(query, (error, rese) => {
        if (error) {
            res.json(error)
        }
        else {
            res.json(rese);
        }
    })
}
