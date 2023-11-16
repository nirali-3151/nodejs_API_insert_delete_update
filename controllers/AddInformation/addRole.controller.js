const conn = require('../../app/models/dbConnection');

exports.addRole = (req, res, next) => {
    const { role_name, salary,  depart_id } = req.body
    const query = `INSERT INTO role(role_name,salary,dep_id) VALUES('${role_name}','${salary}',(SELECT department_id FROM department WHERE department_id = '${depart_id}'))`
    conn.query(query, (error, rese) => {
        if (error) {
            res.json(error)
        }
        else {
            res.json(rese);
        }
    })
}
