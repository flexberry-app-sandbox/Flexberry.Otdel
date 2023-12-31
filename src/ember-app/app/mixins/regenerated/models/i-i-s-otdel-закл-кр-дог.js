import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  видКредита: DS.attr('i-i-s-otdel-вид-кредита'),
  видПогашКр: DS.attr('i-i-s-otdel-вид-погаш-кр'),
  дата: DS.attr('date'),
  номерКрДог: DS.attr('number'),
  содержДогЗал: DS.attr('string'),
  суммаКредита: DS.attr('number'),
  цельКр: DS.attr('string'),
  организация: DS.belongsTo('i-i-s-otdel-организация', { inverse: null, async: false })
});

export let ValidationRules = {
  видКредита: {
    descriptionKey: 'models.i-i-s-otdel-закл-кр-дог.validations.видКредита.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  видПогашКр: {
    descriptionKey: 'models.i-i-s-otdel-закл-кр-дог.validations.видПогашКр.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  дата: {
    descriptionKey: 'models.i-i-s-otdel-закл-кр-дог.validations.дата.__caption__',
    validators: [
      validator('ds-error'),
      validator('date'),
    ],
  },
  номерКрДог: {
    descriptionKey: 'models.i-i-s-otdel-закл-кр-дог.validations.номерКрДог.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  содержДогЗал: {
    descriptionKey: 'models.i-i-s-otdel-закл-кр-дог.validations.содержДогЗал.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  суммаКредита: {
    descriptionKey: 'models.i-i-s-otdel-закл-кр-дог.validations.суммаКредита.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  цельКр: {
    descriptionKey: 'models.i-i-s-otdel-закл-кр-дог.validations.цельКр.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  организация: {
    descriptionKey: 'models.i-i-s-otdel-закл-кр-дог.validations.организация.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('ЗаклКрДогE', 'i-i-s-otdel-закл-кр-дог', {
    дата: attr('Дата', { index: 0 }),
    цельКр: attr('Цель кр', { index: 1 }),
    видПогашКр: attr('Вид погаш кр', { index: 2 }),
    видКредита: attr('Вид кредита', { index: 3 }),
    суммаКредита: attr('Сумма кредита', { index: 4 }),
    номерКрДог: attr('Номер кр дог', { index: 5 }),
    содержДогЗал: attr('Содерж дог зал', { index: 6 }),
    организация: belongsTo('i-i-s-otdel-организация', 'Организация', {
      наименование: attr('Наименование', { index: 8, hidden: true })
    }, { index: 7, displayMemberPath: 'наименование' })
  });

  modelClass.defineProjection('ЗаклКрДогL', 'i-i-s-otdel-закл-кр-дог', {
    дата: attr('Дата', { index: 0 }),
    цельКр: attr('Цель кр', { index: 1 }),
    видПогашКр: attr('Вид погаш кр', { index: 2 }),
    видКредита: attr('Вид кредита', { index: 3 }),
    суммаКредита: attr('Сумма кредита', { index: 4 }),
    номерКрДог: attr('Номер кр дог', { index: 5 }),
    содержДогЗал: attr('Содерж дог зал', { index: 6 }),
    организация: belongsTo('i-i-s-otdel-организация', 'Наименование', {
      наименование: attr('Наименование', { index: 7 })
    }, { index: -1, hidden: true })
  });
};
