import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import { useParams, Link, useNavigate } from "react-router-dom";
import { Card } from "@mui/material";
import "./Explore.css";
import { CardMedia } from "@mui/material";
import HouseIcon from "@mui/icons-material/House";
import { HOME_ROUTE } from "../../utils/Consts";
import { Context } from "../../context/Context";
import ModeEditIcon from "@mui/icons-material/ModeEdit";
import IconButton from "@mui/material/IconButton";
import SaveIcon from "@mui/icons-material/Save";
import TextField from "@mui/material/TextField";
import { Button } from "@mui/material";
import SimpleAccordion from "../../components/accordion/Accardion";
import Security from "../../components/accordion/Security";
import DoDisturbIcon from "@mui/icons-material/DoDisturb";
import DeleteIcon from '@mui/icons-material/Delete';

const fetchData = (id) => {
  return axios.get(`https://tilek.herokuapp.com/items/${id}`).then((res) => res.data);
};

const Explore = (props) => {
  const { dispatch, user } = useContext(Context);
  const [post, setPost] = useState({});
  const { addToBasket, removeFromBasket, cartItems, idChangeMode } = props;
  const { id } = useParams();
  const [edit, setEdit] = useState(false);
  const [name, setName] = useState("");
  const [price, setPrice] = useState();
  const [url, setUrl] = useState("");
  const [description, setDescription] = useState("");
  const [isConfirm, setIsConfirm] = useState(false)
  const navigate = useNavigate();

  

  const goBack = () => {
    navigate(-0.5);
  };

  const goBackAll = () => {
    navigate(-1);
  };

  useEffect(() => {
    fetchData(id).then((data) => setPost(data));
  }, [id]);

  const handleEdit = () => {
    setEdit(true);
  };
  const handleSaveChanges = async (e) => {
    await axios.patch(`https://tilek.herokuapp.com/items/${id}`, {
      name,
      url,
      price,
      description,
    });
    fetchData(id).then((data) => setPost(data));
    setEdit(false);
  };

  const handleDelete = async (e) => {
    await axios.delete(`https://tilek.herokuapp.com/items/${id}`, {
      name,
      url,
      price,
      description,
    })
    setIsConfirm(true)
    fetchData(id).then((data) => setPost(data));
    goBackAll()
  }

  return (
    <div>
      {isConfirm ? window.confirm("Вы точно хотите удалить") : ""}
      {post && (
        <div key={post.id} className="post">
          <div className="gobackIcon">
            <span>
              <Link to={HOME_ROUTE}>
                <HouseIcon
                  style={{
                    color: "gray",
                    marginRight: "10px",
                  }}
                />
              </Link>
              {post.name}
            </span>
          </div>

          <div className="post-card">
            <Card
              className="CardForImgExplore"
            >
                <CardMedia
                className="itemsImgExplore"
                component="img"
                height="430"
                image={post.url}
                alt="wait pls"
              />
            </Card>
            <div className="CardForInfo">
              {user ? (
                <div >
                  {user.status === true ? (
                    <div className="buttonForAdmin">
                      <IconButton aria-label="more"
                      id="long-button"
                      aria-haspopup="true"
                      onClick={handleDelete}
                      style={{
                        display: "flex",
                        justifyContent: "end",
                        color: "gray",
                      }}>
                        <DeleteIcon style={{
                          color: "gray",
                          margin: "0px 15px"
                        }}/>
                      </IconButton>
                      <IconButton
                      aria-label="more"
                      id="long-button"
                      aria-haspopup="true"
                      onClick={handleEdit}
                      style={{
                        display: "flex",
                        justifyContent: "end",
                        color: "gray",
                      }}
                    >
                      <ModeEditIcon
                        style={{
                          color: "gray",
                          margin: "0px 15px"
                        }}
                      />
                    </IconButton>
                    </div>
                    
                  ) : (
                    ""
                  )}
                </div>
              ) : (
                ""
              )}

              {edit ? (
                <TextField
                  onChange={(e) => setName(e.target.value)}
                  value={name}
                  className="editText"
                  type="text"
                  id="outlined-basic"
                  label="Название товара"
                  variant="outlined"
                  required
                />
              ) : (
                <h4 className="postName">{post.name}</h4>
              )}
              {edit ? "" : <hr />}
              <div className={edit ? "inputsForDisplay" : ""}>
                {edit ? (
                  <TextField
                    onChange={(e) => setUrl(e.target.value)}
                    value={url}
                    className="editText"
                    type="url"
                    id="outlined-basic"
                    label="Введите URL картинки"
                    variant="outlined"
                    required
                  />
                ) : (
                  ""
                )}
              </div>

              <div className={edit ? "inputsForDisplay" : ""}>
                {edit ? (
                  <TextField
                    onChange={(e) => setPrice(e.target.value)}
                    value={price}
                    className="editText"
                    type="text"
                    id="outlined-basic"
                    label="Введите цену"
                    variant="outlined"
                    required
                  />
                ) : (
                  <p className="postPrice">Цена: {post.price}$</p>
                )}
              </div>

              <div className={edit ? "inputsForDisplay" : ""}>
                {edit ? (
                  <TextField
                    onChange={(e) => setDescription(e.target.value)}
                    value={description}
                    className="editText"
                    type="text"
                    id="outlined-basic"
                    label="Описание товара"
                    variant="outlined"
                    required
                  />
                ) : (
                  <p className="postDescription">
                    Описание: {post.description}
                  </p>
                )}
              </div>
              <div>
                {user ? 
                (<div>
                  {user.status === true ? "" : <div>{idChangeMode ? (
                    <Button onClick={() => addToBasket(post)}>Добавить</Button>
                ) : (
                  <Button onClick={() => addToBasket(post)}>Добавить</Button>
                )}</div>}
                </div>)
                : 
                ("")
                }
                
              </div>
              <div
                style={{
                  display: "flex",
                  justifyContent: "end",
                }}
              >
                {edit ? (
                  <Button
                    variant="contained"
                    onClick={goBack}
                    endIcon={<DoDisturbIcon />}
                    className="saveButton"
                  >
                    Отмена
                  </Button>
                ) : (
                  ""
                )}
                {edit ? (
                  <Button
                    variant="contained"
                    onClick={handleSaveChanges}
                    endIcon={<SaveIcon />}
                    className="saveButton"
                  >
                    Сохранить
                  </Button>
                ) : (
                  ""
                )}
              </div>

              <div className="secure">
                <SimpleAccordion />
              </div>
            </div>
          </div>
        </div>
      )}
      <Security />
    </div>
  );
};

export default Explore;
