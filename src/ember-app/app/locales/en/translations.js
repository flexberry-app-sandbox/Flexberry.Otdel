import $ from 'jquery';
import EmberFlexberryTranslations from 'ember-flexberry/locales/en/translations';

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
      'spinner-caption': 'Loading stuff, please wait for a moment...'
    },
    index: {
      greeting: 'Welcome to ember-flexberry test stand!'
    },

    application: {
      header: {
        menu: {
          'sitemap-button': {
            title: 'Menu'
          },
          'user-settings-service-checkbox': {
            caption: 'Use service to save user settings'
          },
          'show-menu': {
            caption: 'Show menu'
          },
          'hide-menu': {
            caption: 'Hide menu'
          },
          'language-dropdown': {
            caption: 'Application language',
            placeholder: 'Choose language'
          }
        },
        login: {
          caption: 'Login'
        },
        logout: {
          caption: 'Logout'
        }
      },

      footer: {
        'application-name': 'Otdel',
        'application-version': {
          caption: 'Addon version {{version}}',
          title: 'It is version of ember-flexberry addon, which uses in this dummy application ' +
          '(npm version + commit sha). ' +
          'Click to open commit on GitHub.'
        }
      },

      sitemap: {
        'application-name': {
          caption: 'Otdel',
          title: 'Otdel'
        },
        'application-version': {
          caption: 'Addon version {{version}}',
          title: 'It is version of ember-flexberry addon, which uses in this dummy application ' +
          '(npm version + commit sha). ' +
          'Click to open commit on GitHub.'
        },
        index: {
          caption: 'Home',
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
      'save-success-message-caption': 'Save operation succeed',
      'save-success-message': 'Object saved',
      'save-error-message-caption': 'Save operation failed',
      'delete-success-message-caption': 'Delete operation succeed',
      'delete-success-message': 'Object deleted',
      'delete-error-message-caption': 'Delete operation failed'
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
