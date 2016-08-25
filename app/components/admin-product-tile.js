import Ember from 'ember';

export default Ember.Component.extend({
  shoppingCart: Ember.inject.service(),
  actions: {
  delete(product) {
    if(confirm('Are you sure you want to permanently delete this product?')){
      this.sendAction('destroyProduct', product);
    }
  }
}
});
