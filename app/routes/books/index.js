import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return this.store.findAll('book');
  },

  actions: {
    collect(model){
      let confirmation = confirm("Are you sure that you have collected this book ?");
      if (confirmation){
        model.set('user', null);
        model.save().then(() => this.get('router').transitionTo('books'));
      }
    }
  }
});
