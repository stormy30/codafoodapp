Commandes = new Mongo.Collection('commandes');
Commandes.allow({
    'insert': function (userId,doc) {return true;},
    'update': function (userId,doc) {return true;},
    'remove': function (userId,doc) {return true;},

});


// import { Meteor } from 'meteor/meteor';
// import Commandes from '/commande';
// Meteor.methods({
//     'validercommande': function () {
//         return Commandes.insert({name},{price},{invoiceprice})
//     }
// })


