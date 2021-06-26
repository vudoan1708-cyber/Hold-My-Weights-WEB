import React from 'react';
import ReactDOM from 'react-dom';
import './sass/Shared/index.scss';
import App from './App.jsx';
import reportWebVitals from './reportWebVitals';

// Apollo GraphQL
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
} from "@apollo/client";

// Link for HTTP Requests
const client = new ApolloClient({
  connectToDevTools: true,
  uri: 'http://localhost:5000/graphql',
  cache: new InMemoryCache(),
});

ReactDOM.render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
