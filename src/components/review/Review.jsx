import React, { useState } from "react";
import axios from "axios";
import { Button, Card } from "@mui/material";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Slide from "@mui/material/Slide";
import TextField from "@mui/material/TextField";
import Checkbox from "@mui/material/Checkbox";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import { Link } from "react-router-dom";
import './Review.css'

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const label = { inputProps: { "aria-label": "Checkbox demo" } };

const Review = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [text, setText] = useState("");
  const [thank, setThank] = useState(false);

  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleReview = async (e) => {
    e.preventDefault();
    try {
      const res = await axios
        .post(`https://tilek.herokuapp.com/message`, {
          userName: name,
          userEmail: email,
          userText: text,
        })
        .then((res) => console.log(res));
      setName("");
      setEmail("");
      setText("");
      setThank(true);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <Card className="Review-card">
      <div className="review-content">
        <h5 className="review-text" >
          <p>Сообщение</p>
          Мнение наших клиентов очень важно для нас. Вы можете оставить отзыв о
          нашей работе через форму обратной связи.
        </h5>
        <div className="review-btn">
          <Button
            variant="contained"
            color="secondary"
            onClick={handleClickOpen}
          >
            Оставить сообщение
          </Button>
          <Dialog
            open={open}
            TransitionComponent={Transition}
            keepMounted
            aria-describedby="alert-dialog-slide-description"
          >
            {thank ? (
              <div>
                <DialogTitle id="alert-dialog-title">
                  <CheckCircleIcon
                    style={{
                      color: "blue",
                    }}
                  />
                </DialogTitle>
                <DialogContent>
                  <DialogContentText id="alert-dialog-description">
                    Сообщение успешно отправлено!
                  </DialogContentText>
                  <DialogContentText id="alert-dialog-description">
                    Постаремся ответить на ваш запрос, как можно скорее.
                  </DialogContentText>
                </DialogContent>
                <DialogActions>
                  <Button onClick={handleClose}>Назад</Button>
                </DialogActions>
              </div>
            ) : (
              <form
                style={{
                  margin: "30px 0",
                }}
                className='formOfReview'
                onSubmit={handleReview}
              >
                <DialogTitle>{"Добавить отзыв"}</DialogTitle>
                <DialogContent>
                  <DialogContentText id="alert-dialog-slide-description">
                    <TextField
                      id="standard-basic"
                      label="Ваше имя"
                      variant="standard"
                      onChange={(e) => setName(e.target.value)}
                      value={name}
                      required
                      style={{
                        margin: "10px 15px",
                      }}
                    />
                    <TextField
                      id="standard-basic"
                      label="E-mail"
                      variant="standard"
                      type="email"
                      onChange={(e) => setEmail(e.target.value)}
                      value={email}
                      required
                      style={{
                        margin: "10px 15px",
                      }}
                    />
                  </DialogContentText>
                  <DialogContentText id="alert-dialog-slide-description">
                    <TextField
                      required
                      id="standard-basic"
                      label="Текст отзыва"
                      variant="standard"
                      type="text"
                      onChange={(e) => setText(e.target.value)}
                      value={text}
                      style={{
                        margin: "10px 15px",
                      }}
                    />
                  </DialogContentText>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                    }}
                  >
                    <Checkbox {...label} defaultChecked color="default" />
                    <h6 style={{ marginBottom: "0" }}>
                      {" "}
                      Я соглашаюсь с условиями обработки персональных данных
                    </h6>
                  </div>
                </DialogContent>
                <DialogActions style={{ margin: "20px 0" }}>
                  <Button onClick={handleClose}>Отмена</Button>
                  <Button type="submit" variant="contained" color="secondary">
                    Отправить
                  </Button>
                </DialogActions>
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
            )}
          </Dialog>
        </div>
      </div>
    </Card>
  );
};

export default Review;
