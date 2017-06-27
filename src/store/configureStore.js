import * as userActions from "../actions/userActions";
import axios from 'axios';
import {createStore, applyMiddleware} from 'redux';
import rootReducer from "../reducers/rootReducer";
import thunk from 'redux-thunk';
import reduxImmutableStateInvariant from 'redux-immutable-state-invariant';

export default function configureStore(initialState) {
    if (userActions.isLoggedIn()){
        axios.defaults.headers.common['Authorization'] = userActions.getToken();
    }

    return createStore(
        rootReducer,
        initialState,
        applyMiddleware(thunk, reduxImmutableStateInvariant())
    );
}