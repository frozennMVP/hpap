import React, { useContext, useState, useEffect } from "react";
import { Context } from "./context/Context";
import { authRoutes, publicRoutes } from "./utils/Routes";
import { Routes, Route, Navigate } from "react-router-dom";
import { HOME_ROUTE, UNDEFINED } from "./utils/Consts";
import Header from "./components/header/Header";
import Navbar from "./components/nav/Navbar";
import Footer from "./components/footer/Footer";
import Explore from "./pages/explore/Explore";
import Home from "./pages/home/Home";
import Basket from "./pages/basket/Basket";
import axios from "axios";
import { useParams } from "react-router-dom";


const AppRouter = (props) => {
  const { dispatch, user } = useContext(Context);
  const [cartItems, setCartItems] = useState([]);
  const [idChangeMode, setIdChangeMode] = useState(false);



  const addToBasket = (product) => {
    const exist = cartItems.find((x) => x.id === product.id);
    
    if (exist) {
      setCartItems(
        cartItems.map((x) =>
          x.id === product.id ? { ...exist, qty: exist.qty + 1 } : x
        )
      );
    } else {
      setCartItems([...cartItems, { ...product, qty: 1 }]);
    }
    setIdChangeMode(cartItems.find(product => product.id === true))
  };

  const removeFromBasket = (product) => {
    const exist = cartItems.find((x) => x.id === product.id);
    

    if (exist.qty === 1) {
      setCartItems(cartItems.filter((x) => x.id !== product.id));
    } else {
      setCartItems(
        cartItems.map((x) =>
          x.id === product.id ? { ...exist, qty: exist.qty - 1 } : x
        )
      );
    }
    setIdChangeMode(cartItems.map(product => product.id === false))
  };

  return (
    <div>
      <Header cartItems={cartItems} removeFromBasket={removeFromBasket} />
      <Navbar />
      <Routes>
        {(user &&
          authRoutes.map(({ path, element }) => (
            <Route key={path} path={path} element={element} exact />
          ))) ||
          publicRoutes.map(({ path, element = { element } }) => (
            <Route key={path} path={path} element={element} exact />
          ))}

        <Route
          path="/basketPageSeeAndOrder"
          element={<Basket cartItems={cartItems} />}
        />
        <Route path="/" element={<Home />} />
        <Route path="/home/:id" element={<Explore addToBasket={addToBasket} removeFromBasket={removeFromBasket} idChangeMode={idChangeMode}
              cartItems={cartItems}
            />
          }
        />

        <Route path="*" element={<Navigate to={UNDEFINED} />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default AppRouter;
