var savedNotes = require("../db/db");
const fs = require('fs');

module.exports = function(app) {

    //adding,saving, and deleting notes/assign Id
    
app.post("/api/notes", function(req, res)
    var newNote = req.body;

    savedNotes.push(newNote);

    app.get("/api/notes", function(req, res) {
        res.json(savedNotes);
    });

    newNote.id = savedNotes.length.toString();

    fs.writeFile("./db/db.json", JSON.stringify(savedNotes),(err) => {
        if (err){
            console.log(err);
            res.sendStatus(404);
        }
        else {
            console.log ("Success!");
            res.sendStatus(200);
        }
    })

    app.delete("/api/notes/:id", function(req, res) {
        var id = req.params.id;

        savedNotes.splice(deleteNotes, 1);

        var atID = (Element) => Element.id === id;
        var deleteNotes = savedNotes.findIndex(atID);
    })




    )
}

