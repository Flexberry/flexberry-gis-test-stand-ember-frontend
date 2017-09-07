import { moduleForModel, test } from 'ember-qunit';

moduleForModel('i-i-s-flexberry-gis-test-stand-author', 'Unit | Serializer | i-i-s-flexberry-gis-test-stand-author', {
  // Specify the other units that are required for this test.
  needs: [
    'serializer:i-i-s-flexberry-gis-test-stand-author',
    'transform:file',
    'transform:decimal',

    'transform:i-i-s-flexberry-gis-test-stand-t-gender',
    'transform:i-i-s-flexberry-gis-test-stand-t-status',

    'model:i-i-s-flexberry-gis-test-stand-address',
    'model:i-i-s-flexberry-gis-test-stand-author',
    'model:i-i-s-flexberry-gis-test-stand-comment',
    'model:i-i-s-flexberry-gis-test-stand-request'
  ]
});

// Replace this with your real tests.
test('it serializes records', function(assert) {
  let record = this.subject();

  let serializedRecord = record.serialize();

  assert.ok(serializedRecord);
});
