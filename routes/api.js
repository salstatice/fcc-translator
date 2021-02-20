'use strict';

const Translator = require('../components/translator.js');

module.exports = function (app) {
  
  const translator = new Translator();

  app.route('/api/translate')
    .post((req, res) => {
      let text = req.body.text;
      let locale = req.body.locale;

      let translation;
      
      if (text == undefined || locale == undefined) {
        res.json({ error: 'Required field(s) missing' });
      } else if (text == '') {
        res.json({ error: 'No text to translate' });
      } else if (locale != 'american-to-british' && locale != 'british-to-american') {
        res.json({ error: 'Invalid value for locale field' });
      } else {
        if (locale == 'american-to-british') {
          translation = translator.americanToBritish(text)
        } else if (locale == 'british-to-american') {
          translation = translator.britishToAmerican(text)
        }
      }
        
      if (text == translation) {
        res.json({
          text: text,
          translation: "Everything looks good to me!"
        })
      } else {
        let result = translator.highlight(text, translation);
        res.json({
          text: text,
          translation: result
        })
      }

    });
};
