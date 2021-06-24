require('dotenv').config();

const cors = require('cors');

const express = require('express');

// GraphQL
const { ApolloServer } = require('apollo-server-express');
const typeDefs = require('./internal/gql/schema/index');
const resolvers = require('./internal/gql/resolvers/server.resolvers');

const path = require('path');
const cookieParser = require('cookie-parser');
const fallback = require('express-history-api-fallback');
const compression = require('compression');

// GraphQL Schema & Routing Component
// const schemaRouter = require('./routes/graph-model');

// Routing Components
const loginRouter = require('./routes/login');
const callbackRouter = require('./routes/callback');

const root = path.join(__dirname, './dist');
const port = process.env.PORT || 5000;

const app = express();

// HTTP Server
// const http = require('http');
// const server = http.createServer(app);

// GraphQL Server
const server = new ApolloServer({ typeDefs, resolvers  });
server.applyMiddleware({ app });

app.listen(port, () => {
  console.log(`Starting the server at http://localhost:${port}\n
  GraphQL Server ready at http://localhost:${port}${server.graphqlPath}`);
});
app.use(express.json({ limit: '1mb' }));

app.use(cookieParser());
app.use(compression());
app.use(cors());

// Use Routes
loginRouter(app);
callbackRouter(app);
// schemaRouter(app);

// check if the app is running in production
if (process.env.NODE_ENV === 'production') {

  // use the static files
  app.use(express.static(root));

// otherwise
} else {

  // serve as an API
  app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    next();
  });
}

// fallback
app.use(fallback('index.html', { root }));
