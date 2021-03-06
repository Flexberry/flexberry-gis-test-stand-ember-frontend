import ListFormController from 'ember-flexberry/controllers/list-form';

/**
  Maps controller.

  @class MapsController
  @extends ListFormController
*/
export default ListFormController.extend({
  /**
    Name of related edit form route.

    @property editFormRoute
    @type String
    @default 'map'
  */
  editFormRoute: 'map'
});
