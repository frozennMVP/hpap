import React, { useState } from 'react';
import { Carousel } from 'react-bootstrap';
import './HomeCarousel.css'
import homeImg from '../../images/homeImg.jpg'
import homeImgOne from '../../images/homeImgOne.jpg'
import homeImgTwo from '../../images/homeImgTwo.jpg'
import homeImgThree from '../../images/homeImgThree.jpg'



const HomeCarousel = () => {
        const [index, setIndex] = useState(0);
      
        const handleSelect = (selectedIndex, e) => {
          setIndex(selectedIndex);
        };


    return (
      <div className='HomeCarousel'>
        <Carousel activeIndex={index} onSelect={handleSelect}>
          <Carousel.Item>
            <img className="home-img" src={homeImg} alt="First slide" />
            <Carousel.Caption>
              <h3  className='nameOfCarousel'>Любые смазочные материалы</h3>
              
            </Carousel.Caption>
          </Carousel.Item>

          <Carousel.Item>
            <img
              className="home-img"
              src={homeImgOne}
              alt="Second slide"
            />

            <Carousel.Caption>
              <h3  className='nameOfCarousel'>Рекламная строница</h3>
            </Carousel.Caption>
          </Carousel.Item>

          <Carousel.Item>
            <img className="home-img" src={homeImgTwo} alt="Third slide" />

            <Carousel.Caption>
              <h3  className='nameOfCarousel'>Оригинальные свечи Bosch</h3>
            </Carousel.Caption>
          </Carousel.Item>

          <Carousel.Item>
            <img
              className="home-img"
              src={homeImgThree}
              alt="Third slide"
            />

            <Carousel.Caption>
              <h3  className='nameOfCarousel'>Автозапчати для японские немецких и для российских машин</h3>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>
    );
};

export default HomeCarousel;