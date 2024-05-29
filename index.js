const express = require('express');
const dbConnection = require('./src/database/config');
const cors = require('cors');
const app = express();


app.use(express.json());
app.use(cors());
app.use('/admin',require('./src/routes/adminRouter'))

dbConnection();

app.listen(4000,() => {
    console.log(`Ejecutandose en el puerto 4000`)
})