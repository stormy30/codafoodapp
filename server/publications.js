Meteor.publish('categories', function() {
    return Categories.find();
});

// Meteor.publish('pizzas', function() {
//     return Pizzas.find();
// });