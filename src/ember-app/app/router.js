import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType
});

Router.map(function () {
  this.route('i-i-s-otdel-должности-l');
  this.route('i-i-s-otdel-должности-e',
  { path: 'i-i-s-otdel-должности-e/:id' });
  this.route('i-i-s-otdel-должности-e.new',
  { path: 'i-i-s-otdel-должности-e/new' });
  this.route('i-i-s-otdel-закл-кр-дог-l');
  this.route('i-i-s-otdel-закл-кр-дог-e',
  { path: 'i-i-s-otdel-закл-кр-дог-e/:id' });
  this.route('i-i-s-otdel-закл-кр-дог-e.new',
  { path: 'i-i-s-otdel-закл-кр-дог-e/new' });
  this.route('i-i-s-otdel-клиенты-l');
  this.route('i-i-s-otdel-клиенты-e',
  { path: 'i-i-s-otdel-клиенты-e/:id' });
  this.route('i-i-s-otdel-клиенты-e.new',
  { path: 'i-i-s-otdel-клиенты-e/new' });
  this.route('i-i-s-otdel-организация-l');
  this.route('i-i-s-otdel-организация-e',
  { path: 'i-i-s-otdel-организация-e/:id' });
  this.route('i-i-s-otdel-организация-e.new',
  { path: 'i-i-s-otdel-организация-e/new' });
  this.route('i-i-s-otdel-отдел-кр-l');
  this.route('i-i-s-otdel-отдел-кр-e',
  { path: 'i-i-s-otdel-отдел-кр-e/:id' });
  this.route('i-i-s-otdel-отдел-кр-e.new',
  { path: 'i-i-s-otdel-отдел-кр-e/new' });
  this.route('i-i-s-otdel-погаш-кр-l');
  this.route('i-i-s-otdel-погаш-кр-e',
  { path: 'i-i-s-otdel-погаш-кр-e/:id' });
  this.route('i-i-s-otdel-погаш-кр-e.new',
  { path: 'i-i-s-otdel-погаш-кр-e/new' });
  this.route('i-i-s-otdel-проверка-кр-кл-l');
  this.route('i-i-s-otdel-проверка-кр-кл-e',
  { path: 'i-i-s-otdel-проверка-кр-кл-e/:id' });
  this.route('i-i-s-otdel-проверка-кр-кл-e.new',
  { path: 'i-i-s-otdel-проверка-кр-кл-e/new' });
  this.route('i-i-s-otdel-сотрудники-l');
  this.route('i-i-s-otdel-сотрудники-e',
  { path: 'i-i-s-otdel-сотрудники-e/:id' });
  this.route('i-i-s-otdel-сотрудники-e.new',
  { path: 'i-i-s-otdel-сотрудники-e/new' });
});

export default Router;
