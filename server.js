const express = require('express');
const app = express();


require('dotenv').config();

// setting up config
// dotenv.config({path:'backend/config/config.env'});

app.listen(process.env.PORT,() => {
    console.log(`sserver is running on port ${process.env.PORT} in ${process.env.NODE_ENV} mode.`);
})