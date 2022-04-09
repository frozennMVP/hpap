import React from 'react';
import NavbarImg from '../../images/NavbarImg.jpg'
import {Form, FormControl, Button} from 'react-bootstrap'
import './Navbar.css'
import SearchIcon from '@mui/icons-material/Search';
import { Link } from 'react-router-dom';
import { ALLITEMS_ROUTE, ANOTHER_ROUTE, INSTRUMENTS_ROUTE, INTERIOR_ROUTE, SHOW_ROUTE } from '../../utils/Consts'



const Navbar = () => {
    

    
    return (
      <div className="Navbar">




        {/* <div>

          <div className="dropdown" title='СМАЗОЧНЫЕ МАТЕРИАЛЫ'>
            <Link to={SHOW_ROUTE} className="dropbtn">СМАЗОЧНЫЕ МАТЕРИАЛЫ</Link>
          </div>
          <div className="dropdown" title='ИНТЕРЬЕР'>
            <Link className="dropbtn" to={INTERIOR_ROUTE}>ИНТЕРЬЕР</Link>
          </div>
          <div className="dropdown" title='ИНСТРУМЕНТЫ'>
            <Link to={INSTRUMENTS_ROUTE} className="dropbtn">ИНСТРУМЕНТЫ</Link>
          </div>
          <div className="dropdown" title='ОСТАЛЬНОЕ'>
            <Link to={ANOTHER_ROUTE} className="dropbtn">ДРУГОЕ</Link>
          </div>
        </div> */}
      </div>
    );
};

export default Navbar;