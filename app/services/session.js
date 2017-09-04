import Ember from 'ember';
import config from '../config/environment';

/**
  Security service (helps to work with access rights).

  @class SessionService
  @extends <a href="http://emberjs.com/api/classes/Ember.Service.html">Ember.Service</a>
*/
export default Ember.Service.extend({
  /**
    Currently authenticated user.

    @property authenticatedUser
    @type String
    @default ''
  */
  authenticatedUser: '',

  /**
    Flag: indicates whether some user is authenticated.

    @property isUserAuthenticated
    @type Boolean
  */
  isUserAuthenticated: Ember.computed('authenticatedUser', function() {
    return !Ember.isBlank(this.get('authenticatedUser'));
  }),

  /**
    Gets currently authenticated user.

    @method logout
    @return {<a href="https://emberjs.com/api/classes/RSVP.Promise.html">Ember.RSVP.Promise</a>} Promise resolving with authenticated user's login.
  */
  getAuthenticatedUser() {
    return new Ember.RSVP.Promise((resolve, reject) => {
      Ember.$.ajax({
        type: 'GET',
        xhrFields: { withCredentials: true },
        url: `${config.APP.backendUrls.api}/GetAuthenticatedUser()`,
        success: (data) => {
          // Empty string means that user isn't authenticated yet.
          let authenticatedUser = data.value || '';
          this.set('authenticatedUser', authenticatedUser);
          resolve(authenticatedUser);
        },
        error: (jqXHR) => {
          reject(`Get authenticated user request failed: ${jqXHR.responseText}`);
        }
      });
    });
  },

  /**
    Logs user in.

    @method login
    @param {String} login User's login.
    @param {String} password User's password.
    @return {<a href="https://emberjs.com/api/classes/RSVP.Promise.html">Ember.RSVP.Promise</a>} Promise resolving when 'login' request succeeds.
  */
  login(login, password) {
    return new Ember.RSVP.Promise((resolve, reject) => {
      Ember.$.ajax({
        type: 'GET',
        xhrFields: { withCredentials: true },
        url: `${config.APP.backendUrls.api}/Login(login='${login}',password='${password}')`,
        success: (data) => {
          if (data.value === true) {
            this.set('authenticatedUser', login);
            resolve();
          } else {
            reject('Wrong login or password');
          }
        },
        error: (jqXHR) => {
          reject(`Login request failed: ${jqXHR.responseText}`);
        },
      });
    });
  },

  /**
    Logs user out.

    @method logout
    @return {<a href="https://emberjs.com/api/classes/RSVP.Promise.html">Ember.RSVP.Promise</a>} Promise resolving when 'logout' request succeeds.
  */
  logout() {
    return new Ember.RSVP.Promise((resolve, reject) => {
      Ember.$.ajax({
        type: 'GET',
        xhrFields: { withCredentials: true },
        url: `${config.APP.backendUrls.api}/Logout()`,
        success: (data) => {
          if (data.value === true) {
            this.set('authenticatedUser', '');
            resolve();
          } else {
            reject(`Logout request failed`);
          }
        },
        error: (jqXHR) => {
          reject(`Logout request failed: ${jqXHR.responseText}`);
        }
      });
    });
  }
});
