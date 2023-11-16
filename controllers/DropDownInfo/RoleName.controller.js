const conn = require('../../app/models/dbConnection');

//Get Role Data In Drop Down
exports.getRoleName = async (req, res, next) => {
    let sql = 'SELECT role_name ,role_id FROM role'
    conn.query(sql, function (err, data, fields) {
        if (err) throw err;
            res.send({ error: false, data: data, message: 'employee list.' });
    })

}

