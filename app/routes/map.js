import EditMapRoute from 'ember-flexberry-gis/routes/edit-map';
import EditFormRouteOperationsIndicationMixin from '../mixins/edit-form-route-operations-indication';

/**
  Map edit route.

  @class MapRoute
  @extends EditMapRoute
  @uses EditFormRouteOperationsIndicationMixin
*/
export default EditMapRoute.extend(
  EditFormRouteOperationsIndicationMixin, {
    setupController(controller) {
      this._super(...arguments);
      controller.set('sidebarOpened', false);
      controller.set('sidebar.2.active', false);
      controller.set('serviceLayer', null);
      controller.set('identifyServiceLayer', null);
    }
  });
