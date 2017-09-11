import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function () {
  this.route('i-i-s-flexberry-gis-test-stand-address-l');
  this.route('i-i-s-flexberry-gis-test-stand-address-e',
  { path: 'i-i-s-flexberry-gis-test-stand-address-e/:id' });
  this.route('i-i-s-flexberry-gis-test-stand-address-e.new',
  { path: 'i-i-s-flexberry-gis-test-stand-address-e/new' });
  this.route('i-i-s-flexberry-gis-test-stand-author-l');
  this.route('i-i-s-flexberry-gis-test-stand-author-e',
  { path: 'i-i-s-flexberry-gis-test-stand-author-e/:id' });
  this.route('i-i-s-flexberry-gis-test-stand-author-e.new',
  { path: 'i-i-s-flexberry-gis-test-stand-author-e/new' });
  this.route('i-i-s-flexberry-gis-test-stand-request-l');
  this.route('i-i-s-flexberry-gis-test-stand-request-e',
  { path: 'i-i-s-flexberry-gis-test-stand-request-e/:id' });
  this.route('i-i-s-flexberry-gis-test-stand-request-e.new',
  { path: 'i-i-s-flexberry-gis-test-stand-request-e/new' });

  this.route('maps');
  this.route('map', { path: 'maps/:id' });
  this.route('map.new', { path: 'maps/new' });
});

export default Router;
