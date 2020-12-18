// Dependencies

const express = require("express");
const fs = require("fs");
const path = require("path");
const db = require("./db/db.json");
const app = express();
const PORT = process.env.PORT || 3001;
// Express parsing
app.use(express.static(path.join(__dirname,"public")));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());


// variables
var parsedData;

// Function that generates a unique ID as a timestamp
function generateID() {
  id = new Date().getTime()
  console.log(id)
  return id
}



// Routes
// GET route to display notes
app.get("/api/notes", function( req, res ){
    fs.readFile(path.join(__dirname,"db","db.json"), function(error, data){
        if(error) {
            throw new error
        } else { 
        parsedData = JSON.parse( data );
        res.send( parsedData );
        }
    });
})
// POST `route to add a note to the database
app.post( "/api/notes", function(req, res) {
    fs.readFile(path.join(__dirname, "db", "db.json" ), function(error, data){
      if(error) {
          throw new error
      }
      else {
        parsedArray =  JSON.parse( data )
        var note = req.body;
        note["id"] = generateID();
        parsedArray.push( note );
        jsonArray = JSON.stringify( parsedArray);
        fs.writeFile( path.join(__dirname, "db", "db.json" ), jsonArray, (err) => {
          if (err) throw err;
          console.log( "Data written to file" );
          res.sendStatus(200);
      });
      }
  });
})
// DELETE route to delete the specific note by its ID
app.delete("/api/notes/:id", function(req, res) {
  var id = Number(req.params.id);
  console.log(id);
  var updatedArray = [];
  fs.readFile(path.join(__dirname, "db", "db.json" ), function(error, data){
    if(error) {
        throw new error
    }
    else {
      
      parsedArray =  JSON.parse( data )
      for(var i=0; i<parsedArray.length; i++) {
        if(parsedArray[i].id!==id) {
          updatedArray.push(parsedArray[i]);
          console.log(parsedArray[i].id)
        }
      }

      jsonUpdatedArray = JSON.stringify( updatedArray);
      fs.writeFile( path.join(__dirname, "db", "db.json" ), jsonUpdatedArray, (err) => {
        if (err) throw err;
        console.log( "Note deleted" );
        res.sendStatus(200);
    });
    }
});
})


// GET route to display notes.html` file.
app.get("/notes", function( req, res ){
    res.sendFile(path.join(__dirname, "public", "notes.html"))
})
// GET route to display`index.html` file
app.get("*", function( req, res ){
    res.sendFile(path.join(__dirname, "public", "index.html"))
})

// Listening to the port
app.listen( PORT );