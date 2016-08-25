import Ember from 'ember';
import DS from 'ember-data';

  export default DS.Model.extend({
    rating: DS.attr('number'),
    comments: DS.attr(),
    product: DS.belongsTo('product', {async: true})

  });
