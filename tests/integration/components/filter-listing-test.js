import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('filter-listing', 'Integration | Component | filter listing', {
  integration: true
});

test('it renders', function(assert) {
  
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });" + EOL + EOL +

  this.render(hbs`{{filter-listing}}`);
  

  assert.equal(this.$().text().trim(), 'City: Search');

 });
 
//input portland into search box
 //portland will show up in filteredList
 //click search button
 //Only show the rental for Portland
 
 
test('should trigger filtering', function(assert){
  
  var cityName = "Portland";
 
  this.set('filter', cityName);
  
 //  this.set('externalAction', function(autoComplete){
//    assert.deepEqual(autoComplete, 'Portland', 'submited input value gets passed to external action');
// });
  
  this.render(hbs`{{filter-listing filteredList=filteredList 
autoComplete=(action 'autoComplete') search=(action 'search')}}`);

  this.$('filterdList').val('Portland');
  
  this.$('search').click();
  
  assert.equal(find('rental-listing').length, 1);
  
});

 // test('should trigger external action on form submit', function(assert) {
 //
 //   // test double for the external action
 //   this.set('externalAction', (attributes) => assert.deepEqual(attributes, { comment: 'You are not a wizard!' }, 'submitted input value gets passed to external action'));
 //
 //   this.render(hbs`{{comment-form submitComment=(action externalAction)}}`);
 //
 //   // fill out the form and force an onchange
 //   this.$('textarea').val('You are not a wizard!');
 //   this.$('textarea').change();
 //
 //   // click the button to submit the form
 //   this.$('input').click();
 // });
