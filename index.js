var login = require('./login.js');
var signup= require ('./signup.js');
var server = require('./server.js')
var create=require('./create.js')
var delet=require('./delet.js');          
var view=require('./view.js');
const edit = require('./edit')

var app = server.app();
console.log("index started")
app.post('/signup', (req,res)=> {
      signup.signup(req,res);
});

app.get('/login', (req,res)=>{
    login.login(req,res);
});

app.post('/create',(req,res)=>{
    create.create(req,res);
});

app.get('/view', (req,res)=> {
    view.view(req,res);
});

app.get('/delet',(req,res)=>{
    delet.delet(req,res);
})
app.post('/edit',(req,res)=>{
    edit.edit(req,res);
})