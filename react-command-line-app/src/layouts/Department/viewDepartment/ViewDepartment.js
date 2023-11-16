import React, { Component } from 'react'
import UserService from 'services/userService';

import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";

import { useNavigate } from 'react-router-dom';

import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";

import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";

import { connect } from "react-redux"
import { getDepartmentList } from "reduxStore/Actions/DepartmentAction"

import { blueColour ,table_shadow_color} from "constants/constants"

class ViewDepartment1 extends Component {
  constructor(props) {
    super(props)
  }


  //get department Data in array
  getViewDepartmentData = async () => {
    const initialData = await UserService.viewDepartmentList();
    this.props.getDepartmentList1({ depat_List: initialData })
  }

  //navigation for add New Department on click of Add New Department
  onClickAddDepartment = async () => {
    this.props.navigate("/view-department/add-Depatment")
  }

  componentDidMount() {
    this.getViewDepartmentData()
  }

  render() {
    const { depat_List } = this.props.department
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
            coloredShadow={table_shadow_color}
            onClick={(e) => this.onClickAddDepartment(e)}
          >
            <MDTypography variant="h6" color="white" align="center">
              Add Department
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
                  coloredShadow={table_shadow_color}
                >
                  <MDTypography variant="h6" color="white">
                    View Department List
                  </MDTypography>
                </MDBox>
                <div>
                  <div className='root1'>
                    <table className='table1'>
                      <thead>
                        <tr>
                          <th style={{paddingLeft :"40px"}}>Id</th>
                          <th>Department Name</th>
                        </tr>
                      </thead>

                      <tbody className='tbody1'>
                        {
                          depat_List.map((user) => (
                            <tr key={user.id}>
                              <td  style={{paddingLeft :"40px"}}>{user.department_id}</td>
                              <td>{user.department_name} </td>
                            </tr>
                          ))
                        }
                      </tbody>
                      <div>
                      </div>
                    </table>
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
    department: state.DepartmentReducer,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getDepartmentList1: (payload) => dispatch(getDepartmentList(payload)),
  }
}

const Add =  connect(mapStateToProps, mapDispatchToProps)(ViewDepartment1);

function ViewDepartment(props) {
	const navigate = useNavigate();
	return <Add {...props} navigate={navigate} />
}
export default ViewDepartment;
