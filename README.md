# [Quality Assurance Projects - American / British Translator](https://www.freecodecamp.org/learn/quality-assurance/quality-assurance-projects/american-british-translator)

### About the project

This project is an assignment project created by FCC for Quality Assurance Certification.

American / British English Translator translates the following from American English to British English or from British to American English:
* Words and phrases
* Titles
* Time

The translated sections are highlighted in green. (Color can be changed by `/public/styles.css` file) 

#### Project Dictionary

The translator identifies words and phrases based on the dictionaries reference that are located in the directory at `/components`. The files are:
1. `american-only.js`
2. `american-to-british-spelling.js`
3. `american-to-british-titles.js`
4. `british-only.js`

### Getting Started

[Express](https://expressjs.com/) is used as the Node.js web application framework in this project. See [hello-world example](https://expressjs.com/en/starter/hello-world.html).

#### Installing Node and NPM
This project depends on Nodejs and Node Package Manager (NPM). To install Node, go to https://nodejs.org and select the appropriate installation package depending on your computer's platform (Windows, MacOS or Linux).

`Note: On Windows machines, you may need to configure your PATH environmental variable in case you forgot to turn on the add to PATH during the installation steps.`

#### Verifying the Node Installation
To ensure that your NodeJS setup is working correctly, open the terminal and type the following to check for the version of Node and NPM
```
$ node -v
$ npm -v
```

#### Installing project dependencies
This project uses NPM to manage software dependencies. NPM Relies on the package.json file. To install dependencies, open the terminal, cd to the project directory and run:
```
$ npm install
```

### Running the server
To run locally, cd to the project directory and type the following command:
```
$ node server.js
```
Then, load http://localhost:3000/ in a browser to see the output.

### Routes

This project has one API route.

#### POST /api/translate

This API endpoint checks if a valid locate and a text string is provided. It returns the original text and the translation in JSON format. Translated words are wrapped with HTML span tags `<span class="highlight">`{translated_words}`</span>`

Sample request:
```js
{
    text: 'Mangoes are my favorite fruit.',
    locale: 'american-to-british'
}
```

Sample response:
```js
// successful request
{
    text: 'Mangoes are my favorite fruit.',
    translation: 'Mangoes are my <span class="highlight">favourite</span> fruit.'
}

// invalid locale field
{    error: 'Invalid value for locale field' }

// missing text field or locale field
{    error: 'Required field(s) missing' }

// empty text field
{    error: 'No text to translate' }

// text that needs no translation
{
    text: 'Mangoes are the best.',
    translation: 'Everything looks good to me!'
}
```

### Testing

Unittests and functional testes are located in the `/tests` folder. 

To run test, set up the following environment variable, or put the following variable in a `.env` file:
```
NODE_ENV=test
```

Then, run the app with the following command:
```
$ node server.js
```
