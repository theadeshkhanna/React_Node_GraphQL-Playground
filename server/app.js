const express = require("express");
const { graphqlHTTP } = require("express-graphql");
const mongoose = require("mongoose");
const schema = require("./schema/schema");
const cors = require("cors");

const app = express();

app.use(cors());

mongoose.connect("mongodb://localhost:27017/graphQl_Playground");
mongoose.connection.once("open", () => {
    console.log("connected to DB");
});

app.use("/graphql", graphqlHTTP({
    schema,
    graphiql: true
}));

app.listen(4000, () => {
    console.log("listening requests on port 4000");
});