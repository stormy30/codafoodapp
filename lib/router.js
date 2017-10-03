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


Router.route('/commande', function () {
    this.render('commandes');
});

// // plaçons un hook pour limiter l'accès à toute notre application !
// Router.onBeforeAction(function() {
//
//         if (!Meteor.userId()) { // Si l'utilisateur n'est pas connecté, on lui affiche le formulaire de login
//             this.render("login");
//
//         } else {
//             this.next(); // Sinon, la requête continue normalement
//         }
//
//     },
//     {
//         except: [
//             "login" // Dans tous les cas, la page de login doit être accessible
//         ]
//     });
