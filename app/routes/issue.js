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
      // model.set('person_name', selected);
    },
    addBookUser(model) {
      var person_name = $('md-autocomplete input').val();
      var name = 'vivek';
      this.store.query('user',{ filter: { firstname: person_name } }).then(function(person){
        model.book.set('user_id', person.get("firstObject").id);
        model.book.set('isAvailable', false);
        model.book.save();
      });
      this.transitionTo('books');
    }
  }
});
