const fs = require('fs');
const path = require('path')
const prompt = require('prompt-sync')({sigint: true})

module.exports = {    

    fileTags: {

    },

    notesRendered(){
        let _this = this;
        const directory = path.join(__dirname, '../directories');
        fs.readdir(directory, function (err, files) {                
    
            if (err) {
                return console.log(err);
            }
    
            let num = 0;
        
            files.forEach(function (file) {
                //check if file is directory
                const innerDirectory = path.join(__dirname, '../directories', file);
                fs.stat(innerDirectory, function (err, stats) {
    
                    if (err) {
                        return console.log(err);
                    
                    }
    
                    if (stats.isDirectory()) {                    
    
                        fs.readdir(innerDirectory, function (err, innerFiles) {
    
                            if (err) {
                                return console.log(err);
                            }
    
                            innerFiles.forEach(function (innerFile) {
                                console.log(`${++num}. ${innerFile} || ${file}`);

                                _this.fileTags[num] = [file, innerFile]
                            });
                        });
                    }
    
                    if (stats.isFile()) {
                        console.log(`${++num}. ${file} || uncategorized`);

                        _this.fileTags[num] = ['', file]
                    }
    
                });
                
    
            });
                  
                
        })
        
    
    }


}

