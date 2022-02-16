import { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import { Link } from "react-router-dom";
import MenuItem from "@mui/material/MenuItem";
import { ListItem } from "@mui/material";
import { useEffect } from "react";
import { useHistory } from "react-router-dom";

import Aos from "aos";

const Nav = (props) => {
  const [anchorElNav, setAnchorElNav] = useState(null);
  const [anchorElUser, setAnchorElUser] = useState(null);
  const history = useHistory();

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  useEffect(() => {
    Aos.init({
      duration: 3000,
      offset: 500,
    });
  }, []);

    const logOut = async () => {
    localStorage.removeItem("token", props.user);
    window.localStorage.clear();
    props.setUser(null);
    history.push('/')
  };

  return (
    <AppBar
    id='appBar'
      position="absolute"
      style={{ background: "transparent", boxShadow: "none" }}
    >
      <Container maxWidth="xl">
        <Toolbar disableGutters>
        <Typography
            id="logo-text"
            variant="h6"
            noWrap
            component="div"
            sx={{ mr: 2, display: { xs: "none", md: "flex" } }}
          >
            Peeved
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
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
                display: { xs: "block", md: "none" },
              }}
            >
              <MenuItem
                style={{ display: "flex" }}
                onClick={handleCloseNavMenu}
              >
                <Typography textAlign="center">
                <Button href="/" color="inherit">
                  <ListItem>Home</ListItem>
                </Button>
                </Typography>
              </MenuItem>
              <MenuItem
                style={{ display: "flex" }}
                onClick={handleCloseNavMenu}
              >
                <Typography textAlign="center">
                <Button href="/login" color="inherit">
                  <ListItem>Login</ListItem>
                </Button>
                </Typography>
              </MenuItem>
              <MenuItem
                style={{ display: "flex" }}
                onClick={handleCloseNavMenu}
              >
                <Typography textAlign="center">
                <Button href="/register" color="secondary">
                  <ListItem>Register</ListItem>
                </Button>
                </Typography>
              </MenuItem>
            </Menu>
          </Box>
          
          <Typography
                id="logo-text"
                variant="h6"
                noWrap
                component="div"
                sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}
              >
                Peeved
              </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            <Button
            href='/'
              style={{ color: "white" }}
              onClick={handleCloseNavMenu}
              sx={{ my: 2, color: "white", display: "block" }}
            >
              home
            </Button>
            <Button
              style={{ color: "white" }}
              onClick={handleCloseNavMenu}
              sx={{ my: 2, color: "white", display: "block" }}
              href='/login'
            >
              Login
            </Button>
            <Button
              style={{color:"#f50057", fontSize:"16px", marginLeft:"50px"}}
              onClick={handleCloseNavMenu}
              sx={{ my: 2, display: "block" }}
              href='/register'
            >
              Register
            </Button>
          </Box>
          {props.user ? (
            <>
              <Box sx={{ flexGrow: 0 }}>
                <Tooltip title="Open settings">
                  <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                    <Avatar
                      alt="U"
                      src="/static/images/avatar/2.jpg"
                    />
                  </IconButton>
                </Tooltip>
                
                <Menu
                  sx={{ mt: "45px" }}
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
                  <MenuItem onClick={handleCloseNavMenu}>
                    <Typography textAlign="center">
                    <Button color="inherit" href='/new-post'>
                    Make A new Post
                    </Button>
                    </Typography>
                  </MenuItem>
                  <MenuItem onClick={handleCloseNavMenu}>
                    <Typography textAlign="center">
                    <Button color="inherit" href='/user-profile'>
                    My posts
                    </Button>
                    </Typography>
                  </MenuItem>
                  <MenuItem onClick={handleCloseNavMenu}>
                    <Typography textAlign="center">

                    <Button color="inherit" onClick={logOut}>
                    LogOut
                    </Button>

                    </Typography>
                  </MenuItem>
                  
                </Menu>
              </Box>
            </>
          ) : (
            <></>
          )}
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default Nav;