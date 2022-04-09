import {
  HOME_ROUTE, AUTH_ROUTE, REGISTRATION_ROUTE,ANOTHER_ROUTE, SHOW_ROUTE, LOGIN_ROUTE, EXPLORE_ROUTE, ADMIN_ROUTE, ADMINSIGN_ROUTE, ADD_ROUTE, UNDEFINED, BASKET_PAGE, ALLITEMS_ROUTE, INTERIOR_ROUTE, INSTRUMENTS_ROUTE,LUBRICANTS_ROUTE, PROFILE_ROUTE, ADDADRESS_ROUTE, ADRESS_ROUTE, PERSONAL_ROUTE, FEED_ROUTE, MESSAGE_ROUTE,

} from "./Consts";
import Home from "../pages/home/Home";
import Register from '../pages/register/Register'
import Login from "../pages/login/Login";
import Admin from "../pages/admin/Admin";
import AddItems from "../pages/add/AddItems";
import Undefined from "../pages/undefined/Undefined";
import Basket from '../pages/basket/Basket';
import Explore from "../pages/explore/Explore";
import Profile from '../pages/profile/Profile'
import Show from "../pages/show/Show";
import NewAdress from "../pages/profile/newAdress/NewAdress";
import Personal from "../pages/profile/personal/Personal";
import Feedback from '../components/feedback/Feedback'
import Message from "../pages/message/Message";





export const authRoutes = [
    {
        path: HOME_ROUTE,
        element: <Home/>
    },
    {
        path: ADMIN_ROUTE,
        element: <Admin/>
    },
    {
        path: PROFILE_ROUTE,
        element: <Profile/>
    },
    {
        path: FEED_ROUTE,
        element: <Feedback/>
    },
    {
        path: ADDADRESS_ROUTE,
        element: <NewAdress/>
    },
    {
        path: PERSONAL_ROUTE,
        element: <Personal/>
    },
    {
        path: ADD_ROUTE,
        element: <AddItems/>
    },
    {
        path: BASKET_PAGE,
        element: <Basket/>
    },
    {
        path: SHOW_ROUTE,
        element: <Show/>
    },
    {
        path: MESSAGE_ROUTE,
        element: <Message/>
    },
    {
        path: UNDEFINED,
        element: <Undefined/>
    }
]



export const publicRoutes = [
    {
        path: HOME_ROUTE,
        element: <Home/>
    },
    {
        path: LOGIN_ROUTE,
        element: <Login/>
    },

    {
        path: REGISTRATION_ROUTE,
        element: <Register/>
    },
    {
        path: FEED_ROUTE,
        element: <Feedback/>
    },
    {
        path: SHOW_ROUTE,
        element: <Show/>
    },
    {
        path: UNDEFINED,
        element: <Undefined/>
    }
] 