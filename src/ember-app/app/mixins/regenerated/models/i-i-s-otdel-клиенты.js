import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  иНН: DS.attr('number'),
  кПП: DS.attr('number'),
  местоРаботы: DS.attr('string'),
  номКрДог: DS.attr('number'),
  расчСчет: DS.attr('number'),
  стажРаботы: DS.attr('number'),
  телефон: DS.attr('number'),
  фактАдрес: DS.attr('string'),
  фИО: DS.attr('string'),
  юрАдрес: DS.attr('string'),
  заклКрДог: DS.belongsTo('i-i-s-otdel-закл-кр-дог', { inverse: null, async: false }),
  погашКр: DS.belongsTo('i-i-s-otdel-погаш-кр', { inverse: null, async: false }),
  проверкаКрКл: DS.belongsTo('i-i-s-otdel-проверка-кр-кл', { inverse: null, async: false })
});

export let ValidationRules = {
  иНН: {
    descriptionKey: 'models.i-i-s-otdel-клиенты.validations.иНН.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  кПП: {
    descriptionKey: 'models.i-i-s-otdel-клиенты.validations.кПП.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  местоРаботы: {
    descriptionKey: 'models.i-i-s-otdel-клиенты.validations.местоРаботы.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  номКрДог: {
    descriptionKey: 'models.i-i-s-otdel-клиенты.validations.номКрДог.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  расчСчет: {
    descriptionKey: 'models.i-i-s-otdel-клиенты.validations.расчСчет.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  стажРаботы: {
    descriptionKey: 'models.i-i-s-otdel-клиенты.validations.стажРаботы.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  телефон: {
    descriptionKey: 'models.i-i-s-otdel-клиенты.validations.телефон.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  фактАдрес: {
    descriptionKey: 'models.i-i-s-otdel-клиенты.validations.фактАдрес.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  фИО: {
    descriptionKey: 'models.i-i-s-otdel-клиенты.validations.фИО.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  юрАдрес: {
    descriptionKey: 'models.i-i-s-otdel-клиенты.validations.юрАдрес.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  заклКрДог: {
    descriptionKey: 'models.i-i-s-otdel-клиенты.validations.заклКрДог.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  погашКр: {
    descriptionKey: 'models.i-i-s-otdel-клиенты.validations.погашКр.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  проверкаКрКл: {
    descriptionKey: 'models.i-i-s-otdel-клиенты.validations.проверкаКрКл.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('КлиентыE', 'i-i-s-otdel-клиенты', {
    фИО: attr('ФИО', { index: 0 }),
    иНН: attr('ИНН', { index: 1 }),
    кПП: attr('КПП', { index: 2 }),
    телефон: attr('Телефон', { index: 3 }),
    местоРаботы: attr('Место работы', { index: 4 }),
    юрАдрес: attr('Юр адрес', { index: 5 }),
    фактАдрес: attr('Факт адрес', { index: 6 }),
    стажРаботы: attr('Стаж работы', { index: 7 }),
    номКрДог: attr('Ном кр дог', { index: 8 }),
    расчСчет: attr('Расч счет', { index: 9 }),
    заклКрДог: belongsTo('i-i-s-otdel-закл-кр-дог', 'Закл кр дог', {
      цельКр: attr('Цель кр', { index: 11, hidden: true })
    }, { index: 10, displayMemberPath: 'цельКр' }),
    проверкаКрКл: belongsTo('i-i-s-otdel-проверка-кр-кл', 'Проверка кр кл', {
      наличЗалога: attr('Налич залога', { index: 13, hidden: true })
    }, { index: 12, displayMemberPath: 'наличЗалога' }),
    погашКр: belongsTo('i-i-s-otdel-погаш-кр', 'Погаш кр', {
      дата: attr('Дата', { index: 15, hidden: true })
    }, { index: 14, displayMemberPath: 'дата' })
  });

  modelClass.defineProjection('КлиентыL', 'i-i-s-otdel-клиенты', {
    фИО: attr('ФИО', { index: 0 }),
    иНН: attr('ИНН', { index: 1 }),
    кПП: attr('КПП', { index: 2 }),
    телефон: attr('Телефон', { index: 3 }),
    местоРаботы: attr('Место работы', { index: 4 }),
    юрАдрес: attr('Юр адрес', { index: 5 }),
    фактАдрес: attr('Факт адрес', { index: 6 }),
    стажРаботы: attr('Стаж работы', { index: 7 }),
    номКрДог: attr('Ном кр дог', { index: 8 }),
    расчСчет: attr('Расч счет', { index: 9 })
  });
};
