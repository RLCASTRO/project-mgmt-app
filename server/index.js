const express = require('express'); //imports express
require('dotenv').config(); //imports the .env config file
const { graphqlHTTP } = require('express-graphql'); //creates the graphql HTTP 
const schema = require('./schema/schema'); //imports the .schema config file
const port = process.env.PORT || 5000; //gets the port from the .env file or 5000

const app = express(); //cretes an express application

app.use('/graphql', graphqlHTTP({
    
}))
app.listen(port, console.log(`Server running on port ${port}`)); // listens to a port
