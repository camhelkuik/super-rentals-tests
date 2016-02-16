import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

const SAMPLE = { 
          title: 'Downtown Charm',
          owner: 'Violet Beauregarde',
          city: 'Portland',
          type: 'Apartment',
          bedrooms: 3,
          image: 'https://upload.wikimedia.org/wikipedia/commons/f/f7/Wheeldon_Apartment_Building_-_Portland_Oregon.jpg'
        };

 moduleForComponent('rental-listing', 'Integration | Component | rental listing', {
   integration: true
 });

 test('it renders sample rental listing', function(assert) {
   // Set any properties with this.set('myProperty', 'value');
   // Handle any actions with this.on('myAction', function(val) { ... });" + EOL + EOL +
   this.set('sample', SAMPLE);
   this.render(hbs`{{rental-listing rental=sample}}`);

  assert.equal(this.$('p').text().trim(), 'Owner: Violet BeauregardeType: Community - ApartmentLocation: PortlandNumber of bedrooms: 3');
  assert.equal(this.$('.title').text().trim(), 'Downtown Charm');
  assert.equal(this.$('.owner').text().trim(), 'Owner: Violet Beauregarde');
  assert.equal(this.$('.type').text().trim(), 'Type: Community - Apartment');
  assert.equal(this.$('.location').text().trim(), 'Location: Portland');
  assert.equal(this.$('.bedrooms').text().trim(), 'Number of bedrooms: 3');

});


