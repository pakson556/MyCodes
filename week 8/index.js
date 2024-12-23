mongoose = require('mongoose');
//app = express();

const MONGO_URI = 'mongodb://localhost:27017/Week81';
mongoose.connect(MONGO_URI, {useUnifiedTopology: true,useNewUrlParser: true})
; const db = mongoose.connection;
db.on('error', function(err){
    console.log("Error occured during connection"+err)}
);

db.once('connected', function() {
    console.log(`Connected to ${MONGO_URI}`);
});

// creating the scheme
const PersonScheme = new mongoose.Schema({ name: {
    type: String, required: true
},
age: Number, 
Gender:String, 
Salary:Number
});

// creating model named as modelname with collection named as personCollection
const person_doc = mongoose.model('modelname', PersonScheme,'personCollection');

// creating a single document
const doc1 = new person_doc({ 
    name: 'Jacky',age:362,Gender:"Male",Salary:3456 }
);

// adding one document in the collection
doc1
.save()
.then((doc1) => {
    console.log("New Article Has been Added Into Your DataBase.",doc1);
})

.catch((err) => {
    console.error(err);
});


manypersons=[
    { name: 'Simon',age:42,Gender:"Male",Salary:3456 },
    { name: 'Neesha',age:23,Gender:"Female",Salary:1000 },
    { name: 'Mary',age:27,Gender:"Female",Salary:5402 },
    { name: 'Mike',age:40,Gender:"Male",Salary:4519 }
]

person_doc.insertMany(manypersons).then(function(){
    console.log("Data inserted") // Success
}).catch(function(error){
    console.log(error) // Failure
});


let givenage = 20

//finding all the documents in the collection
person_doc.find ({Gender:"Female", age:{$gte:givenage}})    //find all users
.sort({Salary: 1})      //sort ascending by firstName
.select('name Salary age')      //Name and Salary only 
.limit (10)                      //limit to 3 items
.exec()                     //execute the query
.then (docs => {
    console.log('Showing age greater than', givenage, docs)
    docs.forEach(function (Doc) {
        console.log(Doc.age,Doc.name, Doc.Salary);
    })
})


person_doc
.deleteMany ({age: {$gte:25}})
.exec()
.then (docs => {
    console.log ("delete documents are: ", docs)
})
.catch (function(err){
    console.log (err);
})

person_doc.updateMany({ Gender: "Female" },{Salary: 5555})
.exec()
.then(docs=>{
    console.log("update") 
    console.log(docs); // Success
})
.catch(function(error){ 
    console.log(error); // Failure
});