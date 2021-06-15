import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {ApolloProvider} from "@apollo/client";
import apolloClient from '@graphql/apolloClient'
import {Global} from '@emotion/react'
import {global} from "@styles/global-style"

ReactDOM.render(
    <React.StrictMode>
        <ApolloProvider client={apolloClient}>
            <Global styles={global}/>
            <App/>
        </ApolloProvider>
    </React.StrictMode>,
    document.getElementById('root')
);

if('serviceWorker' in navigator){
    window.addEventListener('load', () => {
    navigator.serviceWorker.register('/service-worker.js')
        .then(registration => {
            console.log('SW registered: ', registration);
        }).catch(registrationError => {
            console.log('SW registration failed: ', registrationError);
        });
    });
}