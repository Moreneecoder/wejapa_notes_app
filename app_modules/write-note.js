const fs = require('fs');
const path = require('path');

module.exports = function(Topic = '', Title, Note){
    let userpath = path.join(__dirname, '../directories', Topic, `${Title}.txt`)

    fs.writeFile(userpath, Note, function(err){        
        if(err){
            console.log(err)
        }
        else{
            console.log("note saved!");
        }
    })
}
