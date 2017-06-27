import React from 'react';
import {Route, Redirect} from 'react-router-dom';
import * as userActions from "../../actions/userActions";
import BasePage from "../../pages/BasePage";


const CustomRoute = ({component, path, exact, isPrivate}) => (
    <Route path={path} exact={exact} render={props => (
        isPrivate ? (userActions.isLoggedIn() ? (<BasePage children={component}/>) : (<Redirect to={{pathname: '/login', state: { from: props.location }}}/>)) : (<BasePage children={component}/>)
    )}/>
);

export default CustomRoute;