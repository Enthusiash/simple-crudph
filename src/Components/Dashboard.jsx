import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import React from 'react'
import SideNav from '../SideNav'
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import CardContent from '@mui/material/CardContent'
import Card from '@mui/material/Card'

import '../Style/Dashboard.css'
import http from '../Utils/http'

const Dashboard = ({admin}) => {
  let navigate = useNavigate();

  const [dashboardData, setDashboardData] = useState({
    totalEmployees: 0,
    males: 0,
    females: 0,
    webDevelopers: 0,
    uiUxDesigners: 0,
    qaTesters: 0,
  });

  const getData = () => {
    http.get('/users/dashboard')
    .then(res => {
      setDashboardData(res.data);
      console.log(res.data);
    })
  }

    useEffect(() => {
      getData();
        if (admin) {
            navigate(-1);
        }
    }, [admin])
  return (
    <>
    <div>
     <Box sx={{ display: 'flex', }}>
    <SideNav />
      <Box id='dashboard-contents' component="main" sx={{ flexGrow: 1, p: 3, display: "flex", flexDirection: "column", justifyContent: "center" }}>
      <Box sx={{ flexGrow: 1, p: 3, display: "flex", columnGap: "70px", alignItems: "center", justifyContent: "center" }}>
      <Card sx={{ width: 150, minHeight: 150, background: "none", color: "#FFAC30" }}>
        <CardContent sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
          <div className="num-emp">
          <Typography variant="h2" component="div">
          {dashboardData.totalEmployees}
          </Typography>
          </div>
          <Typography sx={{ color: "#FFAC30", mt: "10px" }} color="text.secondary">
            Employees
          </Typography>
        </CardContent>  
      </Card>

      <Card sx={{ width: 150, minHeight: 150, background: "none", color: "#FFAC30" }}>
        <CardContent sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
          <div className="num-emp">
          <Typography variant="h2" component="div">
          {dashboardData.males}
          </Typography>
          </div>
          <Typography sx={{ color: "#FFAC30", mt: "10px" }} color="text.secondary">
            No. of Males
          </Typography>
        </CardContent>  
      </Card>
      
      <Card sx={{ width: 150, minHeight: 150, background: "none", color: "#FFAC30" }}>
        <CardContent sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
          <div className="num-emp">
          <Typography variant="h2" component="div">
          {dashboardData.females}
          </Typography>
          </div>
          <Typography sx={{ color: "#FFAC30", mt: "10px" }} color="text.secondary">
            No. of Females
          </Typography>
        </CardContent>  
      </Card>

      </Box>
      <Box sx={{ flexGrow: 1, p: 3, display: "flex", columnGap: "70px", alignItems: "center", justifyContent: "center" }}>
      <Card sx={{ width: 150, minHeight: 150, background: "none", color: "#FFAC30" }}>
        <CardContent sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
          <div className="num-emp">
          <Typography variant="h2" component="div">
          {dashboardData.webDevelopers}
          </Typography>
          </div>
          <Typography sx={{ color: "#FFAC30", mt: "10px" }} color="text.secondary">
            No. of Web Developers
          </Typography>
        </CardContent>  
      </Card>

      <Card sx={{ width: 150, minHeight: 150, background: "none", color: "#FFAC30" }}>
        <CardContent sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
          <div className="num-emp">
          <Typography variant="h2" component="div">
          {dashboardData.uiUxDesigners}
          </Typography>
          </div>
          <Typography sx={{ color: "#FFAC30", mt: "10px" }} color="text.secondary">
            No. of UI/UX Designers
          </Typography>
        </CardContent>  
      </Card>
      
      <Card sx={{ width: 150, minHeight: 150, background: "none", color: "#FFAC30" }}>
        <CardContent sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
          <div className="num-emp">
          <Typography variant="h2" component="div">
          {dashboardData.qaTesters}
          </Typography>
          </div>
          <Typography sx={{ color: "#FFAC30", mt: "10px" }} color="text.secondary">
            No. of QA Testers
          </Typography>
        </CardContent>  
      </Card>
      </Box>
      </Box>
      </Box>
      </div>
    </>
  )
}

export default Dashboard
