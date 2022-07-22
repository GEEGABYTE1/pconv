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
            if (err) {
                console.log(err)
                return false
            } else {
                return jsonString
            }
                   // log data for test purposes
        })
    }

    jsonReader(filePath=this.filepath, cb) {
        fs.readFile(filePath, 'utf-8', (err, fileData) => {
            if (err) {
                return cb && cb (err)
            } else {
                try {
                    const object = JSON.parse(fileData)
                    return cb && cb(null, object);
                } catch (err) {
                    return cb && cb(err)
                }
            }
        })
    }


    loadjs(key) {
        this.jsonReader(this.filepath, (err, data) => {
            if (err) {
                return err 
            } else {
                return data.key
            }
        })
    }

}


let test_jsconv = new jsconv('test.json')
test_jsconv.listjs()