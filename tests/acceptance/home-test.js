import { test } from 'qunit';
import moduleForAcceptance from 'super-rentals/tests/helpers/module-for-acceptance';

moduleForAcceptance('Acceptance | home');

test('visiting /', function(assert) {
  visit('/');

  andThen(function() {
    assert.equal(currentURL(), '/');
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




