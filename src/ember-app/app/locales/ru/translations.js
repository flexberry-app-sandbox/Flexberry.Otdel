import $ from 'jquery';
import EmberFlexberryTranslations from 'ember-flexberry/locales/ru/translations';

import IISOtdelДолжностиLForm from './forms/i-i-s-otdel-должности-l';
import IISOtdelЗаклКрДогLForm from './forms/i-i-s-otdel-закл-кр-дог-l';
import IISOtdelКлиентыLForm from './forms/i-i-s-otdel-клиенты-l';
import IISOtdelОрганизацияLForm from './forms/i-i-s-otdel-организация-l';
import IISOtdelОтделКрLForm from './forms/i-i-s-otdel-отдел-кр-l';
import IISOtdelПогашКрLForm from './forms/i-i-s-otdel-погаш-кр-l';
import IISOtdelПроверкаКрКлLForm from './forms/i-i-s-otdel-проверка-кр-кл-l';
import IISOtdelСотрудникиLForm from './forms/i-i-s-otdel-сотрудники-l';
import IISOtdelДолжностиEForm from './forms/i-i-s-otdel-должности-e';
import IISOtdelЗаклКрДогEForm from './forms/i-i-s-otdel-закл-кр-дог-e';
import IISOtdelКлиентыEForm from './forms/i-i-s-otdel-клиенты-e';
import IISOtdelОрганизацияEForm from './forms/i-i-s-otdel-организация-e';
import IISOtdelОтделКрEForm from './forms/i-i-s-otdel-отдел-кр-e';
import IISOtdelПогашКрEForm from './forms/i-i-s-otdel-погаш-кр-e';
import IISOtdelПроверкаКрКлEForm from './forms/i-i-s-otdel-проверка-кр-кл-e';
import IISOtdelСотрудникиEForm from './forms/i-i-s-otdel-сотрудники-e';
import IISOtdelДолжностиModel from './models/i-i-s-otdel-должности';
import IISOtdelЗаклКрДогModel from './models/i-i-s-otdel-закл-кр-дог';
import IISOtdelКлиентыModel from './models/i-i-s-otdel-клиенты';
import IISOtdelОрганизацияModel from './models/i-i-s-otdel-организация';
import IISOtdelОтделКрModel from './models/i-i-s-otdel-отдел-кр';
import IISOtdelПогашКрModel from './models/i-i-s-otdel-погаш-кр';
import IISOtdelПроверкаКрКлModel from './models/i-i-s-otdel-проверка-кр-кл';
import IISOtdelСотрудникиModel from './models/i-i-s-otdel-сотрудники';

const translations = {};
$.extend(true, translations, EmberFlexberryTranslations);

$.extend(true, translations, {
  models: {
    'i-i-s-otdel-должности': IISOtdelДолжностиModel,
    'i-i-s-otdel-закл-кр-дог': IISOtdelЗаклКрДогModel,
    'i-i-s-otdel-клиенты': IISOtdelКлиентыModel,
    'i-i-s-otdel-организация': IISOtdelОрганизацияModel,
    'i-i-s-otdel-отдел-кр': IISOtdelОтделКрModel,
    'i-i-s-otdel-погаш-кр': IISOtdelПогашКрModel,
    'i-i-s-otdel-проверка-кр-кл': IISOtdelПроверкаКрКлModel,
    'i-i-s-otdel-сотрудники': IISOtdelСотрудникиModel
  },

  'application-name': 'Otdel',

  forms: {
    loading: {
      'spinner-caption': 'Данные загружаются, пожалуйста подождите...'
    },
    index: {
      greeting: 'Добро пожаловать на тестовый стенд ember-flexberry!'
    },

    application: {
      header: {
        menu: {
          'sitemap-button': {
            title: 'Меню'
          },
          'user-settings-service-checkbox': {
            caption: 'Использовать сервис сохранения пользовательских настроек'
          },
          'show-menu': {
            caption: 'Показать меню'
          },
          'hide-menu': {
            caption: 'Скрыть меню'
          },
          'language-dropdown': {
            caption: 'Язык приложения',
            placeholder: 'Выберите язык'
          }
        },
        login: {
          caption: 'Вход'
        },
        logout: {
          caption: 'Выход'
        }
      },

      footer: {
        'application-name': 'Otdel',
        'application-version': {
          caption: 'Версия аддона {{version}}',
          title: 'Это версия аддона ember-flexberry, которая сейчас используется в этом тестовом приложении ' +
          '(версия npm-пакета + хэш коммита). ' +
          'Кликните, чтобы перейти на GitHub.'
        }
      },

      sitemap: {
        'application-name': {
          caption: 'Otdel',
          title: 'Otdel'
        },
        'application-version': {
          caption: 'Версия аддона {{version}}',
          title: 'Это версия аддона ember-flexberry, которая сейчас используется в этом тестовом приложении ' +
          '(версия npm-пакета + хэш коммита). ' +
          'Кликните, чтобы перейти на GitHub.'
        },
        index: {
          caption: 'Главная',
          title: ''
        },
        otdel: {
          caption: 'Otdel',
          title: 'Otdel',
          'i-i-s-otdel-сотрудники-l': {
            caption: 'Сотрудники',
            title: ''
          },
          'i-i-s-otdel-погаш-кр-l': {
            caption: 'Погаш кр',
            title: ''
          },
          'i-i-s-otdel-проверка-кр-кл-l': {
            caption: 'Проверка кр кл',
            title: ''
          },
          'i-i-s-otdel-закл-кр-дог-l': {
            caption: 'Закл кр дог',
            title: ''
          },
          'i-i-s-otdel-клиенты-l': {
            caption: 'Клиенты',
            title: ''
          },
          'i-i-s-otdel-организация-l': {
            caption: 'Организация',
            title: ''
          },
          'i-i-s-otdel-отдел-кр-l': {
            caption: 'Отдел кр',
            title: ''
          },
          'i-i-s-otdel-должности-l': {
            caption: 'Должности',
            title: ''
          }
        }
      }
    },

    'edit-form': {
      'save-success-message-caption': 'Сохранение завершилось успешно',
      'save-success-message': 'Объект сохранен',
      'save-error-message-caption': 'Ошибка сохранения',
      'delete-success-message-caption': 'Удаление завершилось успешно',
      'delete-success-message': 'Объект удален',
      'delete-error-message-caption': 'Ошибка удаления'
    },
    'i-i-s-otdel-должности-l': IISOtdelДолжностиLForm,
    'i-i-s-otdel-закл-кр-дог-l': IISOtdelЗаклКрДогLForm,
    'i-i-s-otdel-клиенты-l': IISOtdelКлиентыLForm,
    'i-i-s-otdel-организация-l': IISOtdelОрганизацияLForm,
    'i-i-s-otdel-отдел-кр-l': IISOtdelОтделКрLForm,
    'i-i-s-otdel-погаш-кр-l': IISOtdelПогашКрLForm,
    'i-i-s-otdel-проверка-кр-кл-l': IISOtdelПроверкаКрКлLForm,
    'i-i-s-otdel-сотрудники-l': IISOtdelСотрудникиLForm,
    'i-i-s-otdel-должности-e': IISOtdelДолжностиEForm,
    'i-i-s-otdel-закл-кр-дог-e': IISOtdelЗаклКрДогEForm,
    'i-i-s-otdel-клиенты-e': IISOtdelКлиентыEForm,
    'i-i-s-otdel-организация-e': IISOtdelОрганизацияEForm,
    'i-i-s-otdel-отдел-кр-e': IISOtdelОтделКрEForm,
    'i-i-s-otdel-погаш-кр-e': IISOtdelПогашКрEForm,
    'i-i-s-otdel-проверка-кр-кл-e': IISOtdelПроверкаКрКлEForm,
    'i-i-s-otdel-сотрудники-e': IISOtdelСотрудникиEForm
  },

});

export default translations;
