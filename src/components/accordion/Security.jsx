import React from 'react';
import security from '../../images/security.svg'
import securityOne from '../../images/securityOne.svg'
import securityTwo from '../../images/securityTwo.svg'
import './Security.css'



const Security = () => {
    return (
        <div className='Security'>
            <div className='SecurityDisplay'>
                <div className='SecurityType'>
                <img className='SecurityImg' style={{
                    width: "70px"
                }} src={security} alt="" />
                <h4 style={{
                    fontSize: "18px"
                }}>БЕСПЛАТНАЯ ДОСТАВКА И ВОЗВРАТ</h4>
                <h5 style={{
                    fontSize: "15px"
                }}>Бесплатная стандартная доставка для зарегистрированных клиентов и бесплатный возврат.</h5>
            </div>
            <div className='SecurityType'>
                <img style={{
                    width: "70px"
                }} src={securityOne} alt="" />
                <h4 style={{
                    fontSize: "18px"
                }}>БЕЗОПАСНЫЕ ПЛАТЕЖИ</h4>
                <h5 style={{
                    fontSize: "15px"
                }}>Все транзакции полностью безопасны благодаря нашей передовой платежной системе с шифрованием данных.</h5>
            </div>
            <div className='SecurityType'>
                <img style={{
                    width: "70px"
                }} src={securityTwo} alt="" />
                <h4 style={{
                    fontSize: "18px"
                }}>ОБСЛУЖИВАНИЕ КЛИЕНТОВ</h4>
                <h5 style={{
                    fontSize: "15px"
                }}>Свяжитесь с нами по любому поводу – мы полностью к вашим услугам.</h5>
            </div> 
            </div>
           
        </div>
    );
};

export default Security;