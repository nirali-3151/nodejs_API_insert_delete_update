const conn = require('../../app/models/dbConnection');

exports.addDepartment = (req,res,next) => {
    const {department_name } = req.body
    const query = `INSERT INTO  department(department_name) VALUES('${department_name}')`
    conn.query(query, (error, rese ,data) => {
        if (error) {
            res.json(error)
        }
        else {
            res.json(rese);
        }
    })
}
