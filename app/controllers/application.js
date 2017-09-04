import Ember from 'ember';
import config from '../config/environment';
import { translationMacro as t } from 'ember-i18n';
export default Ember.Controller.extend({

  /**
    Currently authenticated user's login.

    @property login
    @default ''
  */
  login: '',

  /**
    Application sitemap.

    @property sitemap
    @type Object
  */
  sitemap: Ember.computed('i18n.locale', function () {
    let i18n = this.get('i18n');

    return {
      nodes: [
        {
          link: 'index',
          caption: i18n.t('forms.application.sitemap.index.caption'),
          title: i18n.t('forms.application.sitemap.index.title'),
          children: null
        }, {
          link: null,
          caption: i18n.t('forms.application.sitemap.flexberry-gis-demo.caption'),
          title: i18n.t('forms.application.sitemap.flexberry-gis-demo.title'),
          children: [{
            link: 'i-i-s-flexberry-gis-demo-request-l',
            caption: i18n.t('forms.application.sitemap.flexberry-gis-demo.i-i-s-flexberry-gis-demo-request-l.caption'),
            title: i18n.t('forms.application.sitemap.flexberry-gis-demo.i-i-s-flexberry-gis-demo-request-l.title'),
            children: null
          }, {
            link: 'i-i-s-flexberry-gis-demo-address-l',
            caption: i18n.t('forms.application.sitemap.flexberry-gis-demo.i-i-s-flexberry-gis-demo-address-l.caption'),
            title: i18n.t('forms.application.sitemap.flexberry-gis-demo.i-i-s-flexberry-gis-demo-address-l.title'),
            children: null
          }, {
            link: 'i-i-s-flexberry-gis-demo-author-l',
            caption: i18n.t('forms.application.sitemap.flexberry-gis-demo.i-i-s-flexberry-gis-demo-author-l.caption'),
            title: i18n.t('forms.application.sitemap.flexberry-gis-demo.i-i-s-flexberry-gis-demo-author-l.title'),
            children: null
          }]
        }
      ]
    };
  }),

  /**
    Locales supported by application.

    @property locales
    @type String[]
    @default ['ru', 'en']
  */
  locales: ['ru', 'en'],

  /**
    Handles changes in userSettingsService.isUserSettingsServiceEnabled.

    @method _userSettingsServiceChanged
    @private
  */
  _userSettingsServiceChanged: Ember.observer('userSettingsService.isUserSettingsServiceEnabled', function() {
    this.get('target.router').refresh();
  }),

  /**
    Initializes controller.
  */
  init() {
    this._super(...arguments);

    let i18n = this.get('i18n');
    if (Ember.isNone(i18n)) {
      return;
    }

    // If i18n.locale is long value like 'ru-RU', 'en-GB', ... this code will return short variant 'ru', 'en', etc.
    let shortCurrentLocale = this.get('i18n.locale').split('-')[0];
    let availableLocales = Ember.A(this.get('locales'));

    // Force current locale to be one of available,
    // if browser's current language is not supported by dummy application,
    // or if browser's current locale is long value like 'ru-RU', 'en-GB', etc.
    if (!availableLocales.contains(shortCurrentLocale)) {
      i18n.set('locale', 'en');
    } else {
      i18n.set('locale', shortCurrentLocale);
    }
  },

  /**
    Service that triggers objectlistview events.

    @property objectlistviewEventsService
    @type Service
  */
  objectlistviewEventsService: Ember.inject.service('objectlistview-events'),

  actions: {

    /**
      Toggles application sitemap's side bar.

      @method actions.toggleSidebar
    */
    toggleSidebar() {
      let sidebar = Ember.$('.ui.sidebar.main.menu');
      let objectlistviewEventsService = this.get('objectlistviewEventsService');
      sidebar.sidebar({
        closable: false,
        dimPage: false,
        onHide: function() {
          Ember.$('.sidebar.icon.text-menu-1').removeClass('hidden-menu');
          Ember.$('.sidebar.icon.text-menu-2').addClass('hidden-menu');
        },
        onHidden: function() {
          objectlistviewEventsService.updateWidthTrigger();
        }
      }).sidebar('toggle');

      if (Ember.$('.inverted.vertical.main.menu').hasClass('visible')) {
        Ember.$('.sidebar.icon.text-menu-1').removeClass('hidden-menu');
        Ember.$('.sidebar.icon.text-menu-2').addClass('hidden-menu');
      } else {
        Ember.$('.sidebar.icon.text-menu-1').addClass('hidden-menu');
        Ember.$('.sidebar.icon.text-menu-2').removeClass('hidden-menu');
      }

      if (Ember.$('.inverted.vertical.main.menu').hasClass('visible')) {
        Ember.$('.full.height').css({ transition: 'width 0.45s ease-in-out 0s', width: '100%' });
      } else {
        Ember.$('.full.height').css({ transition: 'width 0.3s ease-in-out 0s', width: 'calc(100% - ' + sidebar.width() + 'px)' });
      }
    },

    toggleSidebarMobile() {
      let sidebar = Ember.$('.ui.sidebar.main.menu');
      let objectlistviewEventsService = this.get('objectlistviewEventsService');
      sidebar.sidebar({
        onHide: function() {
          Ember.$('.sidebar.icon.text-menu-1').removeClass('hidden-menu');
          Ember.$('.sidebar.icon.text-menu-2').addClass('hidden-menu');
        },
        onHidden: function() {
          objectlistviewEventsService.updateWidthTrigger();
        }
      }).sidebar('toggle');

      if (Ember.$('.inverted.vertical.main.menu').hasClass('visible')) {
        Ember.$('.sidebar.icon.text-menu-1').removeClass('hidden-menu');
        Ember.$('.sidebar.icon.text-menu-2').addClass('hidden-menu');
        Ember.$('.bgw-opacity').addClass('hidden');
      } else {
        Ember.$('.sidebar.icon.text-menu-1').addClass('hidden-menu');
        Ember.$('.sidebar.icon.text-menu-2').removeClass('hidden-menu');
        Ember.$('.bgw-opacity').removeClass('hidden');
      }
    },

    /**
      Close sidebar.

      @method actions.closeSidebar
    */
    closeSidebar() {
      if (Ember.$('.inverted.vertical.main.menu').hasClass('visible')) {
        this.send('toggleSidebar');
      }
    },

    /**
      logs in.

      @method actions.login
    */
    login() {
      let _this = this;
      let login = _this.get('loginInput');
      let password = _this.get('password');
      if (login && password) {
        _this._resetLoginErrors();
        _this.set('tryToLogin', true);
        Ember.$.ajax({
          type: 'GET',
          xhrFields: {
            withCredentials: true
          },
          url: `${config.APP.backendUrls.api}/Login(login='${login}',password='${password}')`,
          success(result) {
            _this.set('tryToLogin', false);
            if (result.value === true) {
              _this._resetLoginData(login);
              _this.transitionToRoute('index');
            } else {
              _this.set('errorMessage', t('forms.login.errors.incorrect-auth-data'));
            }
          },
          error() {
            _this.set('tryToLogin', false);
            _this.set('errorMessage', t('forms.login.errors.server-error'));
          },
        });
      } else {
        if (!login) {
          _this.set('emptyLogin', t('forms.login.errors.empty-login'));
        }

        if (!password) {
          _this.set('emptyPassword', t('forms.login.errors.empty-password'));
        }
      }
    },

    /**
      Logs out.

      @method actions.logout
    */
    logout() {
      let _this = this;
      Ember.$.ajax({
        type: 'GET',
        xhrFields: {
          withCredentials: true
        },
        url: `${config.APP.backendUrls.api}/Logout()`,
        success(result) {
          if (result.value === true) {
            _this.set('login', '');
            _this.send('closeSidebar');
          } else {
            _this.set('errorMessage', t('forms.login.errors.unknown-error'));
          }

          _this.transitionToRoute('index');
        },
        error() {
          _this.set('errorMessage', t('forms.login.errors.server-error'));
          _this.transitionToRoute('index');
        },
      });
    },

    /**
      Transits into main page.

      @method actions.goToMainPage
    */
    goToMainPage() {
      this.transitionToRoute('index');
    },

    /**
      Transits into login form.

      @method actions.goToLoginForm
    */
    goToLoginForm() {
      this.transitionToRoute('login');
    },

    /**
      Closes login form.

      @method. actions.closeLoginForm
    */
    closeLoginForm() {
      this._resetLoginErrors();
      this.transitionToRoute('index');
    }
  },

  /**
    Resets logn errors.

    @method _resetLoginErrors
  */
  _resetLoginErrors() {
    this.setProperties({
      errorMessage: null,
      emptyLogin: null,
      emptyPassword: null,
    });
  },

  /**
    Resets stored login data.

    @method _resetLoginData
    @param {String} login
  */
  _resetLoginData(login) {
    this.setProperties({
      login: login,
      loginInput: null,
      password: null,
    });
  }
});
