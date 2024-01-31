import { AppBar, Toolbar, Typography, styled, Button, Box,  CssBaseline, createTheme, ThemeProvider } from "@mui/material";
import React from 'react';
import { Link } from 'react-router-dom';


const navItems = ['Personal Expense Management', 'Why Expense US', 'Features', 'Contact'];

// Create a theme with a background color
const theme = createTheme({
  palette: {
    background: {
      default: '#F1F3F6', // Set your desired background color
    },
  },
});

function Navbar() {
  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ display: 'flex' }}>
        <CssBaseline />
        <AppBar component="nav" sx={{ backgroundColor: '#F1F3F6' }}>
          <Toolbar sx={{ justifyContent: 'space-between' }}>
            <img src={"logo.png"} alt="ExpenseEase Logo" style={{ height: '40px', marginRight: '10px' }} />
            <Typography variant="h6" component="div" sx={{ flexGrow: 1, color: 'black'}}>
              ExpenseEase
            </Typography>
            <Box sx={{ display: 'flex',alignItems: 'center' }}>
              {navItems.map((item) => (
                <Button key={item} sx={{ color: 'black', marginLeft: 2 }}>
                  {item}
                </Button>
              ))}
             <Link to="/Login">
              <Button color="inherit" sx={{ marginLeft: 2,  backgroundColor: '#8743FF' }}>
                Login
             </Button>
            </Link>
            </Box>
          </Toolbar>
        </AppBar>
        {/* Rectangle below AppBar */}
        <Box 
          sx={{ 
            backgroundColor: '#E5E9F5', 
            height: '100%', width: '90%',
            margin: 'auto',
            marginTop: 10,
            border: '5px solid #E5E9F5', // Border color
            borderRadius: '30px', // Border radius for a bit of curve
          }}>
          {/* Content within the rectangle */}
          <Typography variant="h6" sx={{ textAlign: 'center', lineHeight: '630px' }}>
            Rectangle Content
          </Typography>
        </Box>
      </Box>
    </ThemeProvider>
  );
}
export default Navbar;