Meteor.subscribe("Panier");
Template.panier.helpers({
    panier: function(){return Panier.find();
    },
//  une deuxieme fonction qui servira à CALCUL du TOTAL PANIER
'total': function () {
        // on initialise le
    total = 0;
    Panier.find({}, {fields:{invoiceprice:1}}).map(function(doc) {
        total += doc.invoiceprice;
    });
    return total;
}

});
//assigne un event sur le template

Template.pizzas.events({
    'submit .formulaire'(event) {
// prevent default permet de rester sur la meme page
        event.preventDefault();
        let compteur = event.target.compteur.value;

      // console.log(compteur);
        //insertion des données dans la bd locale:Panier
        Panier.insert({

            compteur:compteur,
            image:this.image,
            name:this.name,
            price:this.price,
            invoiceprice:this.price*compteur
        });

        }

});

//////suppession des articles choisis///

Template.panier.events({
    'click input.delete'(event){
        event.preventDefault();
        Panier.remove(this._id);
    },
});

/////modification//////////


Template.panier.events({
    //avec la fonction event sur l'evenement click de l' imput compteur on va créer la modif
    'click .compteur'(event){
        event.preventDefault();
//on donne a compteur une  valeur va appeler l'id de chaque commande grace a la formule magique jquery
        let compteur = $("."+this._id+"").val();
// grace a fonction .update() va permettre la modif de l'id et de tout les éléments propre à l'id.
       // la modification est +complexe que la suppression car ici il faut cibler par l'_id.
        Panier.update(this._id, {
            compteur:compteur,
            invoiceprice:this.price*compteur,
            name:this.name,
            image:this.image,
            price:this.price,
            _id:this._id
        });
    },
});


