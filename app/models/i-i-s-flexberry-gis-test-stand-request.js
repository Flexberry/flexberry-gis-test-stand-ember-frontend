import { Model as RequestMixin, defineProjections } from
  '../mixins/regenerated/models/i-i-s-flexberry-gis-test-stand-request';
import { Projection } from 'ember-flexberry-data';
import { Offline } from 'ember-flexberry-data';
let Model = Projection.Model.extend(Offline.ModelMixin, RequestMixin, {

});
defineProjections(Model);
export default Model;
