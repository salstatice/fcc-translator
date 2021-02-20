const americanOnly = require('./american-only.js');
const americanToBritishSpelling = require('./american-to-british-spelling.js');
const americanToBritishTitles = require("./american-to-british-titles.js")
const britishOnly = require('./british-only.js')

class Translator {
  
  americanToBritish(sentence) {
    let translation = sentence;
    for (let key in americanOnly) {
      if (sentence.toLowerCase().indexOf(key) != -1) {
        let search = '\\b'+ key + '\\b'
        let re = new RegExp(search, 'gi')
        translation = translation.replace(re, americanOnly[key])
      }
    }
    for (let key in americanToBritishSpelling) {
      if (sentence.toLowerCase().indexOf(key) != -1) {
        let re = new RegExp('\\b' + key + '\\b', 'gi')
        translation = translation.replace(re, americanToBritishSpelling[key])
      }
    }
    for (let key in americanToBritishTitles) {
      if (sentence.toLowerCase().indexOf(key) != -1) {
        let re = new RegExp(key, 'gi');
        let title = americanToBritishTitles[key];
        let capTitle = title.charAt(0).toUpperCase() + title.slice(1);
        translation = translation.replace(re, capTitle)
      }
    }
    let timeReg = /(?<=\d{1,2}):(?=\d\d)/;
    translation = translation.replace(timeReg, '.')

    return translation
  }

  britishToAmerican(sentence) {
    let translation = sentence;
    for (let key in americanToBritishSpelling) {
      if (sentence.toLowerCase().indexOf(americanToBritishSpelling[key].toLowerCase()) != -1) {
        let search = '\\b' + americanToBritishSpelling[key] + '\\b';
        let re = new RegExp(search, 'gi')
        translation = translation.replace(re, key)
      }
    }
    for (let key in americanToBritishTitles) {
      if (sentence.toLowerCase().indexOf(americanToBritishTitles[key].toLowerCase()) != -1) {
        let re = new RegExp('\\b' + americanToBritishTitles[key] + '\\b', 'gi');
        let title = key;
        let capTitle = title.charAt(0).toUpperCase() + title.slice(1);
        translation = translation.replace(re, capTitle)
      }
    }
    for (let key in britishOnly) {
      if (sentence.toLowerCase().indexOf(key) != -1) {
        let search = '\\b'+ key + '\\b'
        let re = new RegExp(search, 'gi')
        translation = translation.replace(re, britishOnly[key])
      }
    }
    let timeReg = /(?<=\d{1,2})\.(?=\d\d)/;
    translation = translation.replace(timeReg, ':')

    return translation
  }

  highlight(text, translation) {
    let textArray = text.split(' ');
    let translationArray = translation.split(' ');

    let highlighted = translationArray.map((word, index) => {
      if (word != textArray[index] ) {
        return '<span class="highlight">'+ word +'</span>'
      }
      return word
    })

    return highlighted.join(' ')
  }
}

module.exports = Translator;