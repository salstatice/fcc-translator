const chai = require('chai');
const assert = chai.assert;

const Translator = require('../components/translator.js');

const translator = new Translator();

suite('Unit Tests', () => {
  suite('Translate American to British English', () =>{
    test('Mangoes are my favorite fruit.', function(done) {
      let text = "Mangoes are my favorite fruit."
      assert.equal(translator.americanToBritish(text), 'Mangoes are my favourite fruit.');
      done();
    });

    test('I ate yogurt for breakfast.', function(done) {
      let text = "I ate yogurt for breakfast."
      assert.equal(translator.americanToBritish(text), 'I ate yoghurt for breakfast.');
      done();
    });

    test("We had a party at my friend's condo.", function(done) {
      let text = "We had a party at my friend's condo."
      assert.equal(translator.americanToBritish(text), "We had a party at my friend's flat.");
      done();
    });

    test('Can you toss this in the trashcan for me?', function(done) {
      let text = "Can you toss this in the trashcan for me?"
      assert.equal(translator.americanToBritish(text), 'Can you toss this in the bin for me?');
      done();
    });

    test('The parking lot was full.', function(done) {
      let text = "The parking lot was full."
      assert.equal(translator.americanToBritish(text), 'The car park was full.');
      done();
    });

    test('Like a high tech Rube Goldberg machine.', function(done) {
      let text = "Like a high tech Rube Goldberg machine."
      assert.equal(translator.americanToBritish(text), 'Like a high tech Heath Robinson device.');
      done();
    });

    test('To play hooky means to skip class or work.', function(done) {
      let text = "To play hooky means to skip class or work."
      assert.equal(translator.americanToBritish(text), 'To bunk off means to skip class or work.');
      done();
    });

    test('No Mr. Bond, I expect you to die.', function(done) {
      let text = "No Mr. Bond, I expect you to die."
      assert.equal(translator.americanToBritish(text), 'No Mr Bond, I expect you to die.');
      done();
    });

    test('Dr. Grosh will see you now.', function(done) {
      let text = "Dr. Grosh will see you now."
      assert.equal(translator.americanToBritish(text), 'Dr Grosh will see you now.');
      done();
    });

    test('Lunch is at 12:15 today.', function(done) {
      let text = "Lunch is at 12:15 today."
      assert.equal(translator.americanToBritish(text), 'Lunch is at 12.15 today.');
      done();
    });
  });


  suite('Translate British to American English', () => {
    test('We watched the footie match for a while.', function(done) {
      let text = "We watched the footie match for a while."
      assert.equal(translator.britishToAmerican(text), 'We watched the soccer match for a while.');
      done();
    });

    test('Paracetamol takes up to an hour to work.', function(done) {
      let text = "Paracetamol takes up to an hour to work."
      assert.equal(translator.britishToAmerican(text), 'Tylenol takes up to an hour to work.');
      done();
    });

    test('First, caramelise the onions.', function(done) {
      let text = "First, caramelise the onions."
      assert.equal(translator.britishToAmerican(text), 'First, caramelize the onions.');
      done();
    });

    test('I spent the bank holiday at the funfair.', function(done) {
      let text = "I spent the bank holiday at the funfair."
      assert.equal(translator.britishToAmerican(text), 'I spent the public holiday at the carnival.');
      done();
    });

    test('I had a bicky then went to the chippy.', function(done) {
      let text = "I had a bicky then went to the chippy."
      assert.equal(translator.britishToAmerican(text), 'I had a cookie then went to the fish-and-chip shop.');
      done();
    });

    test("I've just got bits and bobs in my bum bag.", function(done) {
      let text = "I've just got bits and bobs in my bum bag."
      assert.equal(translator.britishToAmerican(text), "I've just got odds and ends in my fanny pack.");
      done();
    });

    test('The car boot sale at Boxted Airfield was called off.', function(done) {
      let text = "The car boot sale at Boxted Airfield was called off."
      assert.equal(translator.britishToAmerican(text), 'The swap meet at Boxted Airfield was called off.');
      done();
    });

    test('Have you met Mrs Kalyani?', function(done) {
      let text = "Have you met Mrs Kalyani?"
      assert.equal(translator.britishToAmerican(text), 'Have you met Mrs. Kalyani?');
      done();
    });

    test("Prof Joyner of King's College, London.", function(done) {
      let text = "Prof Joyner of King's College, London."
      assert.equal(translator.britishToAmerican(text), "Prof. Joyner of King's College, London.");
      done();
    });

    test('Tea time is usually around 4 or 4.30.', function(done) {
      let text = "Tea time is usually around 4 or 4.30."
      assert.equal(translator.britishToAmerican(text), 'Tea time is usually around 4 or 4:30.');
      done();
    });
  });

  suite('Highlight', () => {
    test('Mangoes are my favorite fruit.', function(done) {
      let text = "Mangoes are my favorite fruit."
      let translation = translator.americanToBritish(text)
      assert.equal(translator.highlight(text, translation), 'Mangoes are my <span class="highlight">favourite</span> fruit.');
      done();
    });

    test('I ate yogurt for breakfast.', function(done) {
      let text = "I ate yogurt for breakfast."
      let translation = translator.americanToBritish(text)
      assert.equal(translator.highlight(text, translation), 'I ate <span class="highlight">yoghurt</span> for breakfast.');
      done();
    });

    test('We watched the footie match for a while.', function(done) {
      let text = "We watched the footie match for a while."
      let translation = translator.britishToAmerican(text)
      assert.equal(translator.highlight(text, translation), 'We watched the <span class="highlight">soccer</span> match for a while.');
      done();
    });

    test('Paracetamol takes up to an hour to work.', function(done) {
      let text = "Paracetamol takes up to an hour to work."
      let translation = translator.britishToAmerican(text)
      assert.equal(translator.highlight(text, translation), '<span class="highlight">Tylenol</span> takes up to an hour to work.');
      done();
    });
  })
});
