import sys 
import clipboard
import json 


class Conv:


    def __init__(self): 
        self.command = sys.argv(1)


    def save_items(self, filepath, data):
        with open(filepath, "w") as f:
            json.dump(data, f)

    def load_items(self, filepath):
        try:
            with open(filepath, "r") as f:
                data = json.load(f)
                return data
        except:
            return "{} ot found".format(filepath)

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
test_conv.attach('test')