import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    saveReview() {
      var params = {
        comments: this.get('comments') ? this.get('comments'):"",
        rating: this.get('rating') ? this.get('rating'):"",
        product: this.get('product')
      };
      this.sendAction('saveReview', params);
    }
  }
});
