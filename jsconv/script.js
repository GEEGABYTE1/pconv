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
        
        const updated_object = this.updateJson(key, value)
        let data = JSON.stringify(updated_object)
        try {
            fs.writeFileSync(this.filepath, data)
            console.log('JSON data is saved')
    
        } catch (err) {
            return err
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

    updateJson(key, value) {
        let dictionary = this.readjs()
        const dictionary_obj = JSON.parse(dictionary)
        
        dictionary_obj[key] = value
        return dictionary_obj
    }
    

    



}



test = new jsconv('./test.json')
test.writejs('key4', 'works after 3?')


/*
var test_result = test.readjs()
console.log(test_result) 
test.updateJson()*/