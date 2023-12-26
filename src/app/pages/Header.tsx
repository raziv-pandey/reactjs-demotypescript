import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import MenuItem from "@mui/material/MenuItem";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";
export const Header = () => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  // const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
  //   setAuth(event.target.checked);
  // };

  const handleMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <AppBar position="static">
      <Toolbar>
        <IconButton
          size="large"
          edge="start"
          color="inherit"
          aria-label="menu"
          sx={{ mr: 2 }}
          onClick={handleMenu}
        >
          <MenuIcon />
        </IconButton>
        <MenuItem onClick={handleClose}>
          <Typography display="block">
            <NavLink className="linkStyle" to="/home">
              VM Details
            </NavLink>
          </Typography>
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <Typography display="block">
            <NavLink className="linkStyle" to="/products">
              Products
            </NavLink>
          </Typography>
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <Typography display="block">
            <NavLink className="linkStyle" to="/">
              Logout
            </NavLink>
          </Typography>
        </MenuItem>
      </Toolbar>
    </AppBar>
  );
};
