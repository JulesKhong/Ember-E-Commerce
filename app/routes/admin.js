import Ember from 'ember';

export default Ember.Route.extend({
  shoppingCart: Ember.inject.service(),
    model () {
      return Ember.RSVP.hash({
        products: this.store.findAll('product'),
        sizes: this.store.findAll('size')
      });
    },
    actions: {
      destroyProduct(product) {
      product.destroyRecord();
      this.transitionTo('admin');
    },
    saveProduct(params) {
      var newProduct = this.store.createRecord('product', params);
      newProduct.save();
      this.transitionTo('admin');
    }
  }
});
