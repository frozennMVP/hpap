import React, { useContext, useState } from "react";
import Box from "@mui/material/Box";
import Avatar from "@mui/material/Avatar";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import Divider from "@mui/material/Divider";
import Alert from "@mui/material/Alert";
import Tooltip from "@mui/material/Tooltip";
import PersonAdd from "@mui/icons-material/PersonAdd";
import Settings from "@mui/icons-material/Settings";
import Logout from "@mui/icons-material/Logout";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import { Context } from "../../context/Context";
import {
  ADD_ROUTE,
  ADMIN_ROUTE,
  BASKET_PAGE,
  LOGIN_ROUTE,
  MESSAGE_ROUTE,
  PROFILE_ROUTE,
} from "../../utils/Consts";
import { Link } from "react-router-dom";
import AddCircleOutlinedIcon from "@mui/icons-material/AddCircleOutlined";
import Badge from "@mui/material/Badge";
import ButtonGroup from "@mui/material/ButtonGroup";
import Button from "@mui/material/Button";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import MailIcon from "@mui/icons-material/Mail";
import Switch from "@mui/material/Switch";
import FormControlLabel from "@mui/material/FormControlLabel";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { styled } from "@mui/material/styles";
import { useSelector } from "react-redux";




import { db } from "../../firebase/firebase-config";

import { setDoc, doc } from "firebase/firestore";

import { getDoc } from "firebase/firestore";



const StyledBadge = styled(Badge)(({ theme }) => ({
  "& .MuiBadge-badge": {
    right: -3,
    top: 13,
    border: `2px solid ${theme.palette.background.paper}`,
    padding: "0 4px",
  },
}));

const AccountMenu = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const { user, dispatch } = useContext(Context);
  // const items = useSelector(state => state.cart.itemsInCart)
  const [invisible, setInvisible] = useState(false);

  const [firebaseUsers, setFirebaseUsers] = useState({})

  const users = doc(db, "users", user.uid);
  getDoc(users).then((doc) => {
    setFirebaseUsers(doc.data())
  })


  const handleBadgeVisibility = () => {
    setInvisible(!invisible);
  };

  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleLogOut = () => {
    dispatch({ type: "LOGOUT" });
    window.location.assign(LOGIN_ROUTE);
  };

  return (
    <React.Fragment>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          textAlign: "center",
          color: "white",
        }}
      >
        <Tooltip title={user.login}>
          <AccountBoxIcon
            onClick={handleClick}
            size="small"
            sx={{ ml: 2 }}
            aria-controls={open ? "account-menu" : undefined}
            aria-haspopup="true"
            aria-expanded={open ? "true" : undefined}
          ></AccountBoxIcon>
        </Tooltip>
      </Box>
      <Menu
        anchorEl={anchorEl}
        id="account-menu"
        open={open}
        onClose={handleClose}
        onClick={handleClose}
        PaperProps={{
          elevation: 0,
          sx: {
            overflow: "visible",
            filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
            mt: 1.5,
            "& .MuiAvatar-root": {
              width: 32,
              height: 32,
              ml: -0.5,
              mr: 1,
            },
            "&:before": {
              content: '""',
              display: "block",
              position: "absolute",
              top: 0,
              right: 14,
              width: 10,
              height: 10,
              bgcolor: "background.paper",
              transform: "translateY(-50%) rotate(45deg)",
              zIndex: 0,
            },
          },
        }}
        transformOrigin={{ horizontal: "right", vertical: "top" }}
        anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
      >
          {firebaseUsers.status === true ? (""):(<Link
          style={{
            textDecoration: "none",
            color: "black",
          }}
          to={PROFILE_ROUTE}
        >
          <MenuItem>
            <Avatar /> Profile
          </MenuItem>
        </Link>)}
        


        <Divider />
        {firebaseUsers.status === true ? (
          <Link
            style={{
              textDecoration: "none",
              color: "black",
            }}
            to={ADD_ROUTE}
          >
            <MenuItem>
              <ListItemIcon>
                <AddCircleOutlinedIcon fontSize="small" />
              </ListItemIcon>
              Добавить товар
            </MenuItem>
          </Link>
        ) : (
          ""
        )}

        {firebaseUsers.status === true ? (
          <Link
            style={{
              textDecoration: "none",
              color: "black",
            }}
            to={MESSAGE_ROUTE}
          >
            <MenuItem>
              <ListItemIcon>
                <Badge color="secondary" variant="dot" invisible={invisible}>
                  <MailIcon fontSize="small" />
                </Badge>
              </ListItemIcon>
              Сообщения
            </MenuItem>
          </Link>
        ) : (
          ""
        )}

        <MenuItem onClick={handleLogOut}>
          <ListItemIcon>
            <Logout fontSize="small" />
          </ListItemIcon>
          Выйти
        </MenuItem>
      </Menu>
    </React.Fragment>
  );
};

export default AccountMenu;
