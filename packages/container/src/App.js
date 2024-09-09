import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import MarketingApp from './components/MarketingApp';
import Header from './components/Header';

export default () => {
    return (
        <BrowserRouter>
            <div>
                <Header />
                <h3>Welcome to Microfrontend</h3>
                <MarketingApp />
            </div>
        </BrowserRouter>
    )
}