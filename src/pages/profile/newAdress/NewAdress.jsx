import React, { useContext, useState } from "react";
import { Button } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import HouseIcon from "@mui/icons-material/House";
import { HOME_ROUTE } from "../../../utils/Consts";
import { Context } from "../../../context/Context";
import TextField from "@mui/material/TextField";
import axios from "axios";
import "./NewAdress.css";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import SaveIcon from "@mui/icons-material/Save";
import { REST_API } from "../../../utils/urlApi";
import { db } from "../../../firebase/firebase-config";

import { setDoc, doc } from "firebase/firestore";

import { getDoc } from "firebase/firestore";

const NewAdress = () => {
  const { dispatch, user } = useContext(Context);


const [firebaseUsers, setFirebaseUsers] = useState({})

    const users = doc(db, "users", user.uid);
    getDoc(users).then((doc) => {
      setFirebaseUsers(doc.data())
    })



  const [login, setLogin] = useState(users.login);
  const [email, setEmail] = useState(user.email);
  const [country, setCountry] = useState("");
  const [city, setCity] = useState("");
  const [adress, setAdress] = useState("");
  const [index, setIndex] = useState("");
  const [number, setNumber] = useState(user.number);
  const [additional, setAdditional] = useState("");
  const [isAdressed, setIsAdressed] = useState(false);
  const navigate = useNavigate();


  const goBack = () => {
    navigate(-1);
  };

  const handleAddNewAdress = async (e) => {
    e.preventDefault();
    const res = await setDoc.patch(doc(db, "users", user.uid), {
      login,
      email,
      country,
      city,
      adress,
      index,
      number,
      additional,
    }).then(res => console.log(res))

    const users = doc(db, "users", user.uid);
    getDoc(users).then((doc) => {
      setFirebaseUsers(doc.data())
    })
  console.log(firebaseUsers)
    
    dispatch({ type: "USER_UPDATE", payload: res.user });
    setLogin("");
    setEmail("");
    setCountry("");
    setCity("");
    setAdress("");
    setIndex("");
    setNumber("");
    setAdditional("");
 setTimeout(2000, goBack())
  };

  const handleChangeAdress = () => {
    setIsAdressed(true);
  };
  const handleCancelAdress = () => {
    setIsAdressed(false);
  };


  
  return (
    <div>
      <div>
        <Button variant="outlined">
          <Link className="AdminGoBack" to={HOME_ROUTE}>
            <HouseIcon
              style={{
                color: "gray",
                marginRight: "10px",
              }}
            />
            Ваш адрес
          </Link>
        </Button>
      </div>
      <div className="NewAdressForm">
        {isAdressed ? (
          <form onSubmit={handleAddNewAdress} className="formAddAdress">
            <div>
              <TextField
                id="outlined-basic"
                label={login}
                onChange={(e) => setLogin(e.target.value)}
                placeholder={login ? login : "Имя"}
                variant="outlined"
                className="AdressInput"
              />
              <TextField
                id="outlined-basic"
                label={user.email}
                onChange={(e) => setEmail(e.target.value)}
                value={email}
                variant="outlined"
                className="AdressInput"
              />
            </div>
            <div>
              <TextField
                id="outlined-basic"
                label="Страна"
                onChange={(e) => setCountry(e.target.value)}
                value={country}
                variant="outlined"
                className="AdressInput"
                required
              />
              <TextField
                id="outlined-basic"
                label="Город"
                onChange={(e) => setCity(e.target.value)}
                value={city}
                variant="outlined"
                className="AdressInput"
                required
              />
            </div>
            <div>
              <TextField
                id="outlined-basic"
                label="Адрес"
                onChange={(e) => setAdress(e.target.value)}
                value={adress}
                variant="outlined"
                className="AdressInput"
                required
              />
              <TextField
                id="outlined-basic"
                label="Почтовый индекс"
                onChange={(e) => setIndex(e.target.value)}
                value={index}
                variant="outlined"
                className="AdressInput"
                type="number"
                required
              />
            </div>
            <div>
              <TextField
                id="outlined-basic"
                label="Домашний телефон"
                variant="outlined"
                className="AdressInput"
                type="tel"
              />
              <TextField
                id="outlined-basic"
                label={user.number}
                variant="outlined"
                onChange={(e) => setNumber(e.target.value)}
                value={number}
                className="AdressInput"
                type="tel"
                required
              />
            </div>
            <div>
              <TextField
                id="outlined-basic"
                label="Дополнительная информация"
                onChange={(e) => setAdditional(e.target.value)}
                value={additional}
                className="AdressInput"
                variant="outlined"
              />
            </div>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Button
                className="outlinedBtnAdd"
                variant="outlined"
                onClick={handleCancelAdress}
              >
                {" "}
                <ArrowBackIosIcon /> Отмена
              </Button>
              <Button
                className="outlinedBtnAdd"
                variant="outlined"
                type="submit"
              >
                Сохранить <SaveIcon />
              </Button>
            </div>
          </form>
        ) : (
          <div>
            <div className="infoAdressWarm">
              <h4>Мой адрес</h4>
              <hr />
              <h6>
                Пожалуйста укажите основной адрес, который будет использоваться
                для доставки покупок. Можно указать несколько адресов, чтобы в
                дальнейшем иметь возможность отправлять подарки или получать
                покупки в офисе. Вы можете быстро выбирать любой из них.
              </h6>
              <h5>Ваши адреса перечислены ниже.</h5>
              <h6>Не забывайте обновлять адреса в случае их изменения.</h6>
            </div>
            <div className="AlreadyHavedAdress">
              <h4>МОЙ АДРЕС</h4>
              <div className="AlreadyAdressContent">
                <p>Имя: {firebaseUsers.login}</p>
                <p>E-mail: {firebaseUsers.email}</p>
                <p>Страна: {firebaseUsers.country ? firebaseUsers.country : "Не указано"}</p>
                <p>Город: {firebaseUsers.city ? firebaseUsers.city : "Не указано"}</p>
                <p>Адрес: {firebaseUsers.adress ? firebaseUsers.adress : "Не указано"}</p>
                <p>Почтовый индекс: {firebaseUsers.index ? firebaseUsers.index : "Не указано"}</p>
                <p>
                  Дополнительная информация:{" "}
                  {user.additional ? user.additional : "Ничего не указано"}
                </p>
              </div>
              <Button
                className="goBackToProfilePage"
                variant="outlined"
                onClick={goBack}
              >
                <ArrowBackIosIcon /> Назад
              </Button>
              <Button
                className="goBackToProfilePage"
                variant="outlined"
                onClick={handleChangeAdress}
              >
                Изменить <ArrowForwardIosIcon />
              </Button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default NewAdress;
