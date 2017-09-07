import Ember from 'ember';
import EmberFlexberryTranslations from 'ember-flexberry/locales/en/translations';

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

  'application-name': 'Application caption',

  forms: {
    loading: {
      'spinner-caption': 'Loading stuff, please have a cold beer...'
    },
    index: {
      greeting: 'Welcome to ember-flexberry test stand!'
    },

    application: {
      header: {
        menu: {
          'sitemap-button': {
            caption: '',
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
        'application-name': 'Application caption',
        'application-version': {
          caption: 'Addon version {{version}}',
          title: 'It is version of ember-flexberry addon, which uses in this dummy application ' +
          '(npm version + commit sha). ' +
          'Click to open commit on GitHub.'
        }
      },

      sitemap: {
        'application-name': {
          caption: 'Application caption',
          title: 'Application title'
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
        'flexberry-gis-test-stand': {
          caption: 'flexberry-gis-test-stand',
          title: 'flexberry-gis-test-stand',
          'i-i-s-flexberry-gis-test-stand-request-l': {
            caption: 'i-i-s-flexberry-gis-test-stand-request-l',
            title: 'i-i-s-flexberry-gis-test-stand-request-l',

          },
          'i-i-s-flexberry-gis-test-stand-address-l': {
            caption: 'i-i-s-flexberry-gis-test-stand-address-l',
            title: 'i-i-s-flexberry-gis-test-stand-address-l',

          },
          'i-i-s-flexberry-gis-test-stand-author-l': {
            caption: 'i-i-s-flexberry-gis-test-stand-author-l',
            title: 'i-i-s-flexberry-gis-test-stand-author-l',

          }
        },
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
    'i-i-s-flexberry-gis-test-stand-address-l': IISFlexberryGisTestStandAddressLForm,
    'i-i-s-flexberry-gis-test-stand-author-l': IISFlexberryGisTestStandAuthorLForm,
    'i-i-s-flexberry-gis-test-stand-request-l': IISFlexberryGisTestStandRequestLForm,
    'i-i-s-flexberry-gis-test-stand-address-e': IISFlexberryGisTestStandAddressEForm,
    'i-i-s-flexberry-gis-test-stand-author-e': IISFlexberryGisTestStandAuthorEForm,
    'i-i-s-flexberry-gis-test-stand-request-e': IISFlexberryGisTestStandRequestEForm,
  },

});

export default translations;
