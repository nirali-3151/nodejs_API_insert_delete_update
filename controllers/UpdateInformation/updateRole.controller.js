const conn = require('../../app/models/dbConnection');

//Update Role of Perticular employee
  exports.updateRole = (req, res, next) => {
      console.log("req" , req.body);
      const {role_name} = req.body
      const result =
      `Update employee SET r_id = (SELECT role_id FROM role WHERE role_name = '${role_name}') where employee_id =${req.params.id}`
        conn.query(result,(err,rese) => {
            if(err)
            {
                res.json(err)
            }
            else{
                res.json(rese);
            }
        })
  
  }
  