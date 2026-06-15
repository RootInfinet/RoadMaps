const express = require('express')
const { PrismaClient } = require('@prisma/client');
const cookieParser = require('cookie-parser');
const cors = require('cors')
require('dotenv').config()


const prisma = new PrismaClient();
const app = express()
app.use(express.json())
app.use(cors())
app.use(cookieParser())

app.get('/', (req,res) => {
    res.send("backend is running")
})

app.listen(process.env.PORT, () => {
    console.log(`Server is running on port ${process.env.PORT}`);
})