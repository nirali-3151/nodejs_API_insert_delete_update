import EnvironmentStore from "stores/EnvironmentStore";

import React, { Component } from 'react'

class httpClient extends Component {
    static url(path) {
        var host = EnvironmentStore.getApiHost('test')
        return host + "/" + path
    }

    //View Department List
    static async viewDepartment(path) {
        try {
            let url = this.url(path);
            return fetch(url, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                }
            })
                .then((res) => res.json())
                .then(data => {
                    return data.data
                })
        } catch (error) {
            console.log("service issue", error);
        }
    }

    //Add Department
    static async addDepartment(path,newData) {
        try {
            let url = this.url(path);
            return fetch(url, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                },
                body: JSON.stringify(newData),
            })
                .then((res) => res.json())
                .then(data => {
                    return data
                })
        } catch (error) {
            console.log("service issue", error);
        }
    }

    //Role List
    static async viewRole(path) {
        try {
            let url = this.url(path);
            return fetch(url, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                }
            })
                .then((res) => res.json())
                .then(data => {
                    return data.data
                })
        } catch (error) {
            console.log("service issue", error);
        }
    }

    //Add Role
    static async addRole(path,newData) {
        try {
            let url = this.url(path);
            return fetch(url, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                },
                body: JSON.stringify(newData),
            })
                .then((res) => res.json())
                .then(data => {
                    return data
                })
        } catch (error) {
            console.log("service issue", error);
        }
    }

    //Employee List At first Page
    static async viewEmployeeFirstPage(path) {
        try {
            let url = this.url(path);
            return fetch(url, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                }
            })
                .then((res) => res.json())
                .then(data => {
                    return data
                })
        } catch (error) {
            console.log("service issue", error);
        }
    }

      //Employee List data !== data+1
      static async viewEmployee(path ,newData) {
        try {
            let url = this.url(path);
            return fetch(url, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                },
                body: JSON.stringify(newData),
            })
                .then((res) => res.json())
                .then(data => {
                    return data
                })
        } catch (error) {
            console.log("service issue", error);
        }
    }

    //Add Employee if there is manager
    static async addEmployee(path,newData) {
        try {
            let url = this.url(path);
            return fetch(url, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                },
                body: JSON.stringify(newData),
            })
                .then((res) => res.json())
                .then(data => {
                    return data
                })
        } catch (error) {
            console.log("service issue", error);
        }
    }

    //Add Employee if there is no any manager
    static async addEmployee1(path,newData) {
        try {
            let url = this.url(path);
            return fetch(url, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                },
                body: JSON.stringify(newData),
            })
                .then((res) => res.json())
                .then(data => {
                    return data
                })
        } catch (error) {
            console.log("service issue", error);
        }
    }

    //Update Role
    static async updateRole(path,newData) {
        try {
            let url = this.url(path);
            return fetch(url, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                },
                body: JSON.stringify(newData),
            })
                .then((res) => res.json())
                .then(data => {
                    return data
                })
        } catch (error) {
            console.log("service issue", error);
        }
    }

    //get role_name data for Drop down in employee
    static async getRoleData(path) {
        try {
            let url = this.url(path);
            return fetch(url, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                }
            })
                .then((res) => res.json())
                .then(data => {
                    return data.data
                })
        } catch (error) {
            console.log("service issue", error);
        }
    }

    //get Manager data for Drop down in employee
    static async getManagerData(path ,newData) {
        try {
            let url = this.url(path);
            return fetch(url, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                },
                body: JSON.stringify(newData),
            })
                .then((res) => res.json())
                .then(data => {
                    return data.data
                })
        } catch (error) {
            console.log("service issue", error);
        }
    }
    
    //get Total number of page count in employee table
    static async getPageCount(path) {
        try {
            let url = this.url(path);
            return fetch(url, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                }
            })
                .then((res) => res.json())
                .then(data => {
                    return data.data
                })
        } catch (error) {
            console.log("service issue", error);
        }
    }
}



export default httpClient