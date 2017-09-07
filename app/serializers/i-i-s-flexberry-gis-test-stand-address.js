import { Serializer as AddressSerializer } from
  '../mixins/regenerated/serializers/i-i-s-flexberry-gis-test-stand-address';
import __ApplicationSerializer from './application';

export default __ApplicationSerializer.extend(AddressSerializer, {
  /**
  * Field name where object identifier is kept.
  */
  primaryKey: '__PrimaryKey'
});
