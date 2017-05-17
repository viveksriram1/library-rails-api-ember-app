import DS from 'ember-data';

export default DS.Model.extend({
  title: DS.attr('string'),
  image: DS.attr('string'),
  condition: DS.attr('string'),
  isAvailable: DS.attr('boolean'),
  author: DS.attr('string'),
  description: DS.attr('string'),
  date: DS.attr('date'),
  user_id: DS.attr('number'),
  user: DS.belongsTo('user')
});
