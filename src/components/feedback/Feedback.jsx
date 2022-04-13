import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import illustr from "../../images/illustr.jpg";
import { Button } from "@mui/material";
import axios from "axios";
import './Feedback.css'
import { REST_API } from "../../utils/urlApi";


const Feedback = () => {
  const [name, setName] = useState("");
  const [date, setDate] = useState("");
  const [number, setNumber] = useState("");
  const [text, setText] = useState("");
  const [success, setSuccess] = useState(false)

  const handleFeedback = async (e) => {
    e.preventDefault();
    try {
      const res = await axios
        .post(`${REST_API}/message`, {
          userName: name,
          userDate: date,
          userText: text,
          userNumber: number,
        })
        .then((res) => console.log(res));
      setName("");
      setDate("");
      setText("");
      setNumber("");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div>
      <div className="Feedback-content">
        <div className="feedback-img">
          <img
            style={{
              width: "100%",
            }}
            src={illustr}
            alt=""
          />
        </div>
        <div className="feedback-forms">
          <div>
            <h3>Обратная связь</h3>
            <p>
              Хотите узнать подробности или задать вопросы? Заполните эту форму.
              Мы получим вашу заявку, и наши менеджеры с вами свяжутся.
            </p>
          </div>
          <form onSubmit={handleFeedback}>
            <div>
              <TextField
                id="outlined-size-small"
                defaultValue="Small"
                size="small"
                label="Ваше имя"
                onChange={(e) => setName(e.target.value)}
                value={name}
                required
                style={{
                  margin: "10px 15px",
                }}
              />
              <TextField
                onChange={(e) => setDate(e.target.value)}
                id="date"
                size="small"
                label="Сегодняшняя дата"
                type="date"
                defaultValue="0000-00-00"
                InputLabelProps={{
                  shrink: true,
                }}
                style={{
                  margin: "10px 15px",
                }}
                
              />
            </div>
            <div>
              <TextField
                id="outlined-size-small"
                defaultValue="Small"
                size="small"
                type="tel"
                label="Ваш номер телефона"
                onChange={(e) => setNumber(e.target.value)}
                value={number}
                required
                style={{
                  margin: "10px 15px",
                }}
              />
              <TextField
                label="Текст вопроса"
                id="outlined-size-small"
                defaultValue="Small"
                size="small"
                onChange={(e) => setText(e.target.value)}
                value={text}
                style={{
                  margin: "10px 15px",
                }}
                required
              />
            </div>
            <Button
              style={{
                margin: "20px 0",
              }}
              variant="contained"
              color="secondary"
              type="submit"
            >
              Отправить
            </Button>
            <div>
              <h5
                style={{
                  width: "80%",
                  fontSize: "15px",
                  margin: "0 auto",
                  textAlign: "center",
                }}
              >
                Этот сайт защищен reCAPTCHA, и к нему применяются{" "}
                <a href="https://policies.google.com/privacy">
                  Политика конфиденциальности{" "}
                </a>{" "}
                и <a href="https://policies.google.com/terms">Условия</a>{" "}
                использования Google .
              </h5>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Feedback;
