const express = require('express');

const dotenv = require('dotenv')
dotenv.config()

const PORT = process.env.PORT

const app = express();
const path = require('path');

const bodyParser = require('body-parser');
const cors = require('cors');

const sequelize = require('./util/database');

const User = require('./models/users');

const userRoutes = require('./routes/user');
const pageRoutes = require('./routes/page')

app.use(pageRoutes);
app.use(cors());
app.use(bodyParser.json({extended: false}));
app.use(express.json());

app.use('/user', userRoutes);

app.use((req, res) =>{
    res.sendFile(path.join(__dirname,`${req.url}`))
})

sequelize.sync()
.then(result => {
    console.log("table created");
    app.listen(PORT);
})
.catch(err => console.log(err));