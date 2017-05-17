import Ember from 'ember';

export default Ember.Route.extend({
  model(params){
    return Ember.RSVP.hash({
      book: this.store.findRecord('book', params.book_id),
      people: this.store.findAll('User', 'name')
    });
  },

  actions: {
    addBookPerson() {
      // model.set('person_name', selected);
    },
    addPersonToBook(model) {
      var person_name = $('md-autocomplete input').val();
      // this.store.query('user', { orderBy: 'name', equalTo: person_name }).then(function(user){
      //   model.book.set('user', user);
      //   model.book.set('isAvailable', false);
      //   model.book.save();
      // });
      this.transitionTo('books');
    }
  }
});
