import React, { useState } from "react";
import { TextField } from "@mui/material";
import axios from "axios";
import { Button } from "@mui/material";
import addIllustr from '../../images/addIllustr.webp'
import Alert from '@mui/material/Alert';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import './AddItems.css'


const AddItems = () => {
  const [name, setName] = useState("");
  const [price, setPrice] = useState();
  const [url, setUrl] = useState("");
  const [description, setDescription] = useState("");
  const [ alert, setAlert ] = useState(false)

  const [category, setCategory] = useState('');

  const handleChange = (event) => {
    setCategory(event.target.value);
  };




  const handleAddPost = async (e) => {
    e.preventDefault();
    const res = await axios.post("https://tilek.herokuapp.com/items", {
      name,
      price,
      description,
      url
    });
    setAlert(true)
    setTimeout(setAlert, 3000)
    setName('')
    setPrice('')
    setDescription('')
    setUrl('')
    console.log(res);
  };
  return (
    <div>
      {alert ? <Alert onClose={() => {}}>Товар успешно добавлен</Alert> : ""}
      <div className="AddItems">
        <form className="addPostForm" onSubmit={handleAddPost}>
          <h3 className="addPostTitle">Создать карточку товара</h3>
          <div className="addNewPostDisplay">
            <TextField
              onChange={(e) => setName(e.target.value)}
              value={name}
              className="addPost"
              type="text"
              id="outlined-basic"
              label="Название товара"
              variant="outlined"
              required
            />
            
          </div>
          <div className="addNewPostDisplay">
            <TextField
              onChange={(e) => setUrl(e.target.value)}
              value={url}
              className="addPost"
              type="url"
              id="outlined-basic"
              label="Введите URL картинки"
              variant="outlined"
              required
            />
          </div>
          <div className="addNewPostDisplay">
            <TextField
              onChange={(e) => setPrice(e.target.value)}
              value={price}
              className="addPost"
              type="text"
              id="outlined-basic"
              label="Цена товара"
              variant="outlined"
              required
            />
          </div>
          <div className="addNewPostDisplay">
            <TextField
              onChange={(e) => setDescription(e.target.value)}
              value={description}
              className="addPost"
              type="text"
              id="outlined-basic"
              label="Описание товара"
              variant="outlined"
              required
            />
          </div>
          <div style={{ display: "flex", justifyContent: "center" }}>
            <Button
              variant="outlined"
              style={{
                backgroundColor: "blue",
                color: "white",
                margin: "20px 0",
              }}
              type="submit"
            >
              Добавить
            </Button>
          </div>
        </form>
        <div className="illustrSide">
          <img className="illustration" src={addIllustr} alt="" />
        </div>
      </div>
    </div>
  );
};

export default AddItems;
