import express from 'express';
import mysql2 from 'mysql2';
import dotenv from 'dotenv';


dotenv.config();
console.log(process.env.DB_HOST);

const app = express();
const PORT = 3003;
//const contacts = [];

app.use(express.static('public'));
app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: true }));

const pool = mysql2.createPool({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    port: process.env.DB_PORT
}).promise();

app.get('/db-test', async(req, res) => {
    try{
        const contacts = await pool.query('SELECT * FROM contacts');
        res.send(contacts[0]);
    }catch(err){
        console.error("Database error: ", err);
    }
});

app.get('/', (req, res) => {
    res.render('home');
});

app.get('/contact', (req, res) => {
    res.render('contact');
});

app.post('/confirmation', async(req, res) => {
    
    //crate a JSON object to store the order data
    const contact = req.body;

    const params =[
        req.body.fname,
        req.body.lname,
        req.body.job,
        req.body.company,
        req.body.linkedin,
        req.body.email,
        req.body.meet,
        req.body.other,
        req.body.message,
        req.body.emailList,
        req.body.type
    ]

    const sql = 'INSERT INTO contacts (fname, lname, job, company, linkedin, email, meet, other, message, emailList, type) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)'
    const result = await pool.execute(sql, params);

    res.render('confirmation', {contact});
});

app.get('/admin', async(req, res) => {
    const contacts = await pool.query('SELECT * FROM contacts ORDER BY timestamp DESC');
    res.render('admin', {contacts:contacts[0]});
});


app.listen(PORT, () =>{
    console.log(`Server started at http://localhost:${PORT}`)
})