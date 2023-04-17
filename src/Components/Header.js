import React from 'react';
import {
    AppBar,
    Container,
    MenuItem,
    Select,
    Toolbar,
    Typography,
  } from "@material-ui/core";
  import {
    createTheme,
    makeStyles,
    ThemeProvider,
  } from "@material-ui/core/styles";
  import { Navigate,useNavigate } from "react-router-dom";
  import { CryptoState } from "../CryptoContext";
  import AuthModal from "./Authentication/authModal.js"
import UserSidebar from './UserSidebar';

  const useStyles = makeStyles((theme) => ({
    title: {
      flex: 1,
      color: "gold",
      fontFamily: "Montserrat",
      fontWeight: "bold",
      cursor: "pointer",
    },
  }));
  
  const darkTheme = createTheme({
    palette: {
      primary: {
        main: "#fff",
      },
      type: "dark",
    },
  });




function Header() {
    const classes = useStyles();
    const { currency, setCurrency, user } = CryptoState();
    console.log(currency); 
  
    const Navigate = useNavigate();
  
    return (
      <ThemeProvider theme={darkTheme}>
        <AppBar color="transparent" position="static">
          <Container>
            <Toolbar>
              <Typography
                onClick={() =>  Navigate("/")}
                variant="h6"
                className={classes.title}
              >
                BOOM BAAM
              </Typography>
              <Select
                variant="outlined"
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={currency}
                style={{ width: 85, height: 40 }}
                onChange={(e) => setCurrency(e.target.value)}
              >
                <MenuItem value={"USD"}>USD</MenuItem>
                <MenuItem value={"INR"}>INR</MenuItem>
              </Select>
  
              {user ? <UserSidebar/> : <AuthModal />}
               {/* { user ? <userSidebar />:<AuthModal/>} */}
            </Toolbar>
          </Container>
        </AppBar>
      </ThemeProvider>
    );
  }
  
  export default Header;

