import Button from '@mui/material/Button'
import Card from '@mui/material/Card'
import CardActions from '@mui/material/CardActions'
import CardContent from '@mui/material/CardContent'
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'
import React from 'react'
import Graph from './Graph';
import Chart from './Chart';

const AdminDashboard = () => {
  return (
    <Grid container spacing={8} marginLeft={4} marginTop={3}>
          <Grid item xs={12} md={4}>
            <Card sx={{ minHeight: 200, boxShadow: 3, minWidth: 300 }}>
              <CardContent>
                <Typography variant="h6" gutterBottom>Total Orders</Typography>
                <Typography variant="h4" color="primary">
                  1,245
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small">View Orders</Button>
              </CardActions>
            </Card>
          </Grid>
          <Grid item xs={12} md={4}>
            <Card sx={{ minHeight: 200, boxShadow: 3, minWidth: 300 }}>
              <CardContent>
                <Typography variant="h6" gutterBottom>Total Products</Typography>
                <Typography variant="h4" color="secondary">
                  356
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small">Manage Products</Button>
              </CardActions>
            </Card>
          </Grid>
          <Grid item xs={12} md={6}>
            <Card sx={{ minHeight: 200, boxShadow: 3, minWidth: 300 }}>
              <CardContent>
                <Typography variant="h6" gutterBottom>Customers</Typography>
                <Typography variant="h4" color="success.main">
                  890
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small">View Customers</Button>
              </CardActions>
            </Card>
          </Grid>
          <Graph />
          <Chart />
        </Grid>
  )
}

export default AdminDashboard