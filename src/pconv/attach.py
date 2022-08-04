import sys 
import clipboard
import json 

class NoFilepathFoundError(Exception):
    pass

class Conv:

    def __init__(self, filename):
        self.update(filename)

    def update(self, filename):       
        self.saved_data = filename 
        self.save_items(self.saved_data, {'key1':'initializer statement from pconv'})
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
            raise NoFilepathFoundError("{} not found".format(filepath))  # Throw new error

    def attach(self, file_name, key, value): # user func
        if type(file_name) != str:
            raise NoFilepathFoundError("{} not found".format(file_name)) # Throw new error
        else:
            self.data[key] = value
            self.save_items(self.saved_data, self.data) 

    def spill(self): #user func
        try:
            return self.data
        except:
            return None

    def load(self, key):    # user func
        if key in self.data:
            return self.data[key]
        else:
            return None


pconv = Conv('test.json')
pconv.attach('test', 'myface', 'value2')
results = pconv.spill()
print(results)

