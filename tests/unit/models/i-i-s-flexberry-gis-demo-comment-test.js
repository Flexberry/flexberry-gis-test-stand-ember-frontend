import { moduleForModel, test } from 'ember-qunit';

moduleForModel('i-i-s-flexberry-gis-demo-comment', 'Unit | Model | i-i-s-flexberry-gis-demo-comment', {
  // Specify the other units that are required for this test.
  needs: [
    'model:i-i-s-flexberry-gis-demo-address',
    'model:i-i-s-flexberry-gis-demo-author',
    'model:i-i-s-flexberry-gis-demo-comment',
    'model:i-i-s-flexberry-gis-demo-request'
  ]
});

test('it exists', function(assert) {
  let model = this.subject();

  // let store = this.store();
  assert.ok(!!model);
});
