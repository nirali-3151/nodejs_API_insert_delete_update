const conn = require('../../app/models/dbConnection');

exports.viewDepartment = async (req, res, next) => {
    var sql = 'SELECT * FROM department'
    conn.query(sql, function (err, data, fields) {
        if (err) throw err;
        res.send({ error: false, data: data, message: 'department list.' });
    });
   
}   