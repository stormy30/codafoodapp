Meteor.subscribe('categories');

Template.categoriesList.helpers({
    categories: function () {
        return Categories.find()
    }
});

