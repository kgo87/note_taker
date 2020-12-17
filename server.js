// Dependencies
// ===========================================================
var express = require("express");
var path = require("path");
var fs = require("fs");
var db = require("./db/db.json")

var app = express();
var PORT = process.env.PORT || 3000;
app.use(express.static(path.join(__dirname,"public")));

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Data
var notes = []


// Routes
// ===========================================================

app.get('/api/notes' ,function (req , res) {
  console.log(db)
  return res.json(db);
  
});

// app.get("/api/notes", function(req, res) {
//     fs.readFile(path.join(__dirname,"db","db.json"), function(error, data){
//         if(error) {
//             throw new error
//         }
//         else {
//             res.send(data)
//         }
//     })
// });
// fs to red -> then parse with JSON.parse(). Send the parsed data with res.json()


// Create New Note 
app.post("/api/notes", function(req, res) {

    var note = req.body;
    // read file using fs module and parse to array with JSON.parse -> push req.body to array list 
    // Json.stringify array list to JSON file
    // save the contents back to db.json file with FS module
    
    console.log(note);
    console.log(notes)
    parsedNote = JSON.stringify(note);
    db.push(parsedNote);
    console.log(db)

  
    notes.push(note);
    res.json(note);
  });

  app.delete('/api/notes/:id' ,function (req , res) {
    // use fs to read the file and parse the data
    // use array.splice and find the id using for loop 
    // req.params.id
    // Option B: use filter method to find the index and remove element with that index
    // return any type of success method (retrun true/false) 

    return res.json(db);
    
  });

// [{"title":"Test Title","text":"Test text"}]


app.get("/", function(req, res) {
  res.sendFile(path.join(__dirname,"public", "index.html"));
});



app.get("/notes", function(req, res) {
    res.sendFile(path.join(__dirname,"public", "notes.html"))
});



// Listener
// ===========================================================
app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});

console.log(notes)