//importing modules for creating api
let express = require("express")
let fileSystem = require("fs")
let app = express()
let bodyParser = require("body-parser")

app.use(bodyParser.urlencoded({extended:true}))

//creating a url path
app.get("/", function(req, res){
    res.send("Hello this is my first express application")
})

app.get("/about", function(req, res){
    res.send("This is my about page for m express app")
})

//req = request
//params = parameters

app.get("/user/:userid/books/:bookid", function(req, res){
    res.send(req.params)
    console.log(req)
    console.log(req.params)
})

app.get('/GetStudents',function (req,res)
{ studentdata={}
    fileSystem.readFile(__dirname + "/" + "Student.json", 'utf8',

    function (err, data){ 
        console.log(err)
        console.log( data );
    

        res.json({ 'status':true, 
            'Status_Code':200,
            'requested at': req.localtime, 
            'requrl':req.url,
            'request Method':req.method, 
            'studentdata':JSON.parse(data)});
    });
})

app.get('/GetStudentid/:id',(req,res) => {
    studentdata={}

    fileSystem.readFile(__dirname + "/" + "Student.json", 'utf8',
    function (err, data) {

        let students = JSON.parse(data)
        let student = students["Student"+req.params.id]
        
        console.log("student",student)

    if (student) {
    res.json(student)
    }

    else
        res.json({ 
            'status':true,
            'Status_Code':200,
            'requested at': req.localtime, 
            'requrl':req.url,
            'request Method':req.method, 
            'studentdata':JSON.parse(data)});
    });
    })

app.get('/studentinfo',function(req,res)
{

res.sendFile('index.html', { root: __dirname });
})

app.post('/submit-data', function (req, res) {
    let name = req.body.firstName + ' ' + req.body.lastName+' ';

    let Age= req.body.myAge+ ' Gender: ' + req.body.gender+''

    Qual= ' Qualification'+ req.body.Qual
    console.log(req.body.Qual)
    res.send({
    status: true,
    message: 'form Details', data: {
    name: name, age:Age, Qualification:Qual,
    }
    });
});

//listening on the port/server
app.listen (5500, function(){
    console.log("Server running on port 5500")
})