const { graphql, buildSchema } = require('graphql');

const schema = buildSchema(`
  type Query {
    hello: String
  }
`);

const query = '{ hello }';

const root = {
  hello: () => 'Hello world!',
};

graphql(schema, query, root).then(response => {
  console.log({ response });
});
