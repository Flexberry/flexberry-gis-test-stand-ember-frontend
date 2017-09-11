import ListFormRoute from 'ember-flexberry/routes/list-form';

/**
  Maps list route.

  @class MapsRoute
  @extends ListMapRoute
*/
export default ListFormRoute.extend({
  /**
    Name of model projection to be used as record's properties limitation.
    @property modelProjection
    @type String
    @default 'MapL'
  */
  modelProjection: 'MapL',

  /**
    Name of model to be used as form's record type.
    @property modelName
    @type String
    @default 'new-platform-flexberry-g-i-s-map'
  */
  modelName: 'new-platform-flexberry-g-i-s-map',

  /**
    developerUserSettings.
    {
    <componentName>: {
      <settingName>: {
          colsOrder: [ { propName :<colName>, hide: true|false }, ... ],
          sorting: [{ propName: <colName>, direction: "asc"|"desc" }, ... ],
          colsWidths: [ <colName>:<colWidth>, ... ],
        },
        ...
      },
      ...
    }
    For default userSetting use empty name ('').
    <componentName> may contain any of properties: colsOrder, sorting, colsWidth or being empty.
    @property developerUserSettings
    @type Object
    @default {}
  */
  developerUserSettings: { MapsObjectListView: {} }
});
