import React, { useContext, useState } from "react";
import { Context } from "../../../context/Context";
import "./Personal.css";
import FormLabel from "@mui/material/FormLabel";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import { Alert, TextField } from "@mui/material";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import ChangeCircleIcon from "@mui/icons-material/ChangeCircle";
import axios from "axios";
import SaveIcon from '@mui/icons-material/Save';
import { REST_API } from "../../../utils/urlApi";


import { db } from "../../../firebase/firebase-config";

import { setDoc, doc, onSnapshot, getDoc } from "firebase/firestore";




const Personal = () => {
  const { dispatch, user } = useContext(Context);
  const [firebaseUsers, setFirebaseUsers] = useState({})
  
  // const users = doc(db, "users", user.uid);
  // onSnapshot(users, (doc) => {
  //   setFirebaseUsers(doc.data())
  // })  

  const [login, setLogin] = useState(firebaseUsers.login);
  const [surname, setSurname] = useState(firebaseUsers.surname);
  const [email, setEmail] = useState(firebaseUsers.email);
  const [password, setPassword] = useState("");
  const [gender, setGender] = useState("");
  const [country, setCountry] = useState("");
  const [city, setCity] = useState("");
  const [adress, setAdress] = useState("");
  const [index, setIndex] = useState("");
  const [additional, setAdditional] = useState("");
  const [number, setNumber] = useState(firebaseUsers.number);
  const [age, setAge] = useState("");
  const [isAcc, setIsAcc] = useState(false);



  const navigate = useNavigate();

  const goBackNotAtAll = () => {
    navigate(-0.5);
  };

  const goBack = () => {
    navigate(-1);
  };

  const handleCangeInPersonal = () => {
    setIsAcc(true);
  };
  const handleCancelAdress = () => {
    setIsAcc(false)
}



  const handleChangePersonal = async(e) => {
    e.preventDefault()

    const res = await setDoc(doc(db, "users", user.uid), {
      login,
      email,
      password,
      age,
      gender,
      country,
      city,
      adress,
      index,
      number,
      additional,
    }).then(res => console.log(res))



    dispatch({ type: "USER_UPDATE", payload: res.user });



    setLogin('')
    setSurname('')
    setEmail('')
    setPassword('')
    setAge('')
    setNumber('')
    setGender('')
    goBackNotAtAll()
  }


  return (
    <div>
      <h5>ВАША ПЕРСОНАЛЬНАЯ ИНФОРМАЦИЯ</h5>
      <hr />
      <div>
        <p>
          Пожалуйста, не забывайте обновлять личную информацию в случае любых
          изменений.
        </p>
        <div>
          {isAcc ? (
            <form onSubmit={handleChangePersonal} className="pesonalForm">
              <FormControl>
                <FormLabel id="demo-row-radio-buttons-group-label">
                  Gender
                </FormLabel>
                <RadioGroup
                  row
                  aria-labelledby="demo-row-radio-buttons-group-label"
                  name="row-radio-buttons-group"
                >
                  <FormControlLabel
                    onChange={(e) => setGender(e.target.value)}
                    value="Мужчина"
                    control={<Radio />}
                    label="Мужчина"
                  />
                  <FormControlLabel
                    onChange={(e) => setGender(e.target.value)}
                    value="Женщина"
                    control={<Radio />}
                    label="Женщина"
                  />
                </RadioGroup>
              </FormControl>
              <div>
                <TextField
                  onChange={(e) => setLogin(e.target.value)}
                  value={login}
                  id="outlined-basic"
                  label="Введите ваше имя"
                  variant="outlined"
                  className="inputTextPersonal"
                  required
                  style={{
                    margin: "15px 25px",
                  }}
                />
                <TextField
                  onChange={(e) => setSurname(e.target.value)}
                  value={surname}
                  id="outlined-basic"
                  label="Введите вашу фамилию"
                  variant="outlined"
                  className="inputTextPersonal"
                  required
                  style={{
                    margin: "15px 25px",
                  }}
                />
              </div>
              <div>
                <TextField
                  onChange={(e) => setAge(e.target.value)}
                  id="date"
                  label="Дата рождение"
                  type="date"
                  className="inputTextPersonal"
                  defaultValue="0000-00-00"
                  InputLabelProps={{
                    shrink: true,
                  }}
                  style={{
                    width: "35%",
                    margin: "15px 25px",
                  }}
                />
                <TextField
                  onChange={(e) => setNumber(e.target.value)}
                  value={number}
                  id="outlined-basic"
                  label="Введите номер тел"
                  variant="outlined"
                  className="inputTextPersonal"
                  type="tel"
                  required
                  style={{
                    margin: "15px 25px",
                  }}
                />
              </div>
              <div>
                <TextField
                  onChange={(e) => setEmail(e.target.value)}
                  value={email}
                  className="inputTextPersonal"
                  type="email"
                  id="outlined-basic"
                  label="Введите email"
                  variant="outlined"
                  required
                  style={{
                    margin: "15px 25px",
                  }}
                />
                <TextField
                  id="outlined-basic"
                  className="inputTextPersonal"
                  label="Введите пароль"
                  variant="outlined"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  style={{
                    margin: "15px 25px",
                  }}
                />
              </div>
              <div style={{display: "flex", justifyContent: "center", alignItems: "center"}}>
                    <Button className="outlinedBtnAdd" variant="outlined" onClick={handleCancelAdress}> <ArrowBackIosIcon/> Отмена</Button>
                    <Button className="outlinedBtnAdd" variant="outlined" type="submit">Сохранить <SaveIcon/></Button>
                </div>
            </form>
          ) : (
            <div className="PesonalWidth">
              <h3 style={{ textAlign: "center" }}>Обзор моей учетной записи</h3>
              <hr />
              <div style={{ display: "flex", justifyContent: "space-around", flexDirection: "column" }}>
                <div>
                  <h5>Имя: {firebaseUsers.login}</h5>
                  <h5>email: {firebaseUsers.email}</h5>
                  <h5>ДР: {firebaseUsers.age}</h5>
                </div>
                <div>
                  <h5>Фамилия: {firebaseUsers.surname}</h5>
                  <h5>Пол: {firebaseUsers.gender}</h5>
                  <h5>Расположение: Кыргызстан</h5>
                </div>
              </div>
              <div className="personalDisplayBTN">
                <Button
                  onClick={goBack}
                  variant="outlined"
                  style={{
                    width: "50%",
                    color: "white",
                    backgroundColor: "black",
                    margin: "15px 20px",
                  }}
                >
                  <ArrowBackIosIcon /> Назад
                </Button>
                <Button
                  onClick={handleCangeInPersonal}
                  variant="outlined"
                  style={{
                    width: "50%",
                    color: "white",
                    backgroundColor: "black",
                    margin: "15px 20px",
                  }}
                >
                  Изменить <ChangeCircleIcon />
                </Button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Personal;
