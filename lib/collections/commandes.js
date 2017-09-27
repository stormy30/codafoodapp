commandes = new Mongo.Collection('commande');
commandes.allow({
    'insert': function (userId,doc) {return true;},
    'update': function (userId,doc) {return true;},
    'remove': function (userId,doc) {return true;}

});



