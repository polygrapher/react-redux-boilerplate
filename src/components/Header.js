import React from 'react';
import {Link} from 'react-router-dom'
import {connect} from 'react-redux';
import {startLogout} from '../actions/auth';
import {bindActionCreators} from 'redux';

export const Header = ({startLogout}) => (
    <header className="header">
        <div className="content-container">
            <div className="header__content">
                <Link to="/dashboard" className="header__title">
                    <h1>Boilerplate React App</h1>
                </Link>
                <button onClick={startLogout} className="button button--link">Log out</button>
            </div>
        </div>
    </header>
);

const mapDispatchToProps = (dispatch) => bindActionCreators({startLogout}, dispatch);

export default connect(undefined, mapDispatchToProps)(Header);