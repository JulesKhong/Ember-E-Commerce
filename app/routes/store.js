import Ember from 'ember';

export default Ember.Route.extend({
  model () {
    return Ember.RSVP.hash({
      products: this.store.findAll('product'),
      sizes: this.store.findAll('size'),
      review: this.store.findAll('review')
    });
  }
});
