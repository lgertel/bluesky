/*****************************************************************************/
/*  Server Methods */
/*****************************************************************************/

Meteor.methods({
  'server/updateAWSJSON': function (url) {
    return Meteor.http.call("GET", url).content;
  }
});
