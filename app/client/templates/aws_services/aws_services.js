/*****************************************************************************/
/* AwsServices: Event Handlers */
/*****************************************************************************/
Template.AwsServices.events({
});

/*****************************************************************************/
/* AwsServices: Helpers */
/*****************************************************************************/
Template.AwsServices.helpers({
  'services': function(offers) {
    if (offers !== null) {
      var keys = [];
      _.each(offers, function(val, key) {
        if (val) {
          keys.push(val);
        }
      });

      return keys;
    }
  }
});

/*****************************************************************************/
/* AwsServices: Lifecycle Hooks */
/*****************************************************************************/
Template.AwsServices.onCreated(function () {
});

Template.AwsServices.onRendered(function () {
});

Template.AwsServices.onDestroyed(function () {
});
