import React from 'react';
import { connect } from 'react-redux';
import '../client/assets/styles/index.scss';

function Index(props) {
    return <h1 className="text-center">
            Welcome to Tutor Hunt
        </h1>;
}

Index.getInitialProps = async ({ store, isServer, pathname, query }) => {
    store.dispatch({ type: 'FOO', payload: 'foo' });
    return { name: 'test' };
}

export default connect(state => state)(Index);