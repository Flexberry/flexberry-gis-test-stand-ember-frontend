import EditMapNewRoute from 'ember-flexberry-gis/routes/edit-map-new';
import EditFormRouteOperationsIndicationMixin from '../../mixins/edit-form-route-operations-indication';

/**
  New map edit route.
  @class NewMapRoute
  @extends EditMapNewRoute
  @uses EditFormRouteOperationsIndicationMixin
*/
export default EditMapNewRoute.extend(EditFormRouteOperationsIndicationMixin, {
  /**
    Name of template to be rendered.
    @property templateName
    @type String
    @default 'map/new'
  */
  templateName: 'map/new'
});
