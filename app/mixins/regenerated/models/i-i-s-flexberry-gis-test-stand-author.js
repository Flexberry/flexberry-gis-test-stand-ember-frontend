import Ember from 'ember';
import DS from 'ember-data';
import { Projection } from 'ember-flexberry-data';
export let Model = Ember.Mixin.create({
  name: DS.attr('string'),
  phone: DS.attr('number'),
  email: DS.attr('string'),
  birthday: DS.attr('date'),
  gender: DS.attr('i-i-s-flexberry-gis-test-stand-t-gender'),
  vip: DS.attr('boolean'),
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
  modelClass.defineProjection('AuthorE', 'i-i-s-flexberry-gis-test-stand-author', {
    name: Projection.attr('Name'),
    phone: Projection.attr('Phone'),
    email: Projection.attr('Email'),
    birthday: Projection.attr('Birthday'),
    gender: Projection.attr('Gender'),
    vip: Projection.attr('Vip')
  });
  modelClass.defineProjection('AuthorL', 'i-i-s-flexberry-gis-test-stand-author', {
    name: Projection.attr('Name'),
    phone: Projection.attr('Phone'),
    email: Projection.attr('Email'),
    birthday: Projection.attr('Birthday'),
    gender: Projection.attr('Gender'),
    vip: Projection.attr('Vip')
  });
};
