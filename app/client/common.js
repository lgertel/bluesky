Template.registerHelper('formatDate', function(date, pattern){
  return moment(date).format(pattern);
});
