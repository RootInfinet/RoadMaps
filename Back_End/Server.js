const express = require('express')
const { PrismaClient } = require('@prisma/client');
const helmet = require('helmet');
const authRoutes = require('./src/Router/AuthRoute');
const cookieParser = require('cookie-parser');
const cors = require('cors')
require('dotenv').config()


const prisma = new PrismaClient();
const app = express()
app.use(express.json())
app.use(cookieParser())
app.use(helmet());

app.use(cors({
  origin: 'http://localhost:5173', 
  credentials: true 
}))

app.use('/', authRoutes);

app.listen(process.env.PORT, () => {
    console.log(`Server is running on port ${process.env.PORT}`);
})