import { test } from 'qunit';
import moduleForAcceptance from 'super-rentals/tests/helpers/module-for-acceptance';

moduleForAcceptance('Acceptance | about');

test('visiting /about', function(assert) {
  visit('/about');

  andThen(function() {
    assert.equal(currentURL(), '/about');
  });
});

test('clicking home link', function(assert){
  visit('/about');
  click('.home-link');
  
  andThen(function(){
    assert.equal(currentURL(), '/');
  });
});

test('clicking contact link', function(assert){
  visit('/about');
  click('.contact-link');
  
  andThen(function(){
    assert.equal(currentURL(), '/contact');
  });
});