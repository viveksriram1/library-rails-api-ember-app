import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return this.store.findRecord('book', params.book_id);
  },

  actions: {
    updateValue(newValue){
      this.set('model.value', newValue);
    },

    updateBook(book){
      book.save().then(() => this.transitionTo('books'));
    },

    willTransition() {
      this.controller.get('model').rollbackAttributes();
    }
  }
});
