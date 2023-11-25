import Controller from '@ember/controller';
import { computed } from '@ember/object';

export default Controller.extend({
  sitemap: computed('i18n.locale', function () {
    let i18n = this.get('i18n');

    return {
      nodes: [
        {
          link: 'index',
          icon: 'home',
          caption: i18n.t('forms.application.sitemap.index.caption'),
          title: i18n.t('forms.application.sitemap.index.title'),
          children: null
        }, {
          link: null,
          icon: 'list',
          caption: i18n.t('forms.application.sitemap.otdel.caption'),
          title: i18n.t('forms.application.sitemap.otdel.title'),
          children: [{
            link: 'i-i-s-otdel-сотрудники-l',
            caption: i18n.t('forms.application.sitemap.otdel.i-i-s-otdel-сотрудники-l.caption'),
            title: i18n.t('forms.application.sitemap.otdel.i-i-s-otdel-сотрудники-l.title'),
            icon: 'edit',
            children: null
          }, {
            link: 'i-i-s-otdel-погаш-кр-l',
            caption: i18n.t('forms.application.sitemap.otdel.i-i-s-otdel-погаш-кр-l.caption'),
            title: i18n.t('forms.application.sitemap.otdel.i-i-s-otdel-погаш-кр-l.title'),
            icon: 'archive',
            children: null
          }, {
            link: 'i-i-s-otdel-проверка-кр-кл-l',
            caption: i18n.t('forms.application.sitemap.otdel.i-i-s-otdel-проверка-кр-кл-l.caption'),
            title: i18n.t('forms.application.sitemap.otdel.i-i-s-otdel-проверка-кр-кл-l.title'),
            icon: 'paperclip',
            children: null
          }, {
            link: 'i-i-s-otdel-закл-кр-дог-l',
            caption: i18n.t('forms.application.sitemap.otdel.i-i-s-otdel-закл-кр-дог-l.caption'),
            title: i18n.t('forms.application.sitemap.otdel.i-i-s-otdel-закл-кр-дог-l.title'),
            icon: 'file',
            children: null
          }, {
            link: 'i-i-s-otdel-клиенты-l',
            caption: i18n.t('forms.application.sitemap.otdel.i-i-s-otdel-клиенты-l.caption'),
            title: i18n.t('forms.application.sitemap.otdel.i-i-s-otdel-клиенты-l.title'),
            icon: 'list',
            children: null
          }, {
            link: 'i-i-s-otdel-организация-l',
            caption: i18n.t('forms.application.sitemap.otdel.i-i-s-otdel-организация-l.caption'),
            title: i18n.t('forms.application.sitemap.otdel.i-i-s-otdel-организация-l.title'),
            icon: 'tags',
            children: null
          }, {
            link: 'i-i-s-otdel-отдел-кр-l',
            caption: i18n.t('forms.application.sitemap.otdel.i-i-s-otdel-отдел-кр-l.caption'),
            title: i18n.t('forms.application.sitemap.otdel.i-i-s-otdel-отдел-кр-l.title'),
            icon: 'building',
            children: null
          }, {
            link: 'i-i-s-otdel-должности-l',
            caption: i18n.t('forms.application.sitemap.otdel.i-i-s-otdel-должности-l.caption'),
            title: i18n.t('forms.application.sitemap.otdel.i-i-s-otdel-должности-l.title'),
            icon: 'archive',
            children: null
          }]
        }
      ]
    };
  }),
})