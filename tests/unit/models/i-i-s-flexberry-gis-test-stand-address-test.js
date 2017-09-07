import { moduleForModel, test } from 'ember-qunit';

moduleForModel('i-i-s-flexberry-gis-test-stand-address', 'Unit | Model | i-i-s-flexberry-gis-test-stand-address', {
  // Specify the other units that are required for this test.
  needs: [
    'model:i-i-s-flexberry-gis-test-stand-address',
    'model:i-i-s-flexberry-gis-test-stand-author',
    'model:i-i-s-flexberry-gis-test-stand-comment',
    'model:i-i-s-flexberry-gis-test-stand-request'
  ]
});

test('it exists', function(assert) {
  let model = this.subject();

  // let store = this.store();
  assert.ok(!!model);
});
