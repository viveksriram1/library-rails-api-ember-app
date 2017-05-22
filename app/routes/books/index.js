import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return this.store.findAll('book');
  },

  actions: {
    collect(model){
      let confirmation = confirm("Are you sure that you have collected this book ?")
      model.set('user', null);
      model.save();
    }
  }
});
