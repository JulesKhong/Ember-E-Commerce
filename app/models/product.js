import Ember from 'ember';
import DS from 'ember-data';

export default DS.Model.extend({
  title: DS.attr(),
  image: DS.attr(),
  description: DS.attr(),
  price: DS.attr('number'),
  reviews: DS.hasMany('review', {async: true}),

  shoppingCart: Ember.inject.service(),

  cartIncludes: Ember.computed('shoppingCart.items.[]', function(){
    return this.get('shoppingCart').includes(this);
  })

});
