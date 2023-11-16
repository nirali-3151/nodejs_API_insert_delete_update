const conn = require('../../app/models/dbConnection');

//get Manager Data in Drop Down
exports.getManagerData = async (req, res, next) => {
    const { department_id } = req.body
    let sql = `SELECT department_id FROM department WHERE  department_id = '${department_id}'`
    conn.query(sql, function (err, data1, fields) {
        const id = data1[0].department_id
        if (err) throw err;
        let sql1 = `SELECT first_name,employee_id FROM employee WHERE ${department_id} = dep_id`
        conn.query(sql1, function (err, data, fields) {
            if (err) throw err;
            res.send({ error: false, data: data, message: 'employee list.' });
        })
    })
}

