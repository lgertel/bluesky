/*****************************************************************************/
/*  Server Methods */
/*****************************************************************************/

Meteor.methods({
  'server/updateAWSJSON': function () {
    return Meteor.http.call("GET", "https://pricing.us-east-1.amazonaws.com/offers/v1.0/aws/index.json").content;
  }
});
