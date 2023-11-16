const conn = require('../../app/models/dbConnection');

exports.viewRole = async (req, res, next) => {
    // 'SELECT employee.employee_id  , employee.first_name , employee.last_name , employee.manager , role.salary , role.department , role.job_title FROM employee  LEFT JOIN role ON (employee.role =role.name)'
    var sql = 'SELECT role.role_id , role.role_name, role.salary , department.department_name FROM role JOIN department ON (role.dep_id = department.department_id) ORDER BY role_id'
    conn.query(sql, function (err, data, fields) {
        if (err) throw err;
        res.send({ error: false, data: data, message: 'role list.' });
    });
   
}   