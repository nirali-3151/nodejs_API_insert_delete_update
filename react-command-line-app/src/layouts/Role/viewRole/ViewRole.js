import React, { Component } from 'react'
import UserService from 'services/userService';

import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";

import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";

import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";

import { getRoleList } from "reduxStore/Actions/RoleAction"

import { connect } from "react-redux"

import { blueColour } from "constants/constants"

import { useNavigate } from 'react-router-dom';

import "../../../Design/TableDesign.css"

class ViewRole1 extends Component {
  constructor(props) {
    super(props)
  }

  //list Role Data
  getViewRoleData = async () => {
    const initialData = await UserService.viewRoleList();
    this.props.getRoleList1({ role_list: initialData })
  }

  componentDidMount() {
    this.getViewRoleData()
  }

  //Navigate when new Role Add
  onClickAddRole = async () => {
    this.props.navigate("/view-role/add-role")
  }

  render() {
    const { role_list } = this.props.role
    return (
      <DashboardLayout>
        <DashboardNavbar />

        <MDBox pt={3} pb={1}>
          <MDBox
            mx={2}
            mt={1}
            py={0.75}
            px={1}
            variant=""
            bgColor={blueColour}
            borderRadius="lg"
            coloredShadow="info"
            onClick={(e) => this.onClickAddRole(e)}
          >
            <MDTypography variant="h6" color="white" align="center">
              Add Role
            </MDTypography>
          </MDBox>
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
                  coloredShadow="info"
                >
                  <MDTypography variant="h6" color="white">
                    View Role List
                  </MDTypography>
                </MDBox>
                <div>
                  <div className='root1'>
                    <div style={{ overflowX: "auto" }}>
                      <table className='table1'>
                        <thead>
                          <tr>
                            <th style={{ paddingLeft: "40px" }}>Id</th>
                            <th >Role Name</th>
                            <th>Salary</th>
                            <th>Department Name</th> 
                          </tr>
                        </thead>

                        <tbody className='tbody1'>
                          {
                            role_list.map((user) => (
                              <tr key={user.id}>
                                <td style={{ paddingLeft: "40px" }}>{user.role_id}</td>
                                <td>{user.role_name} </td>
                                <td>{user.salary}</td>
                                <td  >{user.department_name}</td>
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
    getRoleList1: (payload) => dispatch(getRoleList(payload)),
  }
}

const Add = connect(mapStateToProps, mapDispatchToProps)(ViewRole1);

function ViewRole(props) {
  const navigate = useNavigate();
  return <Add {...props} navigate={navigate} />
}
export default ViewRole;