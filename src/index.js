/* It important to skip this line when make deploy tyo production */
//import 'react-devtools';

import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import thunk from 'redux-thunk';
import promise from 'redux-promise-middleware';
import { Provider } from 'react-redux';
import { rootReducer } from './store/reducer';
import * as serviceWorker from './serviceWorker';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import { createStore, applyMiddleware, compose } from 'redux'

const theme = createMuiTheme({
    palette: {
        primary: {
            main: '#008080',
        },
        secondary: {
            main: '#f50057',
        },
    },
});

const store = createStore (
    rootReducer,
    {},
    compose(
        applyMiddleware(promise, thunk),
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    )
);


ReactDOM.render(
    <Provider store={store}>
        <ThemeProvider theme={theme}>
            <App />
        </ThemeProvider>
    </Provider>,
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
