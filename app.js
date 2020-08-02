const fs = require('fs')
const path = require('path')
const writeNote = require('./app_modules/write-note.js')
const listNotes = require('./app_modules/list-notes.js');
const prompt = require('prompt-sync')({sigint: true});

console.log('#####################################')
console.log('WEJAPA NOTETAKING APP')
console.log('#####################################')

console.log('What would you like to do?', '\n')

console.log('1. Take A New Note')
console.log('2. Manage Existing Note')

const firstOption = prompt('Enter a corresponding number to choose preffered option:', '\n')

switch (firstOption) {
    case '1':
        let Title = prompt("Enter note Title:", '\n')
        let Note = prompt("Write your Note. Press Enter To Save:", '\n')

        console.log('CHOOSE A TOPIC FOR YOUR NOTE')
        console.log('1. Personal')
        console.log('2. Work')
        console.log('3. Travel')

        let UserTopic = prompt("");
        let Topic;
        
        switch (UserTopic) {
            case '1':
                Topic = 'personal'
                break;
            case '2':
                Topic = 'Work'
                break;
            case '3':
                Topic = 'Travel'
                break;
        
            default:
                Topic = '';
                break;
        }

        writeNote(Topic, Title, Note)
        break;


    case '2':
        listNotes.notesRendered()

        setTimeout(() => {
            let ManageOption = prompt('\n Select a file to read: ')

//            console.log(listNotes.fileTags)
            const NoteKeys = Object.keys(listNotes.fileTags)
            
            if(NoteKeys.includes(ManageOption)){
                let Topic = listNotes.fileTags[ManageOption][0]
                let FileName = listNotes.fileTags[ManageOption][1]
                fs.readFile(path.join(__dirname, 'directories', Topic, FileName), 'utf8', function(err, data){
                  console.log(data)
                })
            }

        }, 2000);
        break;

    default:
        break;
}


/*fs.unlink('some-note.txt', function(err){
    console.log('deleted;')
})*/

/*while (!foundCorrectNumber) {
  
}*/