import express from 'express';

const app = express();
const PORT = 3003;
const contacts = [];

app.use(express.static('public'));
app.use(express.urlencoded({extended: true}));
app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    res.render('home');
});

app.get('/contact', (req, res) => {
    res.render('contact');
});

app.post('/confirmation', (req, res) => {
    
    //crate a JSON object to store the order data
    const contact = {
        fname: req.body.fname,
        lname: req.body.lname,
        job: req.body.job,
        company: req.body.company,
        linkedin: req.body.linkedin,
        email: req.body.email,
        meet: req.body.meet,
        other: req.body.other,
        message: req.body.message,
        emailList: req.body.emailList,
        type: req.body.type,
        timestamp: new Date()
    };

    //Add order object to orders
    contacts.push(contact);

    //res.send(orders)
    res.render('confirmation');
});

app.get('/admin', (req, res) => {
    res.render('admin', {contacts});
});


app.listen(PORT, () =>{
    console.log(`Server started at http://localhost:${PORT}`)
})