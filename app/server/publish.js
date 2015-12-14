Meteor.publish('aws_pricing', function () {
  return AwsPricing.find();
});
