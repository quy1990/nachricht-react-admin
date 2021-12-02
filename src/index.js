import React from 'react';
import ReactDOM from 'react-dom';
import reportWebVitals from './reportWebVitals'

import {createStore} from 'redux'

import {Provider} from 'react-redux'

import rootReducer from './redux/reducers'

import './assets/boxicons-2.0.7/css/boxicons.min.css'
import './assets/css/grid.css'
import './assets/css/theme.css'
import './assets/css/index.css'

import Layout from './components/layout/Layout'
import LoginPage from "./pages/LoginPage";

const store = createStore(
    rootReducer
)

document.title = 'Admin panel'

ReactDOM.render(
    <Provider store={store}>
        <React.StrictMode>
            {
                localStorage.getItem('access_token') ? <Layout/> : <LoginPage/>
            }
        </React.StrictMode>
    </Provider>,
    document.getElementById('root')
);
reportWebVitals();
