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

import { blueColour, table_shadow_color } from "constants/constants"

import { useNavigate } from 'react-router-dom';

import { AddNewDepartment } from "reduxStore/Actions/DepartmentAction"

import UserService from 'services/userService';

class AddDepartment1 extends Component {
  constructor(props) {
    super(props)
    this.state = {
      Data: {
        department_name: ""
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

  //Add Department btn click
  onClickAddDepartment = async (e) => {
    const { department_name } = this.state.Data
    e.preventDefault();
    var newData = {
      department_name: department_name
    }

    if (newData.department_name === '') {
      alert("department name can not be a empty")
    }
    else {
      const initialData = await UserService.AddDepartmentList(newData);
      this.props.navigate("/view-department")
      this.props.AddNewDepartment1(initialData)
    }
  }

  render() {
    const { department_name } = this.state.Data
    return (
      <DashboardLayout>
        <DashboardNavbar />
        <MDBox pt={10} pb={1}>
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
                  coloredShadow={table_shadow_color}

                >
                  <MDTypography variant="h6" color="white">
                    Add New Department
                  </MDTypography>
                </MDBox>

                <MDBox mt={2} ml={2.5}>
                  <MDBox mb={2} pr={2.5}>
                    <MDBox mb={2}>
                      <FormControl fullWidth variant="outlined">
                        <InputLabel htmlFor="outlined-adornment-dName">Department Name</InputLabel>
                        <OutlinedInput
                          id="outlined-adornment-dName"
                          name="department_name"
                          value={department_name}
                          onChange={this.onChangeHandler}
                          label="Department Name"
                          aria-describedby="outlined-weight-helper-text"
                        />
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
                        onClick={(e) => this.onClickAddDepartment(e)}
                      >
                        <MDTypography variant="h6" color="white" align="center">
                          Add Department
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
    department: state.DepartmentReducer,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    AddNewDepartment1: (payload) => dispatch(AddNewDepartment(payload))
  }
}

const Add = connect(mapStateToProps, mapDispatchToProps)(AddDepartment1)

function AddDepartment(props) {
  const navigate = useNavigate();
  return <Add {...props} navigate={navigate} />
}
export default AddDepartment;
