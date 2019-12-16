import React from 'react';
import App from 'next/app';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import withRedux from 'next-redux-wrapper';
import 'antd/dist/antd.css';
import "bootstrap/dist/css/bootstrap.css";


const reducer = (state = { foo: '' }, action) => {
    switch (action.type) {
        case 'FOO':
            return { ...state, foo: action.payload };
        default:
            return state
    }
};

/**
* @param {object} initialState
* @param {boolean} options.isServer indicates whether it is a server side or client side
* @param {Request} options.req NodeJS Request object (not set when client applies initialState from server)
* @param {Request} options.res NodeJS Request object (not set when client applies initialState from server)
* @param {boolean} options.debug User-defined debug mode param
* @param {string} options.storeKey This key will be used to preserve store in global namespace for safe HMR 
*/
const makeStore = (initialState, options) => {
    return createStore(reducer, initialState);
};

class TutorHuntApp extends App {
    render() {
        const { Component, pageProps, store } = this.props;
        return <Provider store={store}>
            <Component {...pageProps} />
        </Provider>;
    }
}

export default withRedux(makeStore)(TutorHuntApp);