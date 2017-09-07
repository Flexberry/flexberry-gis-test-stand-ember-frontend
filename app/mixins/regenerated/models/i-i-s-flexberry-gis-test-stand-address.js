import Ember from 'ember';
import DS from 'ember-data';
import { Projection } from 'ember-flexberry-data';
export let Model = Ember.Mixin.create({
  place: DS.attr('string'),
  location: DS.attr('string'),
  getValidations: function () {
    let parentValidations = this._super();
    let thisValidations = {
    };
    return Ember.$.extend(true, {}, parentValidations, thisValidations);
  },
  init: function () {
    this.set('validations', this.getValidations());
    this._super.apply(this, arguments);
  }
});
export let defineProjections = function (modelClass) {
  modelClass.defineProjection('AddressE', 'i-i-s-flexberry-gis-test-stand-address', {
    place: Projection.attr('Place'),
    location: Projection.attr('Location')
  });
  modelClass.defineProjection('AddressL', 'i-i-s-flexberry-gis-test-stand-address', {
    place: Projection.attr('Place'),
    location: Projection.attr('Location')
  });
};
