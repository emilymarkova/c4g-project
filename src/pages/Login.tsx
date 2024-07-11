import logo from "./logo.svg";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import "./SignUp.css";
import NavBar from "../Components/NavBar";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import { Link as RouterLink } from "react-router-dom";

export default function Login() {
  return (
    <Box
      className="login-page"
      sx={{
        height: "100%",
        width: "100%",
        display:"flex",
        textAlign: "center",
        alignItems:"center",
        justifyContent: "center",
        backgroundSize: "cover",
        backgroundPosition: "center",
        flexDirection:"column"
      }}
    >
      <NavBar />
      <Box
        sx={{
          textAlign: "center",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent:"center",
          height: "100%",
          width: "100%",
          flex:1
        }}
      >
        <Box
          sx={{
            backgroundColor: "#013752",
            maxWidth: "100%",
            width: "550px",
            maxHeight: "100%",
            height: "auto",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            borderRadius: "15px",
            textAlign: "center",
            padding: "20px",
          }}
        >
          <Box
            sx={{
              backgroundColor: "#20A4A4",
              height: "80%",
              width: "80%",
              margin: "10px",
              padding: "10px",
              display: "flex",
              justifyContent: "center",
              borderRadius: "15px",
              alignItems: "center",
              textAlign: "center",
            }}
          >
            <Box
              sx={{
                alignItems: "center",
                textAlign: "center",
                width: "100%",
                flexDirection: "column",
                padding:"20px"
              }}
            >
              <TextField
                id="standard-basic"
                fullWidth
                label="Username"
                variant="standard"
                sx={{
                  marginBottom: "10px",
                  display: "block",
                  "& .MuiInputBase-input": { width: "100%" },
                }}
              />
              <TextField
                fullWidth
                id="standard-password-input"
                label="Password"
                type="password"
                autoComplete="current-password"
                variant="standard"
                sx={{
                  marginBottom: "10px",
                  display: "block",
                  "& .MuiInputBase-input": { width: "100%" },
                }}
              />

              <Button
                variant="contained"
                size="medium"
                component={RouterLink}
                to="/home"
                sx={{
                  borderRadius: "25px",
                  backgroundColor: "#013752",
                  textTransform: "none",
                  margin: "10px",
                }}
              >
                Login
              </Button>
              <Button
                key="SignUp"
                component={RouterLink}
                to="/"
                className="nav-button navBar"
                disableRipple
                sx={{
                  mr: 5,
                  mx: 5,
                  display: "block",
                  fontFamily: "Arial",
                  textDecoration: "none",
                  textTransform: "capitalize",
                }}
              >
                Or Sign Up
              </Button>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
