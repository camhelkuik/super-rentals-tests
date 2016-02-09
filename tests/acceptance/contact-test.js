import { test } from 'qunit';
import moduleForAcceptance from 'super-rentals/tests/helpers/module-for-acceptance';

moduleForAcceptance('Acceptance | contact');

test('visiting /contact', function(assert) {
  visit('/contact');

  andThen(function() {
    assert.equal(currentURL(), '/contact');
  });
});

test('visiting home link', function(assert) {
  visit('/contact');
  click('.home-link');
  
  andThen(function(){
    assert.equal(currentURL(), '/');
  });
});

test('visiting about link', function(assert) {
  visit('/contact');
  click('.about-link');
  
  andThen(function(){
    assert.equal(currentURL(), '/about');
  });
});