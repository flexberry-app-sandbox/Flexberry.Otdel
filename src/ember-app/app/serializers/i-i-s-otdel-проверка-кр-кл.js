import { Serializer as ПроверкаКрКлSerializer } from
  '../mixins/regenerated/serializers/i-i-s-otdel-проверка-кр-кл';
import __ApplicationSerializer from './application';

export default __ApplicationSerializer.extend(ПроверкаКрКлSerializer, {
  /**
  * Field name where object identifier is kept.
  */
  primaryKey: '__PrimaryKey'
});
