const fs = require('fs')

class jsconv {

    constructor(filepath) {
        if (typeof filepath !== 'String') {
            throw new Error('Invalid Filepath Type')
        } else {
            this.filepath = filepath + '.json'

        }        

    }

    readjs() {
        try {
            fs.readFile(this.filepath)
        } catch (err) {
            return err
        }
    }

    loadjs() {
        
    }
}