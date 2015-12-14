Meteor.publish('aws_pricing', function () {
  return AwsPricing.find();
});


Meteor.publish('aws_services', function () {
  return AwsServices.find();
});