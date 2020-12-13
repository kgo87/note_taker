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
var notes = db
// [{"title":"Test Title","text":"Test text"}]

// Routes
// ===========================================================
app.get("/", function(req, res) {
  res.sendFile(path.join(__dirname,"public", "index.html"));
});

app.get("/notes", function(req, res) {
    res.sendFile(path.join(__dirname,"public", "notes.html"))
});

app.get("/api/notes", function(req, res) {
    fs.readFile(path.join(__dirname,"db","db.json"), function(error, data){
        if(error) {
            throw new error
        }
        else {
            res.send(data)
        }
    })
});

// Create New Note 
app.post("/api/notes", function(req, res) {
    // var newNoteTitle = req.title;
    // var newNoteBody = req.text;
    var note = req.body;
    console.log(note);

  
    notes.push(note);
  
    res.json(note);
  });

// Listener
// ===========================================================
app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});

console.log(notes)