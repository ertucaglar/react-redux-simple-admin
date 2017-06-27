import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import './index.css';
import injectTapEventPlugin from 'react-tap-event-plugin';
import configureStore from "./store/configureStore";
import {Provider} from "react-redux";
import 'toastr/build/toastr.min.css';
import 'flexboxgrid/css/flexboxgrid.css';

injectTapEventPlugin();

const store = configureStore();

ReactDOM.render(
    <Provider store={store}>
        <App/>
    </Provider>,
    document.getElementById('root')
);
registerServiceWorker();
