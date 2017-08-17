import { Model as AuthorMixin, defineProjections } from
  '../mixins/regenerated/models/i-i-s-flexberry-gis-demo-author';
import { Projection } from 'ember-flexberry-data';
import { Offline } from 'ember-flexberry-data';
let Model = Projection.Model.extend(Offline.ModelMixin, AuthorMixin, {

});
defineProjections(Model);
export default Model;
