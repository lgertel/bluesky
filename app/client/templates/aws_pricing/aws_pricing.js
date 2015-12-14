/*****************************************************************************/
/* AwsPricing: Event Handlers */
/*****************************************************************************/
Template.AwsPricing.events({
  "click #awsJSON": function (event) {
    swal({
      title: "Você tem certeza?",
      text: "Os serviços serão atualizados conforme JSON da AWS!",
      type: "warning",
      showCancelButton: true,
      confirmButtonColor: "#DD6B55",
      confirmButtonText: "Sim, atualize!",
      closeOnConfirm: false }, function() {
        swal("Atualização em andamento!",
          "Os registros serão disponibilizados assim que a atualização for finalizada.", "success");
        Meteor.call("server/updateAWSJSON", "https://pricing.us-east-1.amazonaws.com/offers/v1.0/aws/index.json", function(error, result){
          if(error){
            console.log("error", error);
          }

          if(result){
            var respJson = JSON.parse(result);

            awsPricing = AwsPricing.insert({
              createdAt: new Date(),
              publicationDate: respJson.publicationDate,
              offers: Object.keys(respJson.offers).length
            });

            AwsServices.insert({
              awsPricing: awsPricing,
              offers: respJson.offers
            });            
          }
        });
      }
    );
  }
});

/*****************************************************************************/
/* AwsPricing: Helpers */
/*****************************************************************************/
Template.AwsPricing.helpers({
  'pricing': function() {
    return AwsPricing.find({}, {sort: {createdAt: -1}});
  }
});

/*****************************************************************************/
/* AwsPricing: Lifecycle Hooks */
/*****************************************************************************/
Template.AwsPricing.onCreated(function () {
});

Template.AwsPricing.onRendered(function () {
});

Template.AwsPricing.onDestroyed(function () {
});
