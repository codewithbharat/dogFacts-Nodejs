const express = require('express');
const dotenv = require('dotenv');
const morgan = require('morgan');
const connectDB = require('./config/db');

const dogFacts = require('./routes/dogFacts');

// Load env variables
dotenv.config({ path: './config/config.env' });

// Connect to database
connectDB();

const app = express();

// Dev logging middleware
if(process.env.NODE_ENV === 'development'){
    app.use(morgan('dev'));
  }

// Route Files
app.use('/api/v1', dogFacts);


app.listen(process.env.PORT, () => {
    console.log(`Server is in ${process.env.NODE_ENV} running on PORT: ${process.env.PORT}`);
})