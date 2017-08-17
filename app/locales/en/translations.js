import Ember from 'ember';
import EmberFlexberryTranslations from 'ember-flexberry/locales/en/translations';

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
        'flexberry-gis-demo': {
          caption: 'flexberry-gis-demo',
          title: 'flexberry-gis-demo',
          'i-i-s-flexberry-gis-demo-request-l': {
            caption: 'i-i-s-flexberry-gis-demo-request-l',
            title: 'i-i-s-flexberry-gis-demo-request-l',

          },
          'i-i-s-flexberry-gis-demo-address-l': {
            caption: 'i-i-s-flexberry-gis-demo-address-l',
            title: 'i-i-s-flexberry-gis-demo-address-l',

          },
          'i-i-s-flexberry-gis-demo-author-l': {
            caption: 'i-i-s-flexberry-gis-demo-author-l',
            title: 'i-i-s-flexberry-gis-demo-author-l',

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
    'i-i-s-flexberry-gis-demo-address-l': IISFlexberryGisDemoAddressLForm,
    'i-i-s-flexberry-gis-demo-author-l': IISFlexberryGisDemoAuthorLForm,
    'i-i-s-flexberry-gis-demo-request-l': IISFlexberryGisDemoRequestLForm,
    'i-i-s-flexberry-gis-demo-address-e': IISFlexberryGisDemoAddressEForm,
    'i-i-s-flexberry-gis-demo-author-e': IISFlexberryGisDemoAuthorEForm,
    'i-i-s-flexberry-gis-demo-request-e': IISFlexberryGisDemoRequestEForm,
  },

});

export default translations;
