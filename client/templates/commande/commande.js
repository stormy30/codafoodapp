Meteor.subscribe("panier");
Meteor.subscribe("commandes");





// Template.header.events({
//     'submit .validercommande'() {
//
//         Panier.find().observe({
//             Added:function (item) {
//                  Commandes.insert(item);
//           }
//          });
//     }
//  });
Template.panier.events({
    'submit .validercommande'(event) {
     event.preventDefault();
        Panier.find().observe({
            added:function (item) {
                Commandes.insert(item);
            }
        });
        Router.go('commande')
    }
});
Template.commandes.helpers({
    commandes: function() {
         return Commandes.find();
    },

//  on rappelle la meme fonction qui sert au CALCUL du TOTAL PANIER dans
    //le helper du template commande car c'est un calcul qui se fait a la fin(total de la commande)
    'total': function () {
        // on initialise le
        total = 0;
        Commandes.find({}, {fields:{invoiceprice:1}}).map(function(doc) {
            total += doc.invoiceprice;
        });
        return total;
    }

});





