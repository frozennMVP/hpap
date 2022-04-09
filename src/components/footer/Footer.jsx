import React from 'react';
import { Link } from 'react-router-dom'
import './Footer.css'
import LocationOnIcon from '@mui/icons-material/LocationOn';
import CallIcon from '@mui/icons-material/Call';
import EmailIcon from '@mui/icons-material/Email';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const Footer = () => {
    return (
      <div className="footer">
        <div className="footer-one">
          <div className="footer-links">
            <h4>
              <Link className="h4-link" to="/">
                Смазочные материалы
              </Link>
            </h4>
            <p>
              <Link className="p-a" to="/">
                Интерьер
              </Link>
            </p>
            <p>
              <Link className="p-a" to="/">
                Инструменты
              </Link>
            </p>
            <p>
              <Link className="p-a" to="/">
                Остальное
              </Link>
            </p>
          </div>
          <div className="footer-links">
            <h4>
              <Link className="h4-link" to="/">
                Информация
              </Link>
            </h4>
            <p>
              <Link className="p-a" to="/">
                Наши магазины
              </Link>
            </p>
            <p>
              <Link className="p-a" to="/">
                Свяжитесь с нами
              </Link>
            </p>
            <p>
              <Link className="p-a" to="/">
                Terms and conditions of use
              </Link>
            </p>
            <p>
              <Link className="p-a" to="/">
                About us
              </Link>
            </p>
            <p>
              <Link className="p-a" to="/">
                Карта сайта
              </Link>
            </p>
          </div>
          <div className="footer-links">
            <h4>
              <Link className="h4-link" to="/">
                Моя учетная запись
              </Link>
            </h4>
            <p>
              <Link className="p-a" to="/">
                Мои заказы
              </Link>
            </p>
            <p>
              <Link className="p-a" to="/">
                Мои кредитные квитанции
              </Link>
            </p>
            <p>
              <Link className="p-a" to="/">
                Мои адреса
              </Link>
            </p>
            <p>
              <Link className="p-a" to="/">
                Моя личная информация
              </Link>
            </p>
            <p>
              <Link className="p-a" to="/">
                Выйти
              </Link>
            </p>
          </div>
        </div>

        <div className="footer-two">
          <h4>
            <Link className="h4-link" to="/">
              Информация о магазине
            </Link>
          </h4>
          <div className="footer-info">
            <LocationOnIcon
              style={{
                color: "#777777",
                marginRight: "10px",
              }}
            />
            <p
              style={{
                color: "#777777",
              }}
            >
              Аблабек агай, с.Чуй Ибраимова 11
            </p>
          </div>
          <div className="footer-info">
            <CallIcon
              style={{
                color: "#777777",
                marginRight: "10px",
              }}
            />
            <p
              style={{
                color: "#777777",
              }}
            >
              Звоните нам: <a href="tel:+996507010805">+996507010805</a>
            </p>
          </div>
          <div className="footer-info">
            <EmailIcon
              style={{
                color: "#777777",
                marginRight: "10px",
              }}
            />
            <p
              style={{
                color: "#777777",
              }}
            >
              E-mail:{" "}
              <a href="mailto:unaaservice@mail.ru">unaaservice@mail.ru</a>
            </p>
          </div>
        </div>




        <div className="mobileFooter">
          <Accordion style={{
              backgroundColor: "#333333",
              color: "white"
          }} className='mobileAccordion'>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
              style={{
                width: "100%",
              }}
            >
              <Typography>Смазочные материалы</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                <p>
                <Link className="p-a" to="/">
                Интерьер
              </Link>
                </p>
                <p>
                  
                  <Link className="p-a" to="/">
                Инструменты
              </Link>
                </p>
                <p>
                <Link className="p-a" to="/">
                Остальное
              </Link>
                </p>
              </Typography>
            </AccordionDetails>
          </Accordion>


          <Accordion style={{
              backgroundColor: "#333333",
              color: "white"
          }}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
              style={{
                width: "100%",
              }}
            >
              <Typography>Информация</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                <p>
                <Link className="p-a" to="/">
                Наши магазины
              </Link>
                </p>
                <p>
                  
                <Link className="p-a" to="/">
                Свяжитесь с нами
              </Link>
                </p>
                <p>
                <Link className="p-a" to="/">
                Terms and conditions of use
              </Link>
                </p>
                <p>
              <Link className="p-a" to="/">
                About us
              </Link>
            </p>
            <p>
              <Link className="p-a" to="/">
                Карта сайта
              </Link>
            </p>
              </Typography>
            </AccordionDetails>
          </Accordion>


          <Accordion style={{
              backgroundColor: "#333333",
              color: "white"
          }}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
              style={{
                width: "100%",
              }}
            >
              <Typography>Моя учетная запись</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                <p>
                <Link className="p-a" to="/">
                Мои заказы
              </Link>
                </p>
                <p>
                <Link className="p-a" to="/">
                Мои кредитные квитанции
              </Link>
                </p>
                <p>
                <Link className="p-a" to="/">
                Мои адреса
              </Link>
                </p>
                <p>
                <Link className="p-a" to="/">
                Моя личная информация
              </Link>
            </p>
            <p>
            <Link className="p-a" to="/">
                Выйти
              </Link>
            </p>
              </Typography>
            </AccordionDetails>
          </Accordion>
        </div>
      </div>
    );
};

export default Footer;