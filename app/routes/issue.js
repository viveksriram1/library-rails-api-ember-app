import Ember from 'ember';

export default Ember.Route.extend({
  // userNames: [],
  //
  // beforeModel() {
  //   this.store.findAll('User').then(function(users) {
  //     this.get('userNames').push(users.getEach('firstname'))
  //   });
  // },

  model(params){
    return Ember.RSVP.hash({
      book: this.store.peekRecord('Book', params.book_id),
      users:  this.store.findAll('User', 'firstname')
    });
  },

  actions: {
    addBookPerson() {
      model.set('person_name', selected);
    },
    addBookUser(model) {
      var person_name = $('md-autocomplete input').val();
      this.store.query('user', { orderBy: 'firstname', equalTo: person_name }).then(function(user){
        model.book.set('user', user);
        model.book.set('isAvailable', false);
        model.book.save();
      });
      this.transitionTo('books');
    }
  }
});
