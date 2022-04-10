import React, { useState, useContext, useReducer } from "react";
import "./Login.css";
import { Context } from "../../context/Context";
import { Link } from "react-router-dom";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Snackbar from "@mui/material/Snackbar";
import { ADMIN_ROUTE, HOME_ROUTE, REGISTRATION_ROUTE } from "../../utils/Consts";
import axios from "axios";
import Alert from '@mui/material/Alert';

import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';




const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { dispatch, user } = useContext(Context);
  const [welcome, setWelcome] = useState(false)
  const [error, setError] = useState(false)
  const [open, setOpen] = useState(false);


  const handleLogin = async (e) => {
    e.preventDefault();
    dispatch({ type: "LOGIN_START" });
    try {
        const res = await axios.post(`http://localhost:3004/login`, {
          email,
          password,
      });
    setOpen(true);
    setTimeout(setOpen, 4000)
    dispatch({ type: "LOGIN_SUCCESS", payload: res.data.user })
    setWelcome(true)
    setTimeout(setWelcome, 3000)
    setEmail("");
    setPassword("")
    window.location.assign(HOME_ROUTE);

    } catch (error) {
      console.log(error);
      dispatch({ type: "LOGIN_FAILURE" });
      setError(true)
    }
    setTimeout(setError, 5000);  
  };
  
  console.log(user);

  return (
    <div className="main-name">
      {welcome ? <Alert severity="success"><h3>Привет {user.login}  </h3></Alert> : ""}
      {error ? <Alert severity="warning"><h3>Email или пароль указан неверно</h3></Alert> : ""}
      <form
      className="form"
        onSubmit={handleLogin}
      >
        {welcome ? alert(`Добро пожаловать ${user.login}`): ""}
        <h3 className="logined-user">ЗАРЕГИСТРИРОВАННЫЙ ПОЛЬЗОВАТЕЛЬ</h3>
        <h5 className="profile-page">
          Введите адрес электронной почты и пароль для входа в раздел "Личный
          кабинет".
        </h5>
        <p className="required-input">* Обязательные поля</p>
        <div className="onlyInputs">
          <TextField
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            className="input-text"
            type="email"
            id="outlined-basic"
            label="email"
            variant="outlined"
            required
          />

          <TextField
            id="outlined-basic"
            className="input-text"
            label="Введите пароль"
            variant="outlined"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>

        
          <Button
            style={{
              fontSize: "15px",
              border: "1px solid",
              textDecoration: "none",
              padding: "5px 20px",
              backgroundColor: "black",
              color: "#fff",
              margin: "15px 10px",
            }}
            type="submit"
            variant="outlined"
            className="btnLogin"
          >
            Войти
          </Button>
          <Backdrop
        sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={open}
        
      >
        <CircularProgress color="inherit" />
      </Backdrop>
      </form>
      <hr
        style={{
          width: "80%",
          height: "2px",
          margin: "50px auto",
        }}
      />
      <div
      className="authNotloginSide"
      >
        <h3 className="logined-user">Новый пользователь</h3>
        <p className="profile-page-auth">
          Создайте аккаунт и воспользуйтесь всеми преимуществами
          зарегистрированных пользователей.
        </p>
        <Link
          className="logined-user"
          style={{
            fontSize: "20px",
            border: "1px solid black",
            textDecoration: "none",
            padding: "5px 10px",
            color: "white",
            backgroundColor: "black",
            padding: "5px 20px",
          }}
          to={REGISTRATION_ROUTE}
        >
          Зарегестрироваться
        </Link>
      </div>
      
    </div>
  );
};

export default Login;
