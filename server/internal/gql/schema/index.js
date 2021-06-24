const { gql } = require('apollo-server-express');
// Use schemas imported from external files
const fs = require('fs');
// Path module
const path = require('path');

module.exports = typeDefs = gql`
  ${fs.readFileSync(path.join(__dirname, '../../../graphql/service.graphqls'), 'utf8')}
`;
