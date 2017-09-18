Router.configure({
    layoutTemplate: 'layout',
    loadingTemplate: 'loading',

    waitOn: function() { return Meteor.subscribe('categories'); }
});

Router.route('/', {name: 'categoriesList'});


// Page selon les categories choisies

Router.route('/categories/:title', function () {
    this.render(this.params.title,{
        data: {
            name: this.params.title
        }});
});