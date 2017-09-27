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
    'submit .validercommande'() {

        Panier.find().observe({
            added:function (item) {
                commandes.insert(item);
            }
        });
    }
});
Template.commande.helpers({
    commande: function() {
         return commandes.find();
    }
 });
// Meteor.subscribe("panierlist");
// Meteor.subscribe('commandesubmitted');
//
// Template.panierlist.events({
//     'submit .passercommande'() {
//
//         Panierlist.find().observe({
//             added: function (item) {
//                 Commandesubmitted.insert(item);
//             }
//         });
//     }
// });
// Template.panierlist.helpers({
//     panierlist: function () {
//         return Commandesubmitted.find();
//     }
// });



