import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

// Mount function to start the app
const mount = (el) => {
    ReactDOM.render(<App />, el);
};

// if we are in development and in isolated mode
// call mount immediately

if (process.env.NODE_ENV === 'development') {
    const devRoot = document.querySelector('#_marketing-dev-root');

    if (devRoot) {
        mount(devRoot);
    }
}

// We are runnin through the container
// and we should expect the mount function
export { mount }