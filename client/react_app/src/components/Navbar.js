import { AppBar, Toolbar, Typography, Button, Box,  CssBaseline, createTheme, ThemeProvider } from "@mui/material";
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

/* import styled from "styled-components";
import SubheaderFrame from "./SubheaderFrame";

const LogoFrame = styled.div`
  position: absolute;
  top: 42px;
  left: 1266px;
  border-radius: var(--br-xs);
  background-color: var(--color-blueviolet);
  width: 113px;
  height: 65px;
`;
const LayoutFrame = styled.div`
  position: absolute;
  top: 0px;
  left: 0px;
  border-radius: var(--br-14xl);
  background: linear-gradient(101.82deg, #e5e9f5 0.92%, #e7daff);
  width: 100%;
  height: 100%;
`;
const CircleChild = styled.img`
  position: absolute;
  top: 37px;
  left: 88px;
  border-radius: var(--br-14xl);
  width: 1251px;
  height: 727px;
  z-index: 2;
`;
const CircleItem = styled.img`
  position: absolute;
  top: 120px;
  left: 743px;
  border-radius: 50%;
  width: 570px;
  height: 570px;
  object-fit: cover;
  z-index: 3;
`;
const CallToActionFrame = styled.div`
  position: absolute;
  top: 368px;
  left: 221px;
  border-radius: var(--br-xs);
  background-color: var(--color-blueviolet);
  width: 207px;
  height: 65px;
  z-index: 3;
`;
const Circle = styled.section`
  position: absolute;
  top: 153px;
  left: 39px;
  width: 1368px;
  height: 811px;
`;
const TrackAllYour = styled.p`
  margin: 0;
`;
const TrackAllYourContainer = styled.h3`
  margin: 0;
  height: 110px;
  position: relative;
  font-size: inherit;
  font-weight: 400;
  font-family: inherit;
  white-space: pre-wrap;
  display: inline-block;
  z-index: 1;
  @media screen and (max-width: 1025px) {
    font-size: var(--font-size-10xl);
  }
  @media screen and (max-width: 450px) {
    font-size: var(--font-size-3xl);
  }
`;
const GetStarted = styled.b`
  width: 154px;
  height: 29px;
  position: relative;
  font-size: var(--font-size-5xl);
  display: inline-block;
  font-family: var(--font-calibri);
  white-space: nowrap;
  padding-left: var(--padding-xl);
  padding-right: var(--padding-xl);
  z-index: 4;
  @media screen and (max-width: 450px) {
    font-size: var(--font-size-lgi);
  }
`;
const CentralFrame = styled.div`
  position: absolute;
  top: 347px;
  left: 163px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  gap: var(--gap-63xl);
`;
const HomePageRoot = styled.div`
  width: 1440px;
  height: 1024px;
  background-color: var(--color-whitesmoke-200);
  overflow: hidden;
  letter-spacing: normal;
  text-align: left;
  font-size: var(--font-size-17xl);
  color: var(--color-black);
  font-family: var(--font-carter-one);
`;

const HomePage = () => {
  return (
    <>
    <HomePageRoot>
      <LogoFrame />
      <SubheaderFrame />
      <Circle>
        <LayoutFrame />
        <CircleChild alt="" src="/rectangle-12.svg" />
        <CircleItem loading="eager" alt="" src="/ellipse-1@2x.png" />
        <CallToActionFrame />
      </Circle>
      <CentralFrame>
        <TrackAllYourContainer>
          <TrackAllYour>Track All Your Expenses</TrackAllYour>
          <TrackAllYour> In One Place</TrackAllYour>
        </TrackAllYourContainer>
        <GetStarted>Get Started</GetStarted>
      </CentralFrame>
    </HomePageRoot>
    </>
  );
};

export default HomePage;
 */