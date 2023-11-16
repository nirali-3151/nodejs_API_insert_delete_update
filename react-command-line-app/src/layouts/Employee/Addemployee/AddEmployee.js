import React, { Component } from 'react';

import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";

import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";

import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import Select from '@mui/material/Select';
import MenuItem from "@mui/material/MenuItem";

import { connect } from 'react-redux';

import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';

import { blueColour, table_shadow_color } from "constants/constants"

import { useNavigate } from 'react-router-dom';
import UserService from 'services/userService';

class AddEmployee1 extends Component {
  constructor(props) {
    super(props)
    this.state = {
      manager_Data_dd: [],
      depart_Data_dd: [],
      role_Data_dd: [],
      Data: {
        first_name: "",
        last_name: "",
        manager: "",
        job_title: "",
        role_id: "",
        department_id: ""
      }
    }
  }

  onChangeHandler = (e) => {
    const { Data } = this.state
    // this.handleValidate(e)
    this.setState({
      Data: { ...Data, [e.target.name]: e.target.value }
    });
  }

  componentDidUpdate(prevProps, prevState) {
    const { department_id, manager } = this.state.Data
    if (department_id !== prevState.Data.department_id) {
      this.changeManagerWithValue()
    }
  }


  //change a data of manager with department change
  changeManagerWithValue = async () => {
    const { department_id } = this.state.Data
    let newData = {
      department_id: department_id
    }
    const initialData = await UserService.getAllManagerData(newData);
    this.setState({ manager_Data_dd: initialData })
  }


  componentDidMount() {
    this.getRoleData();
    this.getDepartmentData()
  }

  //Add Department btn click
  onClickAddEmployee = async (e) => {
    const { manager_Data_dd } = this.state
    const { first_name, last_name, manager, job_title, role_id, department_id } = this.state.Data
    e.preventDefault();

    var newData = {
      first_name: first_name,
      last_name: last_name,
      role_id: role_id,
      manager: manager,
      job_title: job_title,
      department_id: department_id
    }
    if (newData.role_id === '' || newData.department_id === "") {
      alert("Role name , manager name name can  not be a empty")
    }
    else if ( manager_Data_dd.length === 0)
    {
      const initialData = await UserService.AddEmployeeList1(newData);
      this.props.navigate("/employee")
    }
    else
    {
      const initialData = await UserService.AddEmployeeList(newData);
      this.props.navigate("/employee")
    }
  }

  //get data of role_name on drop_down
  getRoleData = async () => {
    const initialData = await UserService.getAllRoleData();
    this.setState({ role_Data_dd: initialData })
  }

  //get data of role_name on drop_down
  getDepartmentData = async () => {
    const initialData = await UserService.viewDepartmentList();
    this.setState({ depart_Data_dd: initialData })
  }

  render() {
    const { role_Data_dd,  depart_Data_dd, manager_Data_dd } = this.state
    const { first_name, last_name, manager, job_title, role_id, department_id } = this.state.Data
    return (
      <DashboardLayout>
        <DashboardNavbar />
        <MDBox pt={10} pb={1}>
          <Grid justifyContent="center" container>
            <Grid item xs={12} sm={8.5} md={9}>
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
                    Add New Department
                  </MDTypography>
                </MDBox>

                <MDBox mt={2} ml={2.5}>
                  <MDBox mb={2} pr={2.5}>
                    <Grid container spacing={1}>
                      <Grid item xs={12} lg={12}  >
                        <Grid container spacing={1.9}>
                          <Grid item xs={12} xl={6} md={6}>
                            <FormControl fullWidth variant="outlined">
                              <InputLabel htmlFor="outlined-adornment-fName">First Name</InputLabel>
                              <OutlinedInput
                                id="outlined-adornment-fName"
                                name="first_name"
                                value={first_name}
                                onChange={this.onChangeHandler}
                                label="First Name"
                                aria-describedby="outlined-weight-helper-text"
                              />
                            </FormControl>
                          </Grid>
                          <Grid item xs={12} md={6} xl={6}>
                            <MDBox mb={2}>
                              <FormControl fullWidth variant="outlined">
                                <InputLabel htmlFor="outlined-adornment-lName">Last Name</InputLabel>
                                <OutlinedInput
                                  id="outlined-adornment-lName"
                                  name="last_name"
                                  value={last_name}
                                  onChange={this.onChangeHandler}
                                  label="Last Name"
                                  aria-describedby="outlined-weight-helper-text"
                                />
                              </FormControl>
                            </MDBox>
                          </Grid>
                        </Grid>
                      </Grid>
                    </Grid>

                    <Grid container spacing={1}>
                      <Grid item xs={12} lg={12}  >
                        <Grid container spacing={1.9}>
                          <Grid item xs={12} xl={6} md={6}>
                            <FormControl fullWidth variant="outlined">
                              <InputLabel htmlFor="outlined-adornment-title">Department Name</InputLabel>
                              <Select
                                style={{ height: "44px" }}
                                labelId="demo-simple-select-label"
                                id="outlined-adornment-dName"
                                label="Department name"
                                name="department_id"
                                value={department_id}
                                onChange={this.onChangeHandler}
                              // onChange={this.getDataWithOnChange}
                              >
                                {depart_Data_dd.map((item) => (
                                  <MenuItem key={item.department_id} value={item.department_id}>
                                    {item.department_name}
                                  </MenuItem>
                                ))}
                              </Select>
                            </FormControl>
                          </Grid>
                          <Grid item xs={12} md={6} xl={6}>
                            <MDBox mb={2}>
                              <FormControl fullWidth variant="outlined">
                                <InputLabel htmlFor="outlined-adornment-title">Job Title</InputLabel>
                                <OutlinedInput
                                  id="outlined-adornment-title"
                                  name="job_title"
                                  value={job_title}
                                  onChange={this.onChangeHandler}
                                  label="Job Title"
                                  aria-describedby="outlined-weight-helper-text"
                                />
                              </FormControl>
                            </MDBox>
                          </Grid>
                        </Grid>
                      </Grid>
                    </Grid>

                    <Grid container spacing={1}>
                      <Grid item xs={12} lg={12}  >
                        <Grid container spacing={1.9}>
                          <Grid item xs={12} xl={6} md={6}>
                            <FormControl fullWidth variant="outlined">
                              <InputLabel htmlFor="outlined-adornment-lName">Role Name</InputLabel>
                              <Select
                                style={{ height: "44px" }}
                                labelId="demo-simple-select-label"
                                id="outlined-adornment-lName"
                                label="Role Name"
                                name="role_id"
                                value={role_id}
                                onChange={this.onChangeHandler}
                              >
                                {role_Data_dd.map((item) => (
                                  <MenuItem key={item.role_id} value={item.role_id}>
                                    {item.role_name}
                                  </MenuItem>
                                ))}
                              </Select>
                            </FormControl>
                          </Grid>
                          <Grid item xs={12} md={6} xl={6}>
                            <MDBox mb={2}>
                              <FormControl fullWidth variant="outlined">
                                <InputLabel htmlFor="outlined-adornment-manager">Manager</InputLabel>
                                <Select
                                  style={{ height: "44px" }}
                                  labelId="demo-simple-select-label"
                                  id="outlined-adornment-lName"
                                  label="Manager"
                                  name="manager"
                                  value={manager}
                                  onChange={this.onChangeHandler}
                                >
                                  {manager_Data_dd.length === 0 && department_id === '' ?
                                    <MenuItem style={{ color: "red" }}> First Select Department Name of Employee</MenuItem>
                                    :
                                    manager_Data_dd.length === 0
                                      ?
                                      <MenuItem style={{ color: "red" }}>this department does not contain any employee</MenuItem>
                                      :
                                      manager_Data_dd.map((item) => (
                                        <MenuItem key={item.employee_id} value={item.employee_id}>
                                          {item.first_name}
                                        </MenuItem>
                                      ))}
                                </Select>
                              </FormControl>
                            </MDBox>
                          </Grid>
                        </Grid>
                      </Grid>
                    </Grid>

                    <MDBox pt={3} pb={2}>
                      <MDBox
                        mx={0}
                        mt={-3}
                        py={0.75}
                        px={2}
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
                    </MDBox>
                  </MDBox>

                </MDBox>
              </Card>
            </Grid>
          </Grid>
        </MDBox>
      </DashboardLayout >
    )
  }
}

const mapStateToProps = state => {
  return {
    // department: state.DepartmentReducer,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    // AddNewDepartment1 : (payload) => dispatch(AddNewDepartment(payload))
  }
}

const Add = connect(mapStateToProps, mapDispatchToProps)(AddEmployee1)

function AddEmployee(props) {
  const navigate = useNavigate();
  return <Add {...props} navigate={navigate} />
}
export default AddEmployee;
