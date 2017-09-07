import FlexberryEnum from 'ember-flexberry-data/transforms/flexberry-enum';
import tStatusEnum from '../enums/i-i-s-flexberry-gis-test-stand-t-status';

export default FlexberryEnum.extend({
  enum: tStatusEnum,
  sourceType: 'IIS.FlexberryGisTestStand.tStatus'
});
