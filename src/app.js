import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import 'normalize.css/normalize.css';
import './styles/styles.scss';
import 'react-dates/lib/css/_datepicker.css';
import configureStore from './store/configureStore';
import {login, logout} from './actions/auth';
import AppRouter, {history} from './routers/AppRouter';
import {database, firebase} from './firebase/firebase';
import LoadingPage from './components/Loader';

const store = configureStore();

const jsx = (
    <Provider store={store}>
        <AppRouter />
    </Provider>
);

let hasBeenRendered = false;
const renderApp = () => {
    if (!hasBeenRendered) {
        ReactDOM.render(jsx, document.querySelector('#app'));
        hasBeenRendered = true;
    }
}

ReactDOM.render(<LoadingPage />, document.querySelector('#app'));

firebase.auth().onAuthStateChanged((user) => {
    if (user) {
        store.dispatch(login(user.uid));
        renderApp();
        if (history.location.pathname === '/') {
            history.push('/dashboard');
        }
    } else {
        store.dispatch(logout());
        renderApp();
        history.push('/');
    }
})