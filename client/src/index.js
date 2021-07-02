import React from 'react';
import ReactDOM from 'react-dom';
import './sass/Shared/index.scss';
import App from './App.jsx';
import reportWebVitals from './reportWebVitals';

// Store
import { StoreProvider } from '@/store/index';

// Apollo GraphQL
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  HttpLink,
  split,
} from "@apollo/client";
import { getMainDefinition } from '@apollo/client/utilities';
// Websocket for GraphQL Subscription
import { WebSocketLink } from '@apollo/client/link/ws';

// Check for Production Mode
const PRODUCTION = process.env.NODE_ENV;

// Split Links
// HTTP Requests Link
const httpLink = new HttpLink({
  uri: PRODUCTION === 'production'
        ? 'https://localhost:5000/graphql'
        : 'http://localhost:5000/graphql',
});
// Websocket Link
const wsLink = new WebSocketLink({
  uri: PRODUCTION === 'production'
        ? 'wss://localhost:5000/graphql'
        : 'ws://localhost:5000/graphql',
  options: {
    reconnect: true,
  },
});

// Use Different Links Conditionally
const splitLink = split(
  ({ query }) => {
    const definition = getMainDefinition(query);
    return (
      definition.kind === 'OperationDefinition' &&
      definition.operation === 'subscription'
    );
  },
  wsLink,
  httpLink,
);

// Apollo Client which talks to GraphQL Server
const client = new ApolloClient({
  connectToDevTools: true,
  link: splitLink,
  cache: new InMemoryCache(),
});

ReactDOM.render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <StoreProvider>
        <App />
      </StoreProvider>
    </ApolloProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
