import { test } from 'qunit';
import moduleForAcceptance from 'super-rentals/tests/helpers/module-for-acceptance';

moduleForAcceptance('Acceptance | home');

//Positive Tests------------------------------------------------------------
test('visiting /', function(assert) {
  visit('/');

  andThen(function() {
    assert.equal(currentURL(), '/');
  });
});

test('visiting about link', function(assert) {
  visit('/');
  click('.about-link');
  
  andThen(function(){
    assert.equal(currentURL(), '/about');
  });
});

test('visiting contact link', function(assert) {
  visit('/');
  click('.contact-link');
  
  andThen(function(){
    assert.equal(currentURL(), '/contact');
  });
});

test('search box', function(assert){
  visit('/');
  fillIn('input', 'Seattle');
  click('button.search');
  
  andThen(() => assert.equal(find('h2').text(), 'Urban Living'));
});

test('search box', function(assert){
  visit('/');
  fillIn('input', 'Portland');
  click('button.search');
  
  andThen(function(){
    assert.equal(find('h2').text(), 'Downtown Charm');
  });
});

test('search box', function(assert){
  visit('/');
  fillIn('input', 'San Francisco');
  click('button.search');
  
  andThen(function(){
    assert.equal(find('h2').text(), 'Grand Old Mansion');
  });
});

test('click show button', function(assert){
  visit('/');
  click('.show-button');
  
  andThen(function(){
    assert.equal(find('img').length, 3);
  });
});

test('click first show button', function(assert){
  visit('/');
  click('.show-button:first');
  
  andThen(function(){
    assert.equal(find('img').length, 1);
  });
});

test('click last show button', function(assert){
  visit('/');
  click('.show-button:last');
  
  andThen(function(){
    assert.equal(find('img').length, 1);
  });
});

test('click hide button', function(assert) {
  visit('/');
  click('.show-button');
  
  andThen(function(){
    click('.hide-button');
  });
  
  andThen(function(){
    assert.equal(find('.show-button').length, 3);
  });
});

//Negative Tests-------------------------------------------------------
test('Search for Omaha, nothing should show', function(assert) {
  visit('/');
  fillIn('input', 'Omaha');
  click('button.search');
  
  andThen(function(){
    assert.equal(find('h2').length, 0);
  });
});



