import React, { Component } from 'react'
import UserService from 'services/userService';

import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";

import {
  getEmployeeList,
  editRoleData,
  getPaginatedDataEmployee,
  getFirstPageEmployee
} from "reduxStore/Actions/EmployeeAction"
import { connect } from "react-redux"

import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";

import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import ModeEditIcon from '@mui/icons-material/ModeEdit';
import Pagination from '@mui/material/Pagination';
import { PaginationItem } from "@mui/material"
import { makeStyles } from '@material-ui/core/styles';


import { blueColour, table_shadow_color } from "constants/constants"

import { useNavigate } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
  selected: {
    backgroundColor: "#1A73E8",
    color: "#1A73E8",
    fontWeight: "bolder"
  },
}),
);

class viewEmployee1 extends Component {
  constructor(props) {
    super(props)
    this.state = {
      perPage: 5,
      curruntPage: 1,
      offset: 0,
    }
  }

  //on page change during pagination
  handlePageClick = (e, value) => {
    const { curruntPage } = this.state
    const offset = (value - 1) * this.state.perPage;
    this.setState({
      curruntPage: value,
      offset: offset
    })
  };

  //get Data of employee on next page pagination
  getViewEmployeeData = async (page) => {
    const { curruntPage, perPage } = this.state
    const { Data1 } = this.props.employee

    let newData = {
      curruntPage: curruntPage,
      prevPage: page
    }

    const total_data = (curruntPage - 1) * perPage

    if (Data1.length > total_data) {
      const slice = Data1.slice(
        this.state.offset,
        this.state.offset + this.state.perPage
      );
      this.props.getEmployeeList1({ employee_list: slice })
    }
    else {

      const data = (curruntPage - 1) === (page)
      if (data) {
        const initialData = await UserService.viewEmployeeList1(newData);
        this.props.getPaginatedDataEmployee1({ Data1: initialData.data })
        this.props.getEmployeeList1({ employee_list: initialData.data })
      }
      else {
        const initialData = await UserService.viewEmployeeList(newData);
        this.props.getPaginatedDataEmployee1({ Data1: initialData.data })
        if (initialData.data.length % perPage === 0) {
          const slice = initialData.data.slice(
            initialData.data.length - perPage,
            initialData.data.length
          );
          this.props.getEmployeeList1({ employee_list: slice })
        }
        else {
          const slice = initialData.data.slice(
            initialData.data.length - (initialData.data.length % perPage),
            initialData.data.length
          );
          this.props.getEmployeeList1({ employee_list: slice })
        }
      }
    }
  }

  //get totla number of page Count
  getPageCountData = async () => {
    const initialData = await UserService.getAllPageCount();
    this.setState({ pageCount: initialData })
  }


  componentDidMount() {
    this.getPageCountData()
    this.getDataPagination()
  }

  //navigate when Add Employee
  onClickAddEmployee = async () => {
    this.props.navigate("/employee/add-employee")
  }

  //Navigate when Edit Role
  onClickEditRole = async (user) => {
    const { role_data } = this.props.employee
    this.props.navigate(`/employee/update-employee-role/${user.employee_id}`)
    this.props.editRoleData1(user)
  }

  //get Data of Previous page
  onClickPreviousPageBtn = async () => {
    const { Data1 } = this.props.employee
    const slice = Data1.slice(
      this.state.offset,
      this.state.offset + this.state.perPage
    );
    this.props.getEmployeeList1({ employee_list: slice })
  }

  //get data of First Page
  getDataPagination = async () => {
    const initialData = await UserService.viewFirstPageEmployeeList();
    this.props.getFirstPageEmployee1({Data1: initialData.data})
    this.props.getEmployeeList1({ employee_list: initialData.data })
  }

  componentDidUpdate(prevProps, prevState) {
    const { curruntPage } = this.state
    const isDiff = curruntPage !== prevState.curruntPage && curruntPage > prevState.curruntPage
    const isDiff1 = curruntPage !== prevState.curruntPage && curruntPage < prevState.curruntPage

    const page = prevState.curruntPage
    if (isDiff) {
      this.getViewEmployeeData(page)
    }
    if (isDiff1) {
      this.onClickPreviousPageBtn()
    }
  }


  render() {
    const { employee_list } = this.props.employee

    return (
      <DashboardLayout>
        <DashboardNavbar />

        <MDBox
          mx={2}
          mt={1}
          py={0.75}
          px={1}
          variant=""
          bgColor={blueColour}
          borderRadius="lg"
          coloredShadow={table_shadow_color}
          onClick={(e) => this.onClickAddEmployee(e)}
        >
          <MDTypography variant="h6" color="white" align="center">
            Add Employee
          </MDTypography>
        </MDBox>

        <MDBox pt={6} pb={3}>
          <Grid container spacing={6}>
            <Grid item xs={12} >
              <Card>
                <MDBox
                  mx={2}
                  mt={-3}
                  py={3}
                  px={2}
                  variant=""
                  bgColor={blueColour}
                  borderRadius="lg"
                  coloredShadow={table_shadow_color}
                >
                  <MDTypography variant="h6" color="white">
                    View Employee List
                  </MDTypography>
                </MDBox>
                <div>
                  <div className='root1'>
                    <div style={{ overflowX: "auto" }}>
                      <table className='table1'>
                        <thead>
                          <tr>
                            <th style={{ paddingLeft: "40px" }}>Id</th>
                            <th>First Name</th>
                            <th>Last Name</th>
                            <th>Job Title</th>
                            <th>Department Name</th>
                            <th>Salary</th>
                            <th>Manager</th>
                            <th>Edit</th>
                          </tr>
                        </thead>

                        <tbody className='tbody1'>
                          {
                            employee_list.map((user) => (
                              <tr key={user.id}>
                                <td style={{ paddingLeft: "40px" }}>{user.employee_id}</td>
                                <td>{user.first_name} </td>
                                <td>{user.last_name}</td>
                                <td>{user.job_title}</td>
                                <td>{user.department_name}</td>
                                <td>{user.salary}</td>
                                <td>{user.manager}</td>
                                <td><span onClick={() => this.onClickEditRole(user)}><ModeEditIcon style={{ height: "22px", width: "22px" }}></ModeEditIcon></span></td>
                              </tr>
                            ))
                          }
                        </tbody>
                        <div>
                        </div>
                      </table>
                    </div>
                  </div>
                </div>
              </Card>
            </Grid>
          </Grid>
        </MDBox>


        <div>
          <Grid justifyContent="center" container>
            <Pagination
              count={this.state.pageCount}
              onChange={this.handlePageClick}
              page={this.state.curruntPage}
              className={this.props.classes.root}
              renderItem={(item) => <PaginationItem {...item}
                classes={{ selected: this.props.classes.selected }} />}
            />
          </Grid>
        </div>

      </DashboardLayout >
    )
  }
}

const mapStateToProps = state => {
  return {
    employee: state.EmployeeReducer,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getEmployeeList1: (payload) => dispatch(getEmployeeList(payload)),
    editRoleData1: (payload) => dispatch(editRoleData(payload)),
    getPaginatedDataEmployee1: (payload) => dispatch(getPaginatedDataEmployee(payload)),
    getFirstPageEmployee1 :(payload) => dispatch(getFirstPageEmployee(payload))
  }
}

const Add = connect(mapStateToProps, mapDispatchToProps)(viewEmployee1);

function viewEmployee(props) {
  const navigate = useNavigate();
  const classes = useStyles();
  return <Add {...props} navigate={navigate} classes={classes} />
}
export default viewEmployee;

