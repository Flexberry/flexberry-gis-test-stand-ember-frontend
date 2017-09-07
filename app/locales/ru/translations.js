import Ember from 'ember';
import EmberFlexberryTranslations from 'ember-flexberry/locales/ru/translations';

import IISFlexberryGisTestStandAddressLForm from './forms/i-i-s-flexberry-gis-test-stand-address-l';
import IISFlexberryGisTestStandAuthorLForm from './forms/i-i-s-flexberry-gis-test-stand-author-l';
import IISFlexberryGisTestStandRequestLForm from './forms/i-i-s-flexberry-gis-test-stand-request-l';
import IISFlexberryGisTestStandAddressEForm from './forms/i-i-s-flexberry-gis-test-stand-address-e';
import IISFlexberryGisTestStandAuthorEForm from './forms/i-i-s-flexberry-gis-test-stand-author-e';
import IISFlexberryGisTestStandRequestEForm from './forms/i-i-s-flexberry-gis-test-stand-request-e';
import IISFlexberryGisTestStandAddressModel from './models/i-i-s-flexberry-gis-test-stand-address';
import IISFlexberryGisTestStandAuthorModel from './models/i-i-s-flexberry-gis-test-stand-author';
import IISFlexberryGisTestStandCommentModel from './models/i-i-s-flexberry-gis-test-stand-comment';
import IISFlexberryGisTestStandRequestModel from './models/i-i-s-flexberry-gis-test-stand-request';

const translations = {};
Ember.$.extend(true, translations, EmberFlexberryTranslations);

Ember.$.extend(true, translations, {
  models: {
    'i-i-s-flexberry-gis-test-stand-address': IISFlexberryGisTestStandAddressModel,
    'i-i-s-flexberry-gis-test-stand-author': IISFlexberryGisTestStandAuthorModel,
    'i-i-s-flexberry-gis-test-stand-comment': IISFlexberryGisTestStandCommentModel,
    'i-i-s-flexberry-gis-test-stand-request': IISFlexberryGisTestStandRequestModel,
  },

  'application-name': 'Flexberry gis test stand',

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
        'application-name': 'Flexberry gis test stand',
        'application-version': {
          caption: 'Версия аддона {{version}}',
          title: 'Это версия аддона ember-flexberry, которая сейчас используется в этом тестовом приложении ' +
          '(версия npm-пакета + хэш коммита). ' +
          'Кликните, чтобы перейти на GitHub.'
        }
      },

      sitemap: {
        'application-name': {
          caption: 'Flexberry gis test stand',
          title: 'Flexberry gis test stand'
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
        'flexberry-gis-test-stand': {
          caption: 'FlexberryGisTestStand',
          title: 'FlexberryGisTestStand',
          'i-i-s-flexberry-gis-test-stand-request-l': {
            caption: 'Request',
            title: '',

          },
          'i-i-s-flexberry-gis-test-stand-address-l': {
            caption: 'Address',
            title: '',

          },
          'i-i-s-flexberry-gis-test-stand-author-l': {
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
    'i-i-s-flexberry-gis-test-stand-address-l': IISFlexberryGisTestStandAddressLForm,
    'i-i-s-flexberry-gis-test-stand-author-l': IISFlexberryGisTestStandAuthorLForm,
    'i-i-s-flexberry-gis-test-stand-request-l': IISFlexberryGisTestStandRequestLForm,
    'i-i-s-flexberry-gis-test-stand-address-e': IISFlexberryGisTestStandAddressEForm,
    'i-i-s-flexberry-gis-test-stand-author-e': IISFlexberryGisTestStandAuthorEForm,
    'i-i-s-flexberry-gis-test-stand-request-e': IISFlexberryGisTestStandRequestEForm,
  },

});

export default translations;
