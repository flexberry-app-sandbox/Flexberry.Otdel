import { Serializer as ПогашКрSerializer } from
  '../mixins/regenerated/serializers/i-i-s-otdel-погаш-кр';
import __ApplicationSerializer from './application';

export default __ApplicationSerializer.extend(ПогашКрSerializer, {
  /**
  * Field name where object identifier is kept.
  */
  primaryKey: '__PrimaryKey'
});
