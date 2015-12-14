Template.Header.events({
  'click .sidebar-toggle': function(){
    if ($('body').hasClass('sidebar-open')) {
      $(document.body).removeClass('sidebar-open');
      $(document.body).removeClass('sidebar-collapse');
    } else {
      $(document.body).addClass('sidebar-open');
      $(document.body).addClass('sidebar-collapse');
    }
  }
});
