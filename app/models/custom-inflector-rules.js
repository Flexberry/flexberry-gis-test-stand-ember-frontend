import Inflector from 'ember-inflector';

const inflector = Inflector.inflector;

inflector.irregular('address', 'Addresss');
inflector.irregular('author', 'Authors');
inflector.irregular('comment', 'Comments');
inflector.irregular('request', 'Requests');

export default {};
