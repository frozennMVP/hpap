import React, { useState, useContext, useEffect } from "react";
import { useSelector } from "react-redux";
import { Context } from "../../context/Context";
import "./Basket.css";
import { Card } from "@mui/material";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import { Button } from "@mui/material";
import { useParams } from 'react-router-dom';
import axios from "axios";



// const fetchData = () => {
//   return axios
//     .get(`http://localhost:3004/items`)
//     .then((response) => response.data);
// };


const Basket = (props) => {
  const { dispatch, user } = useContext(Context);
  const { id } = useParams()
  
  const { cartItems } = props;
console.log(cartItems)



  // useEffect(() => {
  //   fetchData(id).then((data) => setPosts(data));
  // }, [id]);
  // const items = useSelector((state) => state.cart.itemsInCart);
  // const totalPrice = items.reduce((acc, item) => acc + item.price, 0);
  // const isItemInCart = items.some((item) => item.id === post.id);


  return (
    <div className="Basket">
      
      <div className="UnderBasket">
        <div className="BasketSide">
          {/* {cartItems.map((cartItem) => (
            <Card
              sx={{ overflow: "hidden", margin: "10px" }}
              key={cartItem.id}
              className="itemInBasket"
            >
              <div className="itemForDisplay">
                <img src={cartItem.url} className="itemUrlInBasket" alt="" />
                <div className="basketSideInfo">
                  <div>
                    <h4>{cartItem.name}</h4>
                  </div>
                  <Button>
                    <DeleteForeverIcon />
                    Удалить из корзины
                  </Button>
                </div>
              </div>
            </Card>
          ))} */}
        </div>

        <div className="payment"></div>
      </div>
    </div>
  );
};

export default Basket;
