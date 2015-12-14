Router.configure({
  layoutTemplate: 'MasterLayout',
  loadingTemplate: 'Loading',
  notFoundTemplate: 'NotFound'
});

Router.route('/', {
  name: 'home',
  controller: 'HomeController',
  where: 'client'
});

Router.route('aws_pricing', {
  name: 'awsPricing',
  controller: 'AwsPricingController',
  where: 'client'
});

Router.route('aws_pricing/:_id/services', {
  name: 'awsServices',
  controller: 'AwsServicesController',
  where: 'client'
});
