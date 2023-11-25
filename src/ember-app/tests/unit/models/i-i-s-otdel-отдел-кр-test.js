import { moduleForModel, test } from 'ember-qunit';

moduleForModel('i-i-s-otdel-отдел-кр', 'Unit | Model | i-i-s-otdel-отдел-кр', {
  // Specify the other units that are required for this test.
  needs: [
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
    'service:syncer',
  ],
});

test('it exists', function(assert) {
  let model = this.subject();

  // let store = this.store();
  assert.ok(!!model);
});
