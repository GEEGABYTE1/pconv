const fs = require('fs')

class jsconv {

    constructor(filepath) {
        if (typeof filepath !== "String") {
            throw new Error('Invalid Filepath')
        } else {
            this.filepath = filepath
        }

    }

    
}