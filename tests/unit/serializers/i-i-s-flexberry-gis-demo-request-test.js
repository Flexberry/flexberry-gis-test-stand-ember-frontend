import { moduleForModel, test } from 'ember-qunit';

moduleForModel('i-i-s-flexberry-gis-demo-request', 'Unit | Serializer | i-i-s-flexberry-gis-demo-request', {
  // Specify the other units that are required for this test.
  needs: [
    'serializer:i-i-s-flexberry-gis-demo-request',
    'transform:file',
    'transform:decimal',

    'transform:i-i-s-flexberry-gis-demo-t-gender',
    'transform:i-i-s-flexberry-gis-demo-t-status',

    'model:i-i-s-flexberry-gis-demo-address',
    'model:i-i-s-flexberry-gis-demo-author',
    'model:i-i-s-flexberry-gis-demo-comment',
    'model:i-i-s-flexberry-gis-demo-request'
  ]
});

// Replace this with your real tests.
test('it serializes records', function(assert) {
  let record = this.subject();

  let serializedRecord = record.serialize();

  assert.ok(serializedRecord);
});
