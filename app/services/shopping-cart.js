import Ember from 'ember';

export default Ember.Service.extend({
  items: [],
  currentTotal: Ember.computed('items.[]', function() {
    var runningTotal = 0;
    this.get('items').forEach(function(product){
      runningTotal += product.get('price');
    });
    return runningTotal;
  }),

  add(item) {
    this.get('items').pushObject(item);
  },

});
