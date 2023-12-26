import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import MenuItem from "@mui/material/MenuItem";
import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import PublicIcon from "@mui/icons-material/Public";
import { IUser} from '../../auth/model/user.model';
import { Divider } from "@mui/material";
export const TCOHeader = () => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [user, setUser]=useState<string[] | null>(null);

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
    <>
    <AppBar position="sticky" className="tcoHeader">
      <Toolbar>
        {/* <IconButton
          size="large"
          edge="start"
          color="inherit"
          aria-label="menu"
          sx={{ mr: 2 }}
          onClick={handleMenu}
        > */}
          <PublicIcon />
          <span className="customMarginHeader">United States</span>
        {/* </IconButton> */}
        <MenuItem onClick={handleClose}>
          <Typography display="block">
            <NavLink className="linkStyle" to="#">
              Partner Central
            </NavLink>
          </Typography>
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <Typography display="block">
            <NavLink className="linkStyle" to="#">
              Training
            </NavLink>
          </Typography>
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <Typography display="block">
            <NavLink className="linkStyle" to="#">
              Community
            </NavLink>
          </Typography>
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <Typography display="block">
            <NavLink className="linkStyle" to="#">
              Share
            </NavLink>
          </Typography>
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <input type="text" placeholder="Search" />
        </MenuItem>
      </Toolbar>
    </AppBar>
    <Divider />
    <AppBar position="sticky" className="tcoHeader">
      <Toolbar>
        {/* <IconButton
          size="large"
          edge="start"
          color="inherit"
          aria-label="menu"
          sx={{ mr: 2 }}
          onClick={handleMenu}
        > */}
          <PublicIcon />
          <h2 className="customMarginHeader">Product Logo</h2>
        {/* </IconButton> */}
        <MenuItem onClick={handleClose}>
          <Typography display="block">
            <NavLink className="linkStyle" to="#">
              Products
            </NavLink>
          </Typography>
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <Typography display="block">
            <NavLink className="linkStyle" to="#">
              CLoud Services
            </NavLink>
          </Typography>
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <Typography display="block">
            <NavLink className="linkStyle" to="#">
              Support
            </NavLink>
          </Typography>
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <Typography display="block">
            <NavLink className="linkStyle" to="#">
              Downloads
            </NavLink>
          </Typography>
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <Typography display="block">
            <NavLink className="linkStyle" to="#">
              Consulting
            </NavLink>
          </Typography>
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <Typography display="block">
            <NavLink className="linkStyle" to="#">
              Partners
            </NavLink>
          </Typography>
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <Typography display="block">
            <NavLink className="linkStyle" to="#">
              Company
            </NavLink>
          </Typography>
        </MenuItem>
      
      </Toolbar>
    </AppBar>
    </>
  );
};
