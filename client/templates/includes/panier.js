Meteor.subscribe("Panier");
Template.panier.helpers({
    panier: function(){return Panier.find()}
});
//assigne un event sur le template

Template.pizzas.events({
    'click .postList'(event) {
// prevent default permet de rester sur la meme page
        event.preventDefault();

        // let inputcount = event.target.countItem.value;
 console.log("this name")
        Panier.insert({


            name:this.name,

        });

        },

});