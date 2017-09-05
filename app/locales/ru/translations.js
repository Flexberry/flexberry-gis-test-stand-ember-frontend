import Ember from 'ember';
import EmberFlexberryTranslations from 'ember-flexberry/locales/ru/translations';

import IISFlexberryGisDemoAddressLForm from './forms/i-i-s-flexberry-gis-demo-address-l';
import IISFlexberryGisDemoAuthorLForm from './forms/i-i-s-flexberry-gis-demo-author-l';
import IISFlexberryGisDemoRequestLForm from './forms/i-i-s-flexberry-gis-demo-request-l';
import IISFlexberryGisDemoAddressEForm from './forms/i-i-s-flexberry-gis-demo-address-e';
import IISFlexberryGisDemoAuthorEForm from './forms/i-i-s-flexberry-gis-demo-author-e';
import IISFlexberryGisDemoRequestEForm from './forms/i-i-s-flexberry-gis-demo-request-e';
import IISFlexberryGisDemoAddressModel from './models/i-i-s-flexberry-gis-demo-address';
import IISFlexberryGisDemoAuthorModel from './models/i-i-s-flexberry-gis-demo-author';
import IISFlexberryGisDemoCommentModel from './models/i-i-s-flexberry-gis-demo-comment';
import IISFlexberryGisDemoRequestModel from './models/i-i-s-flexberry-gis-demo-request';

const translations = {};
Ember.$.extend(true, translations, EmberFlexberryTranslations);

Ember.$.extend(true, translations, {
  models: {
    'i-i-s-flexberry-gis-demo-address': IISFlexberryGisDemoAddressModel,
    'i-i-s-flexberry-gis-demo-author': IISFlexberryGisDemoAuthorModel,
    'i-i-s-flexberry-gis-demo-comment': IISFlexberryGisDemoCommentModel,
    'i-i-s-flexberry-gis-demo-request': IISFlexberryGisDemoRequestModel,
  },

  'application-name': 'Flexberry gis demo',

  forms: {
    loading: {
      'spinner-caption': 'Данные загружаются, пожалуйста подождите...'
    },
    index: {
      greeting: 'Добро пожаловать на тестовый стенд ember-flexberry!'
    },

    login: {
      caption: 'Войти в систему',
      personalArea: 'Личный кабинет',
      logout: 'Выйти',
      back: 'Назад',
      login: 'Логин',
      enter: 'Войти',
      password: 'Пароль',
      'you-logged-as': 'Вы вошли как: "{{login}}".',
      errors: {
        'empty-login': 'Логин не может быть пустым.',
        'empty-password': 'Пароль не может быть пустым.',
        'server-error': 'Не удалось получить ответ от сервера.',
        'incorrect-auth-data': 'Неверный логин или пароль.',
        'login-please': 'Пожалуйста, войдите.',
        'unknown-error': 'Ой, что то пошло не так...',
      },
    },

    application: {
      header: {
        menu: {
          'sitemap-button': {
            caption: '',
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
        'application-name': 'Flexberry gis demo',
        'application-version': {
          caption: 'Версия аддона {{version}}',
          title: 'Это версия аддона ember-flexberry, которая сейчас используется в этом тестовом приложении ' +
          '(версия npm-пакета + хэш коммита). ' +
          'Кликните, чтобы перейти на GitHub.'
        }
      },

      sitemap: {
        'application-name': {
          caption: 'Flexberry gis demo',
          title: 'Flexberry gis demo'
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
        'flexberry-gis-demo': {
          caption: 'FlexberryGisDemo',
          title: 'FlexberryGisDemo',
          'i-i-s-flexberry-gis-demo-request-l': {
            caption: 'Request',
            title: '',

          },
          'i-i-s-flexberry-gis-demo-address-l': {
            caption: 'Address',
            title: '',

          },
          'i-i-s-flexberry-gis-demo-author-l': {
            caption: 'Author',
            title: '',

          }
        },
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
    'i-i-s-flexberry-gis-demo-address-l': IISFlexberryGisDemoAddressLForm,
    'i-i-s-flexberry-gis-demo-author-l': IISFlexberryGisDemoAuthorLForm,
    'i-i-s-flexberry-gis-demo-request-l': IISFlexberryGisDemoRequestLForm,
    'i-i-s-flexberry-gis-demo-address-e': IISFlexberryGisDemoAddressEForm,
    'i-i-s-flexberry-gis-demo-author-e': IISFlexberryGisDemoAuthorEForm,
    'i-i-s-flexberry-gis-demo-request-e': IISFlexberryGisDemoRequestEForm,
  },

});

export default translations;
