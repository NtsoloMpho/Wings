const express = require('express');
const mysql = require('mysql')
const cors = require('cors')

const app = express();
app.use(cors())

const db = mysql.createConnection({
    host: "localhost",
    user: 'root',
    password: '123456',
    database: 'wings_cafe_inventory'

})


app.get('/', (re, res)=> {
    return res.json("From backend side");
})

app.get('/users', (re, res)=> {
    const sql = "SELECT * FROM users";
    db.query(sql, (err, data)=> {
        if(err) return res.json(err);
        return res.json(data);
    })
})

app.listen(4321, ()=> {
    console.log("listening");
})