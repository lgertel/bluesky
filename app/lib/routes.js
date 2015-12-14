Router.configure({
  layoutTemplate: 'MasterLayout',
  loadingTemplate: 'Loading',
  notFoundTemplate: 'NotFound'
});

Router.onBeforeAction(function(){
  Session.set('toggleSidebar', false);
  this.next();
});

Router.route('/', {
  name: 'home',
  controller: 'HomeController',
  where: 'client'
});
