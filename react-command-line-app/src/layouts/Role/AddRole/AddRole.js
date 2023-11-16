import React, { Component } from 'react';

import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";

import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";

import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";

import { connect } from 'react-redux';

import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import MenuItem from "@mui/material/MenuItem";

import { blueColour, table_shadow_color } from "constants/constants"

import { useNavigate } from 'react-router-dom';

import { addNewRole } from "reduxStore/Actions/RoleAction"

import UserService from 'services/userService';

class AddRole1 extends Component {
  constructor(props) {
    super(props)
    this.state = {
      department_Data_dd: [],
      Data: {
        role_name: "",
        salary: "",
        depart_id:""
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

  //Add Role btn click
  onClickAddRole = async (e) => {
    const { role_name, salary,depart_id } = this.state.Data
    e.preventDefault();
    var newData = {
      role_name: role_name,
      salary: salary,
      depart_id:depart_id
    }

    if (newData.depart_id === '') {
      alert("department name can not be a empty")
    }
    else {
    const initialData = await UserService.AddRoleList(newData);
    this.props.navigate("/view-role")
    this.props.addNewRole1(initialData)
    }
  }

  componentDidMount() {
    this.getDepartmentDropDownData()
  }

  //get DropDown Data of Department
  getDepartmentDropDownData = async () => {
    const initialData = await UserService.viewDepartmentList();
    this.setState({ department_Data_dd: initialData })
  }

  render() {
    const { department_Data_dd } = this.state
    const { role_name, salary,depart_id } = this.state.Data
    return (
      <DashboardLayout>
        <DashboardNavbar />
        <MDBox pt={10} pb={1}>
          <Grid justifyContent="center" container>
            <Grid item xs={12} sm={8.5} md={7}>
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
                    Add New Role
                  </MDTypography>
                </MDBox>

                <MDBox mt={2} ml={2.5}>
                  <MDBox mb={2} pr={2.5}>
                    <MDBox mb={2}>
                      <FormControl fullWidth variant="outlined">
                        <InputLabel htmlFor="outlined-adornment-rName">Role Name</InputLabel>
                        <OutlinedInput
                          id="outlined-adornment-rName"
                          name="role_name"
                          value={role_name}
                          onChange={this.onChangeHandler}
                          label="Role Name"
                          aria-describedby="outlined-weight-helper-text"
                        />
                      </FormControl>
                    </MDBox>

                    <MDBox mb={2}>
                      <FormControl fullWidth variant="outlined">
                        <InputLabel htmlFor="outlined-adornment-salary">Salary</InputLabel>
                        <OutlinedInput
                          id="outlined-adornment-salary"
                          name="salary"
                          value={salary}
                          onChange={this.onChangeHandler}
                          label="Salary"
                          aria-describedby="outlined-weight-helper-text"
                        />
                      </FormControl>
                    </MDBox>

                    <MDBox mb={2}>
                      <FormControl fullWidth variant="outlined">
                        <InputLabel htmlFor="outlined-adornment-dName">Department Name</InputLabel>
                        <Select
                          style={{ height: "44px" }}
                          labelId="demo-simple-select-label"
                          id="outlined-adornment-dName"
                          label="Department name"
                          name="depart_id"
                          value={depart_id}
                          onChange={this.onChangeHandler}
                        >
                          {department_Data_dd.map((item) => (
                            <MenuItem key={item.department_id} value={item.department_id}>
                              {item.department_name}
                            </MenuItem>
                          ))}
                        </Select>
                      </FormControl>
                    </MDBox>

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
                        onClick={(e) => this.onClickAddRole(e)}
                      >
                        <MDTypography variant="h6" color="white" align="center">
                          Add Role
                        </MDTypography>
                      </MDBox>
                    </MDBox>
                  </MDBox>
                </MDBox>
              </Card>
            </Grid>
          </Grid>
        </MDBox>

      </DashboardLayout>
    )
  }
}

const mapStateToProps = state => {
  return {
    role: state.RoleReducer,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    addNewRole1: (payload) => dispatch(addNewRole(payload))
  }
}

const Add = connect(mapStateToProps, mapDispatchToProps)(AddRole1)

function AddRole(props) {
  const navigate = useNavigate();
  return <Add {...props} navigate={navigate} />
}
export default AddRole;
