Meteor.subscribe("panier");
Meteor.subscribe("commandes");



Template.header.events({
    'submit .validercommande'() {

        Panier.find().observe({
            Added:function (item) {
                 Commandes.insert(item);
          }
         });
    }
 });
//ici on appelle l'evemement events du  template panier dans le template commandes pour
//qu'à la soumission du bouton valider commande les données de la collection locales soient
//transférées dans la collection commande coté serveur
Template.panier.events({
    'submit .validercommande'(event) {
     event.preventDefault();

        Panier.find().observe({
            added:function (item) {
                Commandes.insert(item);
            }
        });
        //on dirige les éléments ver la vue commande
        Router.go('commande')
    }
});

//on n'oublie pas d'appeler la fonctionalité du template commande qui retourne
// tous les éléments de la collection commande.
Template.commandes.helpers({

    commandes: function() {

        if (Meteor.userId()) {
         return Commandes.find();}
    },

//  on rappelle la meme fonction qui sert au CALCUL du TOTAL PANIER dans
    //le helper du template commande car c'est un calcul qui se fait a la fin(total de la commande)
    //car  c'est un calcul qui se fait avec les données contenues dans la collection concernée.
    'total': function () {
        // on initialise le total à 0 sous condition que l'utilisateur soit logué
        if (Meteor.userId()) {     total = 0;
        Commandes.find({}, {fields:{invoiceprice:1}}).map(function(doc) {
            total += doc.invoiceprice;
        });
        return total;}
    },

});





