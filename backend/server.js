import express from 'express';
import data from './data.js';
// this creates an object to use express
const app = express();
// this is what gets the data from back end when user goes to this addresss
// this uses express get with the request and response parameters
app.get('/api/products',(req, res)=> {
    res.send(data.products);
});
//this sets a port to listen if it has a port and if not sets the port to be 5000
const port = process.env.PORT || 5000;
app.listen(port, () =>{
    console.log(`serve at http://localhost:${port}`);
});
