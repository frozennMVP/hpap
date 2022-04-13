import React, { useState, useEffect, useContext } from "react";
import "./Show.css";
import { styled, alpha } from "@mui/material/styles";
import SearchIcon from "@mui/icons-material/Search";
import InputBase from "@mui/material/InputBase";
import axios from "axios";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { Card } from "@mui/material";
import { CardMedia } from "@mui/material";
import CardContent from "@mui/material/CardContent";
import Divider from "@mui/material/Divider";
import { Button, CardActionArea } from "@mui/material";
import { Context } from "../../context/Context";
import { REST_API } from "../../utils/urlApi";





const fetchData = () => {
  return axios
    .get(`${REST_API}/items`)
    .then((response) => response.data);
};

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(1),
    width: "auto",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      width: "12ch",
      "&:focus": {
        width: "20ch",
      },
    },
  },
}));

const Show = () => {
  const [products, setProducts] = useState([]);
  const [value, setValue] = useState("");
  const { user } = useContext(Context);
  const { id } = useParams();

  useEffect(() => {
    fetchData(id).then((data) => setProducts(data));
  }, [id]);

  const filteresProducts = products.filter((product) => {
    return product.name.toLowerCase().includes(value.toLowerCase());
  });



  const filteresData = products.filter(product => {
      return product.category === product.category
  })

  return (
    <div>
      <div>
        <h3 style={{ textAlign: "center" }}>Каталог товаров</h3>
      </div>
      <div className="search-button">
        <div>
          <Search className="Search">
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search…"
              inputProps={{ "aria-label": "search" }}
              onChange={(e) => setValue(e.target.value)}
            />
          </Search>
        </div>
      </div>

      <div className="ShowProducts">
        {filteresProducts.map((product) => (
          <Card
            key={product.id}
            sx={{ overflow: "hidden", margin: "10px" }}
            className="CardShow"
          >
            <div className="imagesContent">
              <Link to={`/home/${product.id}`}>
                <CardMedia
                className="itemsImgShow"
                component="img"
                height="430"
                image={product.url}
                alt="wait pls"
              />
              </Link>

            </div>
            <Divider />
            <CardContent className="CardContent">
              <Link
                className="homeLinkToExploreShow"
                key={product.id}
                to={`/home/${product.id}`}
              >
                {product.name}
              </Link>
              <p className="paragraphPrice">Цена: {product.price} $</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Show;
