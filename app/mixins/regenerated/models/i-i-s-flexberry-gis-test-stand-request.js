import Ember from 'ember';
import DS from 'ember-data';
import { Projection } from 'ember-flexberry-data';
export let Model = Ember.Mixin.create({
  date: DS.attr('date'),
  urgently: DS.attr('boolean'),
  task: DS.attr('string'),
  author: DS.belongsTo('i-i-s-flexberry-gis-test-stand-author', { inverse: null, async: false }),
  address: DS.belongsTo('i-i-s-flexberry-gis-test-stand-address', { inverse: null, async: false }),
  comment: DS.hasMany('i-i-s-flexberry-gis-test-stand-comment', { inverse: 'request', async: false }),
  getValidations: function () {
    let parentValidations = this._super();
    let thisValidations = {
      author: { presence: true },
      address: { presence: true }
    };
    return Ember.$.extend(true, {}, parentValidations, thisValidations);
  },
  init: function () {
    this.set('validations', this.getValidations());
    this._super.apply(this, arguments);
  }
});
export let defineProjections = function (modelClass) {
  modelClass.defineProjection('RequestE', 'i-i-s-flexberry-gis-test-stand-request', {
    date: Projection.attr('Date'),
    urgently: Projection.attr('Urgently'),
    task: Projection.attr('Task'),
    author: Projection.belongsTo('i-i-s-flexberry-gis-test-stand-author', 'Author', {
      name: Projection.attr('Name')
    }, { displayMemberPath: 'name' }),
    address: Projection.belongsTo('i-i-s-flexberry-gis-test-stand-address', 'Address', {
      place: Projection.attr('Place')
    }, { displayMemberPath: 'place' }),
    comment: Projection.hasMany('i-i-s-flexberry-gis-test-stand-comment', 'Comment', {
      text: Projection.attr('Text'),
      type: Projection.attr('Type')
    })
  });
  modelClass.defineProjection('RequestL', 'i-i-s-flexberry-gis-test-stand-request', {
    date: Projection.attr('Date'),
    urgently: Projection.attr('Urgently'),
    task: Projection.attr('Task'),
    author: Projection.belongsTo('i-i-s-flexberry-gis-test-stand-author', 'Name', {
      name: Projection.attr('Name')
    }, { hidden: true }),
    address: Projection.belongsTo('i-i-s-flexberry-gis-test-stand-address', 'Place', {
      place: Projection.attr('Place')
    }, { hidden: true })
  });
};
