import React from "react";
import { Link } from "react-router-dom";
import { ADDADRESS_ROUTE, ADRESS_ROUTE, HOME_ROUTE, PERSONAL_ROUTE } from "../../utils/Consts";
import HouseIcon from "@mui/icons-material/House";
import "./Profile.css";
import { Button } from "@mui/material";
import BusinessIcon from "@mui/icons-material/Business";
import PersonIcon from "@mui/icons-material/Person";

const Profile = () => {
  return (
    <div>
      <div>
        <Button variant="outlined">
          <Link className="AdminGoBack" to={HOME_ROUTE}>
            <HouseIcon
              style={{
                color: "gray",
                marginRight: "10px",
              }}
            />
            Моя учетная запись
          </Link>
        </Button>
      </div>
      <div className="gmailAccText">
        <h5>МОЯ УЧЕТНАЯ ЗАПИСЬ</h5>
      <p>Добро пожаловать в вашу учетную запись. Здесь вы можете управлять личными данными.</p>
      <hr />
      </div>
      
      
      <div>
        <Link to={ADDADRESS_ROUTE} className='toAddNewAdress'>
          <div className="informationList">
            <BusinessIcon style={{ color: "gray", borderRight: "1px solid" }} />
            <h5 className="informationTitle">МОЙ АДРЕС</h5>
          </div>
        </Link>
        <Link to={PERSONAL_ROUTE} className='toAddNewAdress'>
          <div className="informationList">
            <PersonIcon style={{ color: "gray", borderRight: "1px solid" }} />
            <h5 className="informationTitle">МОЯ ЛИЧНАЯ ИНФОРМАЦИЯ</h5>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Profile;
