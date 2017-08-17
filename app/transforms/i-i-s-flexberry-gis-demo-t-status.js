import FlexberryEnum from 'ember-flexberry-data/transforms/flexberry-enum';
import tStatusEnum from '../enums/i-i-s-flexberry-gis-demo-t-status';

export default FlexberryEnum.extend({
  enum: tStatusEnum,
  sourceType: 'IIS.FlexberryGisDemo.tStatus'
});
