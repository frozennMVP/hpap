import React, { useContext, useState, useEffect } from "react";
import CallIcon from "@mui/icons-material/Call";
import "./Header.css";
import { Link, useParams } from "react-router-dom";
import {
  AUTH_ROUTE,
  LOGIN_ROUTE,
  BASKET_PAGE,
  ADMIN_ROUTE,
  FEED_ROUTE,
} from "../../utils/Consts";
import { Context } from "../../context/Context";
import AccountMenu from "../../components/menu/Menu";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import Badge from "@mui/material/Badge";
import MenuItem from "@mui/material/MenuItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import axios from "axios";
import Basket from "../../pages/basket/Basket";
import PropTypes from "prop-types";
import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import HighlightOffIcon from "@mui/icons-material/HighlightOff";


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

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  "& .MuiDialogContent-root": {
    padding: theme.spacing(2),
  },
  "& .MuiDialogActions-root": {
    padding: theme.spacing(1),
  },
}));

const BootstrapDialogTitle = (props) => {
  const { children, onClose, ...other } = props;

  return (
    <DialogTitle sx={{ m: 0, p: 2 }} {...other}>
      {children}
      {onClose ? (
        <IconButton
          aria-label="close"
          onClick={onClose}
          sx={{
            position: "absolute",
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <CloseIcon />
        </IconButton>
      ) : null}
    </DialogTitle>
  );
};

BootstrapDialogTitle.propTypes = {
  children: PropTypes.node,
  onClose: PropTypes.func.isRequired,
};

const Header = (props) => {
  const { dispatch, user } = useContext(Context)
  const [firebaseUsers, setFirebaseUsers] = useState({})

  // const data = doc(db, "users", user.uid);
  // getDoc(data).then((doc) => {
  // console.log(doc.data())
  // })


  const { id } = useParams;
  const { cartItems, removeFromBasket } = props;
  const totalPrice = cartItems.reduce((acc, item) => acc + item.price, 0);

  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  useEffect(() => {}, []);

  return (
    <div className="Header">
      <div className="underHeader">
        <div className="onePart">
          <div>
            <CallIcon
              style={{
                color: "white",
              }}
            />
          </div>
          <h5
            style={{
              color: "#777777",
              fontSize: "15px",
            }}
          >
            Звоните нам:{" "}
            <a
              style={{
                color: "white",
                textDecoration: "none",
              }}
              href="tel:+996500010003"
            >
              {" "}
              +996500010003{" "}
            </a>
          </h5>
        </div>
        <div
          style={{
            display: "flex",
            alignItems: "center",
          }}
        >
          <Link className="contactFeedback" to={FEED_ROUTE}>
            Свяжитесь с нами
          </Link>
          {user ? (
            <div className="link">
              {firebaseUsers.status === true ? (
                <p className="link">Админ</p>
              ) : (
                
                <MenuItem>
                  <ListItemIcon>
                    <StyledBadge
                      color="secondary"
                      badgeContent={cartItems.length} 
                    >
                      <ShoppingCartIcon
                      onClick={handleClickOpen}
                        style={{
                          color: "white",
                        }}
                        fontSize="small"
                      />
                      <BootstrapDialog
                        onClose={handleClose}
                        aria-labelledby="customized-dialog-title"
                        open={open}
                        style={{
                          width: "100%",
                        }}
                      >
                        <BootstrapDialogTitle
                          id="customized-dialog-title"
                          onClose={handleClose}
                          style={{ width: "100%" }}
                        >
                          КОРЗИНА
                        </BootstrapDialogTitle>
                        <DialogContent dividers>
                          {cartItems.length === 0 && <div>Корзина пуста.</div>}
                          {cartItems.map((item) => (
                            <div key={item.id} className="cartItemsMap">
                              <div className="oneContentOfItems">
                                <div className="basketImgHeader">
                                  <h5 className="basketName">Фото</h5>
                                  <img
                                    src={item.url}
                                    className="basketImgUrl"
                                    alt=""
                                  />
                                </div>
                                <hr />
                                <div className="basketImgHeader">
                                  <h5 className="basketName">Название</h5>
                                  <h5>{item.name}</h5>
                                </div>
                                <hr />
                                <div className="basketImgHeader">
                                  <h5 className="basketName">Цена</h5>
                                  <h5>{item.price}$</h5>
                                </div>
                                <hr />

                                <div className="basketImgHeader">
                                  <HighlightOffIcon
                                    style={{
                                      color: "black",
                                    }}
                                  />
                                  <IconButton aria-label="cart">
                                    <HighlightOffIcon
                                      style={{
                                        color: "black",
                                      }}
                                      onClick={() => removeFromBasket(item)}
                                    />
                                  </IconButton>
                                </div>
                              </div>
                            </div>
                          ))}
                          {cartItems.length === 0 ? (
                            ""
                          ) : (
                            <div
                              style={{
                                display: "flex",
                                justifyContent: "space-between",
                              }}
                            >
                              <h3>На сумму:</h3>

                              <div>
                                <h5>{totalPrice}$</h5>
                              </div>
                            </div>
                          )}
                        </DialogContent>
                        <DialogActions>
                          <Button autoFocus onClick={handleClose}>
                            Продолжить покупки
                          </Button>
                          <Button autoFocus onClick={handleClose}>
                            Оформить заказ
                          </Button>
                        </DialogActions>
                      </BootstrapDialog>
                    </StyledBadge>
                    <div
                      style={{
                        display: "none",
                      }}
                    >
                      <Basket cartItems={cartItems} />
                    </div>
                  </ListItemIcon>
                  <h5
                    style={{
                      margin: "10px",
                      color: "white",
                      opacity: "0.8",
                    }}
                  >
                    {totalPrice}$
                  </h5>
                </MenuItem>
              )}
            </div>
          ) : (
            <Link className="link" to={LOGIN_ROUTE}>
              Войти
            </Link>
          )}
          {user ? (
            <span>
              <AccountMenu />
            </span>
          ) : (
            ""
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;
