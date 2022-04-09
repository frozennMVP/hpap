import React from 'react';
import notFoundPage from '../../images/notFoundPage.png'
import './Undefined.css'
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom'
import { HOME_ROUTE } from '../../utils/Consts';

const Undefined = () => {
    return (
        <div className='Undefined'>
            <img src={notFoundPage} alt="" className='undefinedPageImg'/>
            <div>
                <h3 className='pageIsNotFound'>СТРАНИЦА НЕДОСТУПНА</h3>
                <h5 className='pageIsNotFoundCause'>Извините, запрошеной вами страницы не существует.</h5>
                <h5 className='pageIsNotFoundCause'>Возможно она была удалена или перенесена на другой адрес.</h5>
                <Button className='goToHomePage' style={{
                    borderRadius: "20px",
                    margin: "20px 0",
                    padding: "8px 20px"
                }} ><Link className='goToHomeWithLink' to={HOME_ROUTE}> На главную</Link></Button>
            </div>
        </div>
    );
};

export default Undefined;