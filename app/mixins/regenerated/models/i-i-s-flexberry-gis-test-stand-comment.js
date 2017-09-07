import Ember from 'ember';
import DS from 'ember-data';
import { Projection } from 'ember-flexberry-data';
export let Model = Ember.Mixin.create({
  text: DS.attr('string'),
  type: DS.attr('i-i-s-flexberry-gis-test-stand-t-status'),
  request: DS.belongsTo('i-i-s-flexberry-gis-test-stand-request', { inverse: 'comment', async: false }),
  getValidations: function () {
    let parentValidations = this._super();
    let thisValidations = {
      request: { presence: true }
    };
    return Ember.$.extend(true, {}, parentValidations, thisValidations);
  },
  init: function () {
    this.set('validations', this.getValidations());
    this._super.apply(this, arguments);
  }
});
export let defineProjections = function (modelClass) {
  modelClass.defineProjection('CommentE', 'i-i-s-flexberry-gis-test-stand-comment', {
    text: Projection.attr('Text'),
    type: Projection.attr('Type')
  });
};
