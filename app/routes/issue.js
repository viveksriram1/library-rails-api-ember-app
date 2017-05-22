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
      var user = this.store.peekRecord('user', 1);

      // this.store.findRecord('book', model.book.id).then(function(book){
      //   book.get('user').pushObject(user);
      //   book.save();
      // })

      this.store.findRecord('user',1).then(function(person){
        model.book.set('user', person);
        model.book.save();
        // model.book.set('isAvailable', false);
        // model.book.save();
      });
      this.transitionTo('books');
    }
  }
});
