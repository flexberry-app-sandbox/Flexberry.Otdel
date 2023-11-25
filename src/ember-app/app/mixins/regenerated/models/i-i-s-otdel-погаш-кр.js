import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  видПогашКр: DS.attr('i-i-s-otdel-вид-погаш-кр'),
  дата: DS.attr('date'),
  суммаПогашКр: DS.attr('number'),
  заклКрДог: DS.belongsTo('i-i-s-otdel-закл-кр-дог', { inverse: null, async: false }),
  организация: DS.belongsTo('i-i-s-otdel-организация', { inverse: null, async: false })
});

export let ValidationRules = {
  видПогашКр: {
    descriptionKey: 'models.i-i-s-otdel-погаш-кр.validations.видПогашКр.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  дата: {
    descriptionKey: 'models.i-i-s-otdel-погаш-кр.validations.дата.__caption__',
    validators: [
      validator('ds-error'),
      validator('date'),
    ],
  },
  суммаПогашКр: {
    descriptionKey: 'models.i-i-s-otdel-погаш-кр.validations.суммаПогашКр.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  заклКрДог: {
    descriptionKey: 'models.i-i-s-otdel-погаш-кр.validations.заклКрДог.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  организация: {
    descriptionKey: 'models.i-i-s-otdel-погаш-кр.validations.организация.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('ПогашКрE', 'i-i-s-otdel-погаш-кр', {
    дата: attr('Дата', { index: 0 }),
    видПогашКр: attr('Вид погаш кр', { index: 1 }),
    суммаПогашКр: attr('Сумма погаш кр', { index: 2 }),
    заклКрДог: belongsTo('i-i-s-otdel-закл-кр-дог', 'Закл кр дог', {
      цельКр: attr('Цель кр', { index: 4, hidden: true })
    }, { index: 3, displayMemberPath: 'цельКр' }),
    организация: belongsTo('i-i-s-otdel-организация', 'Организация', {
      наименование: attr('Наименование', { index: 6, hidden: true })
    }, { index: 5, displayMemberPath: 'наименование' })
  });

  modelClass.defineProjection('ПогашКрL', 'i-i-s-otdel-погаш-кр', {
    дата: attr('Дата', { index: 0 }),
    видПогашКр: attr('Вид погаш кр', { index: 1 }),
    суммаПогашКр: attr('Сумма погаш кр', { index: 2 }),
    заклКрДог: belongsTo('i-i-s-otdel-закл-кр-дог', 'Цель кр', {
      цельКр: attr('Цель кр', { index: 3 })
    }, { index: -1, hidden: true }),
    организация: belongsTo('i-i-s-otdel-организация', 'Наименование', {
      наименование: attr('Наименование', { index: 4 })
    }, { index: -1, hidden: true })
  });
};
