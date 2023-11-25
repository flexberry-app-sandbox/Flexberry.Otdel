import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  фИО: DS.attr('string'),
  должности: DS.belongsTo('i-i-s-otdel-должности', { inverse: null, async: false }),
  отделКр: DS.belongsTo('i-i-s-otdel-отдел-кр', { inverse: null, async: false })
});

export let ValidationRules = {
  фИО: {
    descriptionKey: 'models.i-i-s-otdel-сотрудники.validations.фИО.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  должности: {
    descriptionKey: 'models.i-i-s-otdel-сотрудники.validations.должности.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  отделКр: {
    descriptionKey: 'models.i-i-s-otdel-сотрудники.validations.отделКр.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('СотрудникиE', 'i-i-s-otdel-сотрудники', {
    фИО: attr('ФИО', { index: 0 }),
    должности: belongsTo('i-i-s-otdel-должности', 'Должности', {
      наименование: attr('Наименование', { index: 3, hidden: true })
    }, { index: 2, displayMemberPath: 'наименование' }),
    отделКр: belongsTo('i-i-s-otdel-отдел-кр', 'Отдел кр', {

    }, { index: 1 })
  });

  modelClass.defineProjection('СотрудникиL', 'i-i-s-otdel-сотрудники', {
    фИО: attr('ФИО', { index: 0 }),
    должности: belongsTo('i-i-s-otdel-должности', 'Наименование', {
      наименование: attr('Наименование', { index: 1 })
    }, { index: -1, hidden: true })
  });
};
