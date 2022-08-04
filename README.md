# pconv
Convert Python data to Javascript through JSON. Read, Write, and Update data through JSON files for multi-language compatibility.

### Installation and use

***Prerequisite:***

If you haven't already, install the latest version of pip and Python. The package may only run on Python versions that are 3.7 or higher.

Check Pip Version:
```
pip --version
```

Check Python Version:

```
python --version
```

Install ***pconv***:

```
pip install pconv
```

Install ***pconv*** with pip3: 

```
pip3 install pconv
```

Import Library to File: 
```
from pconv import Conv
```

### Dependencies

pconv depends on the following Python modules for development:

* [sys](https://docs.python.org/3/library/sys.html) - utilities for system variables and function.
* [json](https://docs.python.org/3/library/json.html) - Allows Python to interact with JSON files.

### Full Python script reference


#### Initialization

Before interacting with the package, you must set a filepath of the relative json that needs to be worked with.

```
pconv = Conv('FILEPATH_OF_JSON')
```


#### Adding Data to JSON

pconv will add data in the form of a dictionary to the JSON file.

```
pconv.attach('FILEPATH_OF_JSON', 'KEY_VALUE', 'CORRESPONDING_VALUE')
```

*Note*: If there is a key that is being added to the JSON that has already been added before, the function will override past data on the JSON by nature.

A user may also be faced with an error of type `NoFilepathFoundError` if their filepath is incorrect. View the *Errors* section of this documentation for more information.


#### Loading Specific Keys

Loads a value of a desired key in the JSON.

```
returned_var = pconv.load('DESIRED_KEY')
```

If a key is not found, pconv will return ***None***.

#### Loading All Data
View all the data in the form of a dictionary.

```
result_from_json = pconv.spill()
```

*Note*: If the json is empty, the function will return ***None***.

### Errors

A very common error that a user might face is: 

```
NoFilepathFoundError: FILE_PATH not found
```
In this case, it is essential that the user has typed the correct filepath and has ensured that the json file is actually placed in their desired location. pconv does not take filenames, but paths. A common mistake users have is that they do not place, `./` before the parent directory to indicate that the location is within our present directory location on the Operating System.


## Resources (Coming Soon)
- [Pypi pconv]()
- [Jsconv]()


## Contact Information
Here are some of the ways you can find me:
 - [www.jaivalpatel.com]
 - [Twitter](https://twitter.com/patjaival)
 - [npm](https://www.npmjs.com/~jaivalpatel1)
 - [Instagram](https://www.instagram.com/jaivalpatelll/)

Made by @Jaival - 2022