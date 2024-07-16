import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
//import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import AdbIcon from "@mui/icons-material/Adb";
import { Link as RouterLink } from "react-router-dom";

import { getDatabase, ref, set, push } from "firebase/database";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { signOut } from "firebase/auth";


import Link from "@mui/material/Link";


import "./NavBar.css";
import { unsubscribe } from "diagnostics_channel";

const pages = [
  ["Calendar", "/login"],
  ["FRQ", "/"],
  ["Home", "/"],
];
const settings = [
  ["Account", "/account"],
  ["Logout", "/"],
];

function NavBar() {
  const [loggedIn, setLoggedIn] = React.useState<Boolean>(false);
  const auth = getAuth();
  React.useEffect(() => {
    const checkLogIn = onAuthStateChanged(auth, (user) => {
      if (user) {
        setLoggedIn(true);
        // alert("userID : " + user.uid);
        // ...
      } else {
        setLoggedIn(false);
        // ...
      }
    });
    return () => checkLogIn();
  }, [auth]);
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(
    null
  );
  const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(
    null
  );

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const closeMenu = (setting: string) => {
    if (setting == "Logout") {
      const auth = getAuth();
      signOut(auth).then(() => {
        setLoggedIn(false);
      }).catch((error) => {
        alert(error);
      });
    }
    handleCloseUserMenu();
  }

  return (
    <>
      <style>
        @import
        url('https://fonts.googleapis.com/css2?family=Gaegu&display=swap');
      </style>
      <AppBar
        position="fixed"
        sx={{
          width: "100%",
          background: "transparent",
          border: "none",
          boxShadow: "none",
          margin: 0,
        }}
        className="navBar"
      >
        <Box sx={{ mr: "10px", ml: "10px" }}>
          <Toolbar disableGutters>
            <Box
              sx={{
                textAlign: "center",
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              {/* <Link href={"/home"} sx={{display:"flex"}}> */}

              <AdbIcon
                sx={{
                  display: {
                    xs: "none",
                    sm: "none",
                    md: "flex",
                    lg: "flex",
                    xl: "flex",
                  },
                  mr: 1,
                }}
              />

              <Typography
                variant="h4"
                noWrap
                className="navBar"
                component="a"
                // href="#app-bar-with-responsive-menu"
                sx={{
                  mr: 2,
                  display: {
                    xs: "none",
                    sm: "none",
                    md: "flex",
                    lg: "flex",
                    xl: "flex",
                  },
                  fontWeight: 700,
                  letterSpacing: ".3rem",
                  textDecoration: "none",
                  fontFamily: "Gaegu",
                  color: "#B2DBD7 !important",
                }}
              >
                Eventide
              </Typography>
              {/* </Link> */}
            </Box>

            <Box
              sx={{
                flexGrow: 1,
                display: {
                  xs: "flex",
                  sm: "flex",
                  md: "none",
                  lg: "none",
                  xl: "none",
                },
              }}
            >
              <IconButton
                size="medium"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleOpenNavMenu}
                color="inherit"
              >
                <MenuIcon />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorElNav}
                anchorOrigin={{
                  vertical: "bottom",
                  horizontal: "left",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "left",
                }}
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}
                sx={{
                  display: {
                    xs: "block",
                    sm: "block",
                    md: "none",
                    lg: "none",
                    xl: "none",
                  },
                  "& .MuiPaper-root": {
                    backgroundColor: "#457AA0",
                  },
                }}
              >
                {pages.map((page) => (
                  <MenuItem key={page[0]} onClick={handleCloseNavMenu}>
                    <Typography
                      variant="h6"
                      textAlign="center"
                      className="navBar"
                      sx={{
                        textDecoration: "none",
                        textTransform: "capitalize",
                        fontFamily: "Gaegu",
                      }}
                    >
                      {page[0]}
                    </Typography>
                  </MenuItem>
                ))}
              </Menu>
            </Box>
            <AdbIcon
              sx={{
                display: {
                  xs: "flex",
                  sm: "flex",
                  md: "none",
                  lg: "none",
                  xl: "none",
                },
                mr: 1,
              }}
            />
            <Typography
              variant="h5"
              className="navBar"
              noWrap
              component="a"
              // href="#app-bar-with-responsive-menu"
              sx={{
                mr: 2,
                display: {
                  xs: "flex",
                  sm: "flex",
                  md: "none",
                  lg: "none",
                  xl: "none",
                },
                flexGrow: 1,
                fontFamily: "Gaegu",
                fontWeight: 700,
                letterSpacing: ".3rem",
                color: "#B2DBD7 !important",
                textDecoration: "none",
              }}
            >
              Eventide
            </Typography>
            <Box
              sx={{
                flexGrow: 1,
                display: {
                  xs: "none",
                  sm: "none",
                  md: "flex",
                  lg: "flex",
                  xl: "flex",
                },
              }}
            >
              {pages.map((page) => (
                <Button
                  key={page[0]}
                  component={RouterLink}
                  to={page[1]}
                  className="nav-button navBar"
                  disableRipple
                  onClick={handleCloseNavMenu}
                  sx={{
                    mr: 5,
                    mx: 5,
                    color: "#B2DBD7 !important",
                    display: "block",
                    textDecoration: "none",
                    textTransform: "capitalize",
                    fontFamily: "Gaegu",
                    fontSize: "25px",
                  }}
                >
                  {page[0]}
                </Button>
              ))}
            </Box>

            {loggedIn ? (
              <Box sx={{ flexGrow: 0 }}>
                <Tooltip title="Open settings">
                  <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                    <Avatar
                      alt="Remy Sharp"
                      sx={{ width: "35px", height: "35px" }}
                      src="/static/images/avatar/2.jpg"
                    />
                  </IconButton>
                </Tooltip>
                <Menu
                  sx={{
                    mt: "45px",
                    "& .MuiPaper-root": {
                      backgroundColor: "#457AA0",
                    },
                  }}
                  id="menu-appbar"
                  anchorEl={anchorElUser}
                  anchorOrigin={{
                    vertical: "top",
                    horizontal: "right",
                  }}
                  keepMounted
                  transformOrigin={{
                    vertical: "top",
                    horizontal: "right",
                  }}
                  open={Boolean(anchorElUser)}
                  onClose={handleCloseUserMenu}
                >
                  {settings.map((setting) => (
                    <MenuItem
                      key={setting[0]}
                      component={RouterLink}
                      to={setting[1]}
                      onClick={function () { closeMenu(setting[0]) }}
                      sx={{ backgroundColor: "#457AA0" }}
                    >
                      <Typography
                        textAlign="center"
                        className="navBar"
                        variant="h6"
                        sx={{ fontFamily: "Gaegu" }}
                      >
                        {setting[0]}
                      </Typography>
                    </MenuItem>
                  ))}
                </Menu>
              </Box>
            ) : (
              <Box sx={{ flexGrow: 0, height:"80%", textAlign:"center",justifyContent:"center",alignItems:"center" }}>
<Button
                  component={RouterLink}
                  to={"/login"}
                  className="nav-button navBar"
                  disableRipple
                  sx={{
                    color: "#B2DBD7 !important",
                    display: "block",
                    textDecoration: "none",
                    textTransform: "capitalize",
                    fontFamily: "Gaegu",
                    fontSize: "25px",
                  }}
                >
                  Login
                </Button>
                  </Box>
            )}
          </Toolbar>
        </Box>
      </AppBar>
    </>
  );
}
export default NavBar;
