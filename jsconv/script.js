const fs = require('fs')

class jsconv {

    constructor(filepath) {
        if (typeof filepath !== "string") {
            throw new Error('Invalid Filepath')
        } else {
            this.filepath = filepath
        }

    }

    writejs(key, value) {
        const input = {key:value}
        const data = JSON.stringify(input)
        try {
            fs.writeFileSync(this.filepath, data)
            console.log('JSON data is saved')
 
        } catch (err) {
            console.log(err)
        }
        
    }
}



test = new jsconv('./test.json')
test.writejs('key2', 'value2')