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


import { blueColour } from "constants/constants"

import { useNavigate } from 'react-router-dom';

import UserService from 'services/userService';

class UpdateRole1 extends Component {
  constructor(props) {
    super(props)
    this.state = {
      role_Data_dd: [],
      Data: {
        role_name: ""
      }
    }
  }

  onChangeHandler = (e) => {
    const { Data } = this.state
    this.setState({
      Data: { ...Data, [e.target.name]: e.target.value }
    });
  }

  componentDidMount() {
    const { role_data } = this.props.employee
    this.setState({ Data: role_data })
    this.getRoleDataDropDown()
  }

  //Update Role btn click
  onClickUpdateRole = async (e) => {
    const { role_data } = this.props.employee
    const { role_name } = this.state.Data
    e.preventDefault();
    var newData = {
      employee_id: role_data.employee_id,
      role_name: role_name
    }

    if (newData.role_name === '') {
      alert(" role name can not be a empty")
    }
    else {
      const initialData = await UserService.UpdateRoleOfEmployee(newData);
      this.props.navigate("/employee")
      // this.props.AddNewDepartment1(initialData)
    }
  }

  //role_name when Data is Updated in drop down
  getRoleDataDropDown = async () => {
    const initialData = await UserService.getAllRoleData();
    this.setState({ role_Data_dd: initialData })
  }

  render() {
    const { role_Data_dd, Data } = this.state
    const { role_name } = this.state.Data
    return (
      <DashboardLayout>
        <DashboardNavbar />
        <MDBox pt={6} pb={1}>
          <Grid justifyContent="center" container>
            <Grid item xs={12} sm={8.5} md={8}>
              <Card>
                <MDBox
                  mx={2}
                  mt={-3}
                  py={3}
                  px={2}
                  variant=""
                  bgColor={blueColour}
                  borderRadius="lg"
                  coloredShadow="info"

                >
                  <MDTypography variant="h6" color="white">
                    update Employee Role
                  </MDTypography>
                </MDBox>

                <MDBox mt={2} ml={2.5}>
                  <MDBox mb={2} pr={2.5}>
                    <MDBox mb={2}>
                      <FormControl fullWidth variant="outlined">
                        <InputLabel htmlFor="outlined-adornment-rName">Role Name</InputLabel>
                        <Select
                          style={{ height: "44px" }}
                          labelId="demo-simple-select-label"
                          id="outlined-adornment-lName"
                          label="Role Name"
                          name="role_name"
                          value={role_name}
                          onChange={this.onChangeHandler}
                        >
                          {role_Data_dd.map((item) => (Data.role_name === item.role_name) ?
                            <MenuItem value={Data.role_name} >{Data.role_name}</MenuItem>
                            : <MenuItem key={item.role_id} value={item.role_name} >
                              {item.role_name}
                            </MenuItem>
                          )}
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
                        coloredShadow="info"
                        onClick={(e) => this.onClickUpdateRole(e)}
                      >
                        <MDTypography variant="h6" color="white" align="center">
                          Update Role
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
    employee: state.EmployeeReducer
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    // AddNewDepartment1 : (payload) => dispatch(AddNewDepartment(payload))
  }
}

const Add = connect(mapStateToProps, mapDispatchToProps)(UpdateRole1)

function UpdateRole(props) {
  const navigate = useNavigate();
  return <Add {...props} navigate={navigate} />
}
export default UpdateRole;
