// server.js
// console.log(`Your port is ${process.env.PORT}`); // undefined
// const dotenv = require('dotenv');
// dotenv.config();
// console.log(`Your port is ${process.env.PORT}`); // 8626

// server.js
const { port } = require('./config');
//or
// const { endpoint, masterKey, port } = require(‘./config’);
console.log(`Your port is ${port}`); // 8626
