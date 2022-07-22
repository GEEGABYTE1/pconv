const fs = require('fs')

class jsconv {

    constructor(filepath) {
        if (typeof filepath !== "string") {
            throw new Error('Invalid Filepath')
        } else {
            this.filepath = filepath
        }

    }

    listjs() {
        var data = fs.readFile(this.filepath, 'utf-8', (err, jsonString) => {
            console.log(jsonString)       // log data for test purposes
        })
    }
}


let test_jsconv = new jsconv('test.json')
test_jsconv.listjs()