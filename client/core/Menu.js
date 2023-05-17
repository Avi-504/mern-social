import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import HomeIcon from "@material-ui/icons/Home";
import Button from "@material-ui/core/Button";
import auth from "./../auth/auth-helper";
import { Link, withRouter } from "react-router-dom";
import { Box } from "@material-ui/core";

const isActive = (history, path) => {
  if (history.location.pathname == path) return { color: "#ffa726" };
  else return { color: "#ffffff" };
};
const Menu = withRouter(({ history }) => (
  <AppBar position="static">
    <Toolbar>
      <Box
        display="flex"
        alignItem="centre"
        justifyContent="space-between"
        width="100%"
      >
        <Box display="flex" alignItems="centre">
          <Link to="/">
            <IconButton aria-label="Home" style={isActive(history, "/")}>
              <HomeIcon />
            </IconButton>
          </Link>
          <Typography variant="h6" color="inherit" style={{ margin: "auto" }}>
            MERN Social
          </Typography>
        </Box>
        <Box display="flex" alignItem="centre" justifyContent="space-between">
          {!auth.isAuthenticated() && (
            <Box display="flex" alignItems="centre">
              <Link to="/signup" style={{ margin: "auto" }}>
                <Button style={isActive(history, "/signup")}>Sign up</Button>
              </Link>
              <Link to="/signin" style={{ margin: "auto" }}>
                <Button style={isActive(history, "/signin")}>Sign In</Button>
              </Link>
            </Box>
          )}
          {auth.isAuthenticated() && (
            <Box display="flex" alignItems="centre">
              <Link
                to={"/user/" + auth.isAuthenticated().user._id}
                style={{ margin: "auto" }}
              >
                <Button
                  style={isActive(
                    history,
                    "/user/" + auth.isAuthenticated().user._id
                  )}
                >
                  My Profile
                </Button>
              </Link>
              <Button
                color="inherit"
                onClick={() => {
                  auth.clearJWT(() => history.push("/"));
                }}
                style={{ margin: "auto" }}
              >
                Sign out
              </Button>
            </Box>
          )}
        </Box>
      </Box>
    </Toolbar>
  </AppBar>
));

export default Menu;
