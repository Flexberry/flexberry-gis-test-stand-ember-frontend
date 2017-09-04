import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function () {
  this.route('i-i-s-flexberry-gis-demo-address-l');
  this.route('i-i-s-flexberry-gis-demo-address-e',
  { path: 'i-i-s-flexberry-gis-demo-address-e/:id' });
  this.route('i-i-s-flexberry-gis-demo-address-e.new',
  { path: 'i-i-s-flexberry-gis-demo-address-e/new' });
  this.route('i-i-s-flexberry-gis-demo-author-l');
  this.route('i-i-s-flexberry-gis-demo-author-e',
  { path: 'i-i-s-flexberry-gis-demo-author-e/:id' });
  this.route('i-i-s-flexberry-gis-demo-author-e.new',
  { path: 'i-i-s-flexberry-gis-demo-author-e/new' });
  this.route('i-i-s-flexberry-gis-demo-request-l');
  this.route('i-i-s-flexberry-gis-demo-request-e',
  { path: 'i-i-s-flexberry-gis-demo-request-e/:id' });
  this.route('i-i-s-flexberry-gis-demo-request-e.new',
  { path: 'i-i-s-flexberry-gis-demo-request-e/new' });
  this.route('login');
});

export default Router;
