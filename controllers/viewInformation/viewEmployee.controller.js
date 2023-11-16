const conn = require('../../app/models/dbConnection');
var Promise = require('bluebird');

var queryAsync = Promise.promisify(conn.query.bind(conn));

const numPerPage = 5

//get data when prevState.page >= page+1
exports.viewEmployee = async (req, res, next) => {
    const { curruntPage, prevPage } = req.body
    var numRows;
    // var numPerPage = parseInt(req.query.npp, 10) || 1;
    var page = parseInt(req.query.page, 10) || (curruntPage);

    var numPages;
    var skip = (numPerPage * (prevPage))
    var skip1 = Math.abs(skip)
    var item = (numPerPage * (page-prevPage))
    var item1 = Math.abs(item)
    var limit = skip1 + ',' + item1

    queryAsync('SELECT count(*) as numRows FROM employee')
        .then(function (results) {
            numRows = results[0].numRows;
            numPages = Math.ceil(numRows / numPerPage);
        })
        .then(() => queryAsync('SELECT e.first_name AS manager,em.employee_id, em.last_name , em.first_name , em.job_title ,role.salary,role.role_name ,department.department_name  FROM employee AS e RIGHT JOIN  employee AS em ON ( e.employee_id=em.Reporter_id) LEFT JOIN role ON (em.r_id = role.role_id) LEFT JOIN department ON (em.dep_id = department.department_id) ORDER BY em.employee_id  LIMIT ' + limit))
        .then(function (results) {
            var responsePayload = {
                data: results
            };
            if (page < numPages) {
                responsePayload.pagination = {
                    currentPage: page,
                    perPage: numPerPage,
                    previous: page > 0 ? page - 1 : undefined,
                    next: page < numPages - 1 ? page + 1 : undefined
                }
            }
            else responsePayload.pagination = {
                err: 'queried page ' + page + ' is >= to maximum page number ' + numPages
            }
            res.json(responsePayload);
        })
        .catch(function (err) {
            console.error(err);
            res.json({ err: err });
        });
}


//get data when data === data+1
exports.viewEmployee1 = async (req, res, next) => {
    const { curruntPage, prevPage } = req.body
    var numRows;
    // var numPerPage = parseInt(req.query.npp, 10) || 1;
    var page = parseInt(req.query.page, 10) || (curruntPage - 1);

    var numPages;
    var skip = (page) * numPerPage;
    var limit = skip + ',' + numPerPage;

    queryAsync('SELECT count(*) as numRows FROM employee')
        .then(function (results) {
            numRows = results[0].numRows;
            numPages = Math.ceil(numRows / numPerPage);
        })
        .then(() => queryAsync('SELECT e.first_name AS manager,em.employee_id, em.last_name , em.first_name , em.job_title ,role.salary,role.role_name ,department.department_name  FROM employee AS e RIGHT JOIN  employee AS em ON ( e.employee_id=em.Reporter_id) LEFT JOIN role ON (em.r_id = role.role_id) LEFT JOIN department ON (em.dep_id = department.department_id) ORDER BY em.employee_id  LIMIT ' + limit))
        .then(function (results) {
            var responsePayload = {
                data: results
            };
            if (page < numPages) {
                responsePayload.pagination = {
                    currentPage: page,
                    perPage: numPerPage,
                    previous: page > 0 ? page - 1 : undefined,
                    next: page < numPages - 1 ? page + 1 : undefined
                }
            }
            else responsePayload.pagination = {
                err: 'queried page ' + page + ' is >= to maximum page number ' + numPages
            }
            res.json(responsePayload);
        })
        .catch(function (err) {
            console.error(err);
            res.json({ err: err });
        });
}

//api for get total number of page count
exports.totalPageCount = async (req, res, next) => {
    let sql = 'SELECT count(*) AS numRows FROM employee'
    conn.query(sql, function (err, data, fields) {
        if (err) throw err;
        numRows = data[0].numRows;
        numPages = Math.ceil(numRows / numPerPage);
        res.send({ error: false, data: numPages, message: 'employee list.' });
    })
}


//api for get data of first page
exports.viewEmployeeAtFirstPage = async (req, res, next) => {
    let sql = `SELECT e.first_name AS manager,em.employee_id, em.last_name , em.first_name , em.job_title ,role.salary,role.role_name ,department.department_name  FROM employee AS e RIGHT JOIN  employee AS em ON ( e.employee_id=em.Reporter_id) LEFT JOIN role ON (em.r_id = role.role_id) LEFT JOIN department ON (em.dep_id = department.department_id) ORDER BY em.employee_id LIMIT ${numPerPage}`
    conn.query(sql, function (err, data, fields) {
        if (err) throw err;
        res.send({ error: false, data: data, message: 'employee list.' });
    })
}


// exports.viewEmployee = async (req, res, next) => {
//     let sql = 'SELECT e.first_name AS manager,em.employee_id, em.last_name , em.first_name , em.job_title ,role.salary,role.role_name ,department.department_name  FROM employee AS e RIGHT JOIN  employee AS em ON ( e.employee_id=em.Reporter_id) LEFT JOIN role ON (em.r_id = role.role_id) LEFT JOIN department ON (em.dep_id = department.department_id) ORDER BY em.employee_id '
//     conn.query(sql, function (err, data, fields) {
//         if (err) throw err;
//             res.send({ error: false, data: data, message: 'employee list.' });
//     })
// }
