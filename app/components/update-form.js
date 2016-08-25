import Ember from 'ember';

export default Ember.Component.extend({
  shoppingCart: Ember.inject.service(),
  actions: {
    updateProduct(product) {
      var params = {
        title:this.get('title'),
        description:this.get('description'),
        price:this.get('price'),
        image:this.get('image')
      };
      this.sendAction('update', product, params);
    }
  }
});
