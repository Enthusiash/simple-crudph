import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import React from 'react'
import SideNav from '../SideNav'
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import CardContent from '@mui/material/CardContent'
import Card from '@mui/material/Card'


import '../Style/Dashboard.css'

const Dashboard = ({admin}) => {
  let navigate = useNavigate();

    useEffect(() => {
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
            5
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
            5
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
            5
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
            5
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
            5
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
            5
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
