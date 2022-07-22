import sys 
import clipboard
import json 


class Conv:

    def __init__(self, filename):
        self.update(filename)

    def update(self, filename):
        self.saved_data = filename
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

    def attach(self, file_name, key, data):
        if type(file_name) != str:
            return "Invalid Filename"
        else:
            file_name += '.json'
            data[key] = clipboard.paste()
            self.save_items(file_name, data) # Adding {key: value} data to filepath.json

    def spill(self):
        pass 

    def load(self):
        self.load_items()


test_conv = Conv()
test_conv.attach('test', 'key1', 'value1')