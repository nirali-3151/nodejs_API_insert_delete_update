import httpClient from "./httpClient";

import React, { Component } from 'react'

export default class UserService extends Component {

    //view Department list
    static async viewDepartmentList() {
        let result = []
        try {
            let api_name = "view-department"
            result = await httpClient.viewDepartment(api_name)
        } catch (error) {
            console.log("view Department", error);
        }
        return result
    }

    //Add Department List
    static async AddDepartmentList(newData) {
        let result = []
        try {
            let api_name = "addDepartment"
            result = await httpClient.addDepartment(api_name, newData)
        } catch (error) {
            console.log("view Department", error);
        }
        return result
    }

    //View Role List
    static async viewRoleList() {
        let result = []
        try {
            let api_name = "view-role"
            result = await httpClient.viewRole(api_name)
        } catch (error) {
            console.log("view Department", error);
        }
        return result
    }

    //Add Role List
    static async AddRoleList(newData) {
        let result = []
        try {
            let api_name = "addRole"
            result = await httpClient.addRole(api_name, newData)
        } catch (error) {
            console.log("view Department", error);
        }
        return result
    }

    //View Employee List
    // static async viewEmployeeList() {
    //     let result = []
    //     try {
    //         let api_name = "viewEmployee"
    //         result = await httpClient.viewEmployee(api_name)
    //     } catch (error) {
    //         console.log("view Department", error);
    //     }
    //     return result
    // }

    //View Employee List Data !== Data+1
    static async viewEmployeeList(newData) {
        let result = []
        try {
            let api_name = "viewEmployee"
            result = await httpClient.viewEmployee(api_name, newData)
        } catch (error) {
            console.log("view Department", error);
        }
        return result
    }

      //View Employee List Data === Data+1
      static async viewEmployeeList1(newData) {
        let result = []
        try {
            let api_name = "viewEmployee1"
            result = await httpClient.viewEmployee(api_name, newData)
        } catch (error) {
            console.log("view Department", error);
        }
        return result
    }


    //view Employee first time
    static async viewFirstPageEmployeeList(newData) {
        let result = []
        try {
            let api_name = "view-employee-first-page"
            result = await httpClient.viewEmployeeFirstPage(api_name, newData)
        } catch (error) {
            console.log("view Department", error);
        }
        return result
    }

    //Add Employee
    static async AddEmployeeList(newData) {
        let result = []
        try {
            let api_name = "addEmployee"
            result = await httpClient.addEmployee(api_name, newData)
        } catch (error) {
            console.log("view Department", error);
        }
        return result
    }

    //Add Employee1
    static async AddEmployeeList1(newData) {
        let result = []
        try {
            let api_name = "addEmployee1"
            result = await httpClient.addEmployee1(api_name, newData)
        } catch (error) {
            console.log("view Department", error);
        }
        return result
    }

    //Update Role
    static async UpdateRoleOfEmployee(newData) {
        let result = []
        try {
            let api_name = `updateRole/${newData.employee_id}`
            result = await httpClient.updateRole(api_name, newData)
        } catch (error) {
            console.log("view Department", error);
        }
        return result
    }

    //get role_name data for Drop down in employee
    static async getAllRoleData() {
        let result = []
        try {
            let api_name = "getRoleName"
            result = await httpClient.getRoleData(api_name)
        } catch (error) {
            console.log("view Department", error);
        }
        return result
    }

    //get manager data for Drop down in employee
    static async getAllManagerData(newData) {
        let result = []
        try {
            let api_name = "managerData"
            result = await httpClient.getManagerData(api_name, newData)
        } catch (error) {
            console.log("view Department", error);
        }
        return result
    }

    //get Page Count of Data
    static async getAllPageCount() {
        let result = ""
        try {
            let api_name = "page-count"
            result = await httpClient.getPageCount(api_name)
        } catch (error) {
            console.log("view Department", error);
        }
        return result
    }
}
