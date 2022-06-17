import { IconButton, Link } from "@mui/material";
import React from "react";
import MenuIcon from "@mui/icons-material/Menu";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";

const style = {
  link: {

  },
  iconButton: {
    // backgroundColor: "#bdbdbd",
  },
  menuIcon: {
    // backgroundColor: "white",
  },
};

export default function Dropdown() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <IconButton sx={style.iconButton}>
      <MenuIcon
        sx={style.menuIcon}
        id="basic-button"
        aria-controls="basic-menu"
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
      />
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
      >
        <Link href="/" underline="none">
          <MenuItem onClick={handleClose}>خانه</MenuItem>
        </Link>

        <Link href="#/kant" underline="none">
          <MenuItem onClick={handleClose}>کانت</MenuItem>
        </Link>
        <Link href="#/nietzsche" underline="none">
          <MenuItem onClick={handleClose}>نیچه</MenuItem>
        </Link>
        <Link href="#/heidegger" underline="none">
          <MenuItem onClick={handleClose}>هایدگر</MenuItem>
        </Link>
        <Link href="#/notes" underline="none">
          <MenuItem onClick={handleClose} sx={style.link}>
            گزینه‌گویه‌ها
          </MenuItem>
        </Link>
        <Link href="#/poems" underline="none">
          <MenuItem onClick={handleClose} sx={style.link}>
            شعرها
          </MenuItem>
        </Link>
        {/* <Link href="#" underline="none">
          <MenuItem onClick={handleClose}>تماس</MenuItem>
        </Link> */}
      </Menu>
    </IconButton>
  );
}
