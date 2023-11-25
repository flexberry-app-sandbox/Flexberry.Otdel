import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  дата: DS.attr('date'),
  доходыВМес: DS.attr('number'),
  наличЗалога: DS.attr('string'),
  наличиеПоручит: DS.attr('string'),
  одобрениеКр: DS.attr('boolean'),
  суммаЕжПлЗаКр: DS.attr('number'),
  заклКрДог: DS.belongsTo('i-i-s-otdel-закл-кр-дог', { inverse: null, async: false }),
  организация: DS.belongsTo('i-i-s-otdel-организация', { inverse: null, async: false })
});

export let ValidationRules = {
  дата: {
    descriptionKey: 'models.i-i-s-otdel-проверка-кр-кл.validations.дата.__caption__',
    validators: [
      validator('ds-error'),
      validator('date'),
    ],
  },
  доходыВМес: {
    descriptionKey: 'models.i-i-s-otdel-проверка-кр-кл.validations.доходыВМес.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  наличЗалога: {
    descriptionKey: 'models.i-i-s-otdel-проверка-кр-кл.validations.наличЗалога.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  наличиеПоручит: {
    descriptionKey: 'models.i-i-s-otdel-проверка-кр-кл.validations.наличиеПоручит.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  одобрениеКр: {
    descriptionKey: 'models.i-i-s-otdel-проверка-кр-кл.validations.одобрениеКр.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  суммаЕжПлЗаКр: {
    descriptionKey: 'models.i-i-s-otdel-проверка-кр-кл.validations.суммаЕжПлЗаКр.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  заклКрДог: {
    descriptionKey: 'models.i-i-s-otdel-проверка-кр-кл.validations.заклКрДог.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  организация: {
    descriptionKey: 'models.i-i-s-otdel-проверка-кр-кл.validations.организация.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('ПроверкаКрКлE', 'i-i-s-otdel-проверка-кр-кл', {
    дата: attr('Дата', { index: 0 }),
    доходыВМес: attr('Доходы в мес', { index: 1 }),
    суммаЕжПлЗаКр: attr('Сумма еж пл за кр', { index: 2 }),
    наличЗалога: attr('Налич залога', { index: 3 }),
    наличиеПоручит: attr('Наличие поручит', { index: 4 }),
    одобрениеКр: attr('Одобрение кр', { index: 5 }),
    организация: belongsTo('i-i-s-otdel-организация', 'Организация', {
      наименование: attr('Наименование', { index: 7, hidden: true })
    }, { index: 6, displayMemberPath: 'наименование' }),
    заклКрДог: belongsTo('i-i-s-otdel-закл-кр-дог', 'Закл кр дог', {
      цельКр: attr('Цель кр', { index: 9, hidden: true })
    }, { index: 8, displayMemberPath: 'цельКр' })
  });

  modelClass.defineProjection('ПроверкаКрКлL', 'i-i-s-otdel-проверка-кр-кл', {
    дата: attr('Дата', { index: 0 }),
    доходыВМес: attr('Доходы в мес', { index: 1 }),
    суммаЕжПлЗаКр: attr('Сумма еж пл за кр', { index: 2 }),
    наличЗалога: attr('Налич залога', { index: 3 }),
    наличиеПоручит: attr('Наличие поручит', { index: 4 }),
    одобрениеКр: attr('Одобрение кр', { index: 5 }),
    организация: belongsTo('i-i-s-otdel-организация', 'Наименование', {
      наименование: attr('Наименование', { index: 6 })
    }, { index: -1, hidden: true }),
    заклКрДог: belongsTo('i-i-s-otdel-закл-кр-дог', 'Цель кр', {
      цельКр: attr('Цель кр', { index: 7 })
    }, { index: -1, hidden: true })
  });
};
