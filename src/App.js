import React, {Component} from 'react';
import './App.css';
import createHistory from 'history/createBrowserHistory';
import {MuiThemeProvider} from "material-ui";
import defaultTheme from "./themes/defaultTheme";
import {Route, Router} from "react-router";
import CustomRoute from "./components/route/CustomRoute";
import LoginPage from "./pages/LoginPage";
import DashboardPage from "./pages/DashboardPage";

const history = createHistory();

class App extends Component {
    render() {
        return (
            <MuiThemeProvider muiTheme={defaultTheme}>
                <div>
                    <Router history={history}>
                        <div>
                            <CustomRoute path='/' exact={true} isPrivate={true} component={<DashboardPage/>}/>
                            <Route path="/login" exact={true} component={LoginPage}/>
                        </div>
                    </Router>
                </div>
            </MuiThemeProvider>
        );
    }
}

export default App;
