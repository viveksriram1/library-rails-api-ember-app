import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('books', function() {
    this.route('new');
    // this.route('books/:book_id/edit');
    this.route('edit', { path: '/:book_id/edit' });
  });
  this.route('users');
  this.route('issue', { path: '/:book_id/issue'});
  this.route('collect');
});

export default Router;
