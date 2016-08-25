import Ember from 'ember';

export default Ember.Component.extend({
  newProductForm: false,
  actions: {
    newProductForm() {
      this.set('newProductForm', true);
    },
    hideProductForm() {
      this.set('newProductForm', false);
    },
    saveProduct() {
      var params = {
        title: this.get('title') ? this.get('title'):"",
        image: this.get('image') ? this.get('image'):"",
        description: this.get('description') ? this.get('description'):"",
        price: this.get('price') ? this.get('price'):""
      };
      this.set('newProductForm', false);
      this.sendAction('saveProduct', params);
    }
  }
});
