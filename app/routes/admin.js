import Ember from 'ember';

export default Ember.Route.extend({
  shoppingCart: Ember.inject.service(),
    model () {
      return Ember.RSVP.hash({
        products: this.store.findAll('product'),
        sizes: this.store.findAll('size')
      });
    }

});
