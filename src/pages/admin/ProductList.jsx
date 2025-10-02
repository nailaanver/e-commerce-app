import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import SearchIcon from "@mui/icons-material/Search";

import debounce from 'lodash/debounce';

// dialog
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import { data } from 'react-router-dom';



const rows = [
  {
    name: 'Alexander Sofa',
    category: 'Accessories',
    actual_price: 80.00,
    selling_price: 8.00,
  },
  {
    name: 'Chair pillow',
    category: 'Pharma product',
    actual_price: 60.00,
    selling_price: 32.09,
  },
  {
    name: 'Curaskin Lipgel',
    category: 'Skin product',
    actual_price: 70.00,
    selling_price:43.00,
  },
  {
    name:'Leather chair', 
    category: 'Accessories',
    actual_price: 67.00,
    selling_price: 12.00
  },
  {
    name: 'Balloon Sofa',
    category: 'Skin product',
    actual_price: 90.00,
    selling_price: 9.00
  },

];

export default function ProductList() {
  const [open, setOpen] = React.useState(false);
  const [searchQuery, setSearchQuery] = React.useState('')
  const [data, setData] = React.useState(rows)

  const handleSearch =  debounce((val) => {
    setSearchQuery (val)
    if (val) {
      const filteredList = rows.filter(item => item.name.toLowerCase().includes(val.toLowerCase()))
      setData(filteredList)
    }else {
      setData(rows)
    }
  },500)

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const formJson = Object.fromEntries(formData.entries());
    const email = formJson.email;
    console.log(email);
    handleClose();
  };


  return (
    <TableContainer component={Paper} sx={{ mt: 5 }}>
      <Box sx={{ display: "flex", justifyContent: "space-between" }}>
        <Box
          display="flex"
          justifyContent="space-between"
          alignItems="center"
          mb={2}
          component="form"
          sx={{ '& > :not(style)': { m: 1, width: '25ch' } }}
          onChange={(e)=> handleSearch(e.target.value)}
          noValidate
          autoComplete="off"
        >
          <TextField id="outlined-basic" variant="outlined" placeholder="search here" />
        </Box>

        

        <React.Fragment>
          <Button variant="outlined" onClick={handleClickOpen} sx={{ width: 100, height: 50 ,color: "black", border:"black"}}>
            Add Product
          </Button>
          <Dialog open={open} onClose={handleClose}>
            <DialogTitle>Add New Product</DialogTitle>
            <DialogContent>
              <form onSubmit={handleSubmit} id="product-form">
                <TextField
                  autoFocus
                  required
                  margin="dense"
                  name="name"
                  label="Product Name"
                  type="text"
                  fullWidth
                  variant="standard"
                />
                <TextField
                  required
                  margin="dense"
                  name="category"
                  label="Category"
                  type="text"
                  fullWidth
                  variant="standard"
                />
                <TextField
                  required
                  margin="dense"
                  name="actual_price"
                  label="Actual Price"
                  type="number"
                  fullWidth
                  variant="standard"
                />
                <TextField
                  required
                  margin="dense"
                  name="selling_price"
                  label="Selling Price"
                  type="number"
                  fullWidth
                  variant="standard"
                />
              </form>
            </DialogContent>
            <DialogActions>
              <Button onClick={handleClose}>Cancel</Button>
              <Button type="submit" form="product-form">
                Add Product
              </Button>
            </DialogActions>
          </Dialog>
        </React.Fragment>
      </Box>


      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow >
            <TableCell sx= {{fontWeight:"600", fontSize:"180"}}>Product</TableCell>
            <TableCell sx= {{fontWeight:"600", fontSize:"180"}} align="right">Catogories</TableCell>
            <TableCell sx= {{fontWeight:"600",fontSize:"180"}} align="right">Actual Price&nbsp;($)</TableCell>
            <TableCell sx= {{fontWeight:"600" ,fontSize:"180"}} align="right">Selling Price&nbsp;($)</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((row) => (
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="right">{row.category}</TableCell>
              <TableCell align="right">{row.actual_price}</TableCell>
              <TableCell align="right">{row.selling_price}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

