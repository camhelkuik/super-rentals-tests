import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('rental-listing', 'Integration | Component | rental listing', {
  integration: true
});

test('it renders', function(assert) {
  assert.expect(1);
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });" + EOL + EOL +

  this.render(hbs`{{rental-listing}}`);

  assert.equal(this.$('p').text().trim(), 'Owner: Type: Standalone - Location: Number of bedrooms:');

  // Template block usage:" + EOL +
  // this.render(hbs`
  //   {{#rental-listing}}
  //     template block text
  //   {{/rental-listing}}
  // `);
  //
  // assert.equal(this.$().text().trim(), 'template block text');
});


