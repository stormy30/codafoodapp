Router.configure({
    layoutTemplate: 'layout',
    loadingTemplate: 'loading',

    waitOn: function() { return Meteor.subscribe('categories'); }
});

Router.route('/', {name: 'categoriesList'});

