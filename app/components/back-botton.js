import Ember from 'ember';

export default Ember.Component.extend({
  // history: [],
  //
  // hasHistory: function(){
  //   return this.get('history.length')>1;
  // }.property('history.length'),
  //
  // watchHistory: function(){
  //   this.get('history').pushObject(this.get('currentPath'));
  // }.observes('currentPath'),

  actions: {
    goBack(){
      history.back()
    }
  }
});
