import Ember from 'ember';

export function starRating(params) {
  var reviewRating = params[0];

  if (reviewRating === 5) {
    return Ember.String.htmlSafe('&#x2605; &#x2605; &#x2605; &#x2605; &#x2605;');
  } else if (reviewRating === 4) {
      return Ember.String.htmlSafe('&#x2605; &#x2605; &#x2605; &#x2605;');
  } else if (reviewRating === 3) {
    return Ember.String.htmlSafe('&#x2605; &#x2605; &#x2605;');
  } else if (reviewRating === 2) {
    return Ember.String.htmlSafe('&#x2605; &#x2605;');
  } else if (reviewRating === 1) {
    return Ember.String.htmlSafe('&#x2605;');
  }
}

export default Ember.Helper.helper(starRating);
