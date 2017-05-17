import DS from 'ember-data';

export default DS.Model.extend({
  firstname: DS.attr('string'),
  lastname: DS.attr('string'),
  email: DS.attr('string'),
  img_url: DS.attr('string'),
  book_id: DS.attr('number'),
  book: DS.belongsTo('book')
});
