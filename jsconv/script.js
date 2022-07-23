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
        let data = JSON.stringify(input, null, 4)
        try {
            fs.writeFileSync(this.filepath, data)
            console.log('JSON data is saved')
 
        } catch (err) {
            console.log(err)
        }
        
    }

    readjs() {
        try{
            const returned_result = fs.readFileSync(this.filepath, 'utf-8')
            return returned_result
            
        } catch (err) {
            return err
        }
    }
    

    



}



test = new jsconv('./test.json')
//test.writejs('key2', 'value2')
/*
var test_result = test.readjs()
console.log(test_result) */