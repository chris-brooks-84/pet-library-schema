const { ApolloServer } = require("apollo-server");
const { readFileSync } = require("fs");

const typeDefs = readFileSync(
  "./typeDefs.graphql",
  "UTF-8"
);


const mocks = {
  Int: () => 42,
  String: () => "Jayson Vs Jason",
  Pet: () => ({
    name: "Christopher"
  }
  ),
  Email: () => "what you talking about Willis?",
  Date: () => "good date"
}
//const server = new ApolloServer({ typeDefs, mocks: true });
const server = new ApolloServer({ typeDefs, mocks });

server.listen().then(({ url }) => {
  console.log(`Server running at ${url}`);
});
