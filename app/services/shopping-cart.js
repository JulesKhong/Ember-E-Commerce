import Ember from 'ember';

export default Ember.Service.extend({
  items: [],
  currentTotal: Ember.computed('items.[]', function() {
    var runningTotal = 0;
    this.get('items').forEach(function(product){
      runningTotal += product.get('price');
    });
    return runningTotal.toFixed(2);
  }),

  add(item) {
    this.get('items').pushObject(item);
  },
  remove(item){
    this.get('items').removeObject(item);
  }

});
