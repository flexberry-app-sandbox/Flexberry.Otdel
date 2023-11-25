import { Serializer as ЗаклКрДогSerializer } from
  '../mixins/regenerated/serializers/i-i-s-otdel-закл-кр-дог';
import __ApplicationSerializer from './application';

export default __ApplicationSerializer.extend(ЗаклКрДогSerializer, {
  /**
  * Field name where object identifier is kept.
  */
  primaryKey: '__PrimaryKey'
});
