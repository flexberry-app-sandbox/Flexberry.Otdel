import { moduleForModel, test } from 'ember-qunit';

moduleForModel('i-i-s-otdel-закл-кр-дог', 'Unit | Serializer | i-i-s-otdel-закл-кр-дог', {
  // Specify the other units that are required for this test.
  needs: [
    'serializer:i-i-s-otdel-закл-кр-дог',
    'service:syncer',
    'transform:file',
    'transform:decimal',
    'transform:guid',

    'transform:i-i-s-otdel-вид-кредита',
    'transform:i-i-s-otdel-вид-погаш-кр',

    'model:i-i-s-otdel-должности',
    'model:i-i-s-otdel-закл-кр-дог',
    'model:i-i-s-otdel-клиенты',
    'model:i-i-s-otdel-организация',
    'model:i-i-s-otdel-отдел-кр',
    'model:i-i-s-otdel-погаш-кр',
    'model:i-i-s-otdel-проверка-кр-кл',
    'model:i-i-s-otdel-сотрудники',
    'validator:ds-error',
    'validator:presence',
    'validator:number',
    'validator:date',
    'validator:belongs-to',
    'validator:has-many',
  ],
});

// Replace this with your real tests.
test('it serializes records', function(assert) {
  let record = this.subject();

  let serializedRecord = record.serialize();

  assert.ok(serializedRecord);
});
