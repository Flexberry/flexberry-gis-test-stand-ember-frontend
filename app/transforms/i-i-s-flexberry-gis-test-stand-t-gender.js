import FlexberryEnum from 'ember-flexberry-data/transforms/flexberry-enum';
import tGenderEnum from '../enums/i-i-s-flexberry-gis-test-stand-t-gender';

export default FlexberryEnum.extend({
  enum: tGenderEnum,
  sourceType: 'IIS.FlexberryGisTestStand.tGender'
});
