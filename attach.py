import sys 
import clipboard
import json 


class Conv:

    def __init__(self, filename):
        self.update(filename)

    def update(self, filename):
        self.saved_data = filename + '.json'
        self.save_items(self.saved_data, {'key1':'initialize1'})
        self.data = self.load_items(self.saved_data)



    def save_items(self, filepath, data):
        with open(filepath, "w") as f:
            json.dump(data, f)

    def load_items(self, filepath):
        try:
            with open(filepath, "r") as f:
                data = json.load(f)
                return data
        except:
            return "{} not found".format(filepath)

    def attach(self, file_name, key, value):
        if type(file_name) != str:
            return "Invalid Filename"
        else:
            self.data[key] = value
            self.save_items(self.saved_data, self.data) # Adding {key: value} data to filepath.json

    def spill(self):
        pass 

    def load(self, key):
        if key in self.data:
            return self.data[key]
        else:
            return 'Key not found'


test_conv = Conv('test')
test_conv.attach('test', 'key1', 'value1')
print(test_conv.load('key1'))
