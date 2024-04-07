const express = require('express');
const { graphqlHTTP } = require('express-graphql');
const { buildSchema } = require('graphql');

// GraphQL schema言語を使用してスキーマを作成
const schema = buildSchema(`
  type Query {
    hello: String
  }
`);

// リゾルバ関数とは特定のフィールドデータを返す関数であり、実際のデータ操作を行う部分
const root = {
  hello: () => {
    return 'Hello world!';
  },
};

const app = express();
app.use('/graphql', graphqlHTTP({
  schema: schema,
  rootValue: root,
  graphiql: true
}));
app.listen(4000);
console.log('GraphQL server is running on http://localhost:4000/graphql')
