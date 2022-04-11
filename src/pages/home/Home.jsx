import React, { useEffect, useState} from 'react';
import HomeCarousel from '../../react-bootstrap/HomeCarousel/HomeCarousel';
import './Home.css'
import mechanism from '../../images/mechanism.jpg'
import mercedes from '../../images/mercedes.jpg'
import { Button, CardActionArea } from '@mui/material';
import { useParams, Link } from "react-router-dom";
import axios from 'axios';
import { Card } from '@mui/material';
import { CardMedia } from '@mui/material';
import CardContent from "@mui/material/CardContent";
import Divider from "@mui/material/Divider";
import ImgGroup from '../../components/img/ImgGroup';
import { styled } from '@mui/material/styles';
import Review from '../../components/review/Review'
import { SHOW_ROUTE } from '../../utils/Consts';



const Input = styled('input')({
  display: 'none',
});



const fetchData = () => {
    return axios
      .get(`https://tilek.herokuapp.com/api/items`)
      .then(response => response.data);
  };

const Home = () => {
    const { id } = useParams();
    const [items, setItems] = useState([]);
    

useEffect(() => {
    fetchData(id).then(data => setItems(data))
}, [id])


    return (
      <div className="Home">

        <div style={{ width: "80%" }}>
          <Button
            variant="outlined"
            style={{
              color: "white",
              backgroundColor: "black",
              margin: "30px 0",
            }}
          >
            ПОПУЛЯРНОЕ
          </Button>
        </div>

        <div className="itemsCard">
          {items.filter(item => item.price >= 30).map((item) => (
            <Card
              key={item.id}
              sx={{ overflow: "hidden", margin: "10px" }}
              className="Card"
            >
              <CardActionArea className="CardImgFicsHome">
                <div>
                  <Link to={`/home/${item.id}`}>
                  <CardMedia
                    className="itemsImgHome"
                    component="img"
                    height="430"
                    image={item.url}
                    alt="wait pls"
                  />
                  </Link>
 
                </div>
              </CardActionArea>
              <Divider />
              <CardContent  className='CardContentInfo' style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                height: "20%"
              }}>
                <Link
                  className="homeLinkToExplore"
                  key={item.id}
                  to={`/home/${item.id}`}
                >
                  {item.name}
                </Link>
                <p className="paragraphPrice">Цена: {item.price} $</p>
              </CardContent>
            </Card>
          ))}
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
          }}
        >
          <Button style={{
            backgroundColor: "black",
            padding: "10px 15px",
            margin: "30px 0"
          }}><Link className='toShowItemsFromHome' to={SHOW_ROUTE}>Увидеть весь Каталог</Link></Button>
        </div>

                <div className="homeCarouselImg">
          <HomeCarousel />
          <div className="ownHomeImg">
            <div>
              <img src={mechanism} alt="" className="mechanismImg" />
            </div>
            <div>
              <img src={mercedes} alt="" className="mechanismImg" />
            </div>
          </div>
        </div>
        <Review />
      </div>
    );
};

export default Home;    