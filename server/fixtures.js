if (Categories.find().count() === 0) {
    Categories.insert({
        title: 'Pizzas',
        image: 'order4.png'
    });

    Categories.insert({
        title: 'burgers',
        image: 'b1.png'
    });

    Categories.insert({
        title: 'salades',
        image: 'sa1.png'
    });

    Categories.insert({
        title: 'boissons',
        image: 'bo1.png'
    });
    Categories.insert({
        title: 'desserts',
        image: 'd1.png'
    });

/////////////////////////////////////////////////////////////////////
///////////////////// Insertion des Pizzas /////////////////////////
///////////////////////////////////////////////////////////////////

    let PizzasList = [{
        image: "order1.png",
        name: "Paysanne ",
        description: "Sauce tomate, emmenthal, lardons fumés, champignons frais émincés, oeuf, mozzarella fraiche, olives noires confites. ",
        price: 12
    },
        {
            image: "order2.png",
            name: "Royale",
            description: "Sauce tomate, emmenthal, épaule cuite tradition, champignons frais émincés, mozzarella fraiche, olives noires confites. ",
            price: 12
        },
        {
            image: "order3.png",
            name: "Valencia",
            description: "Sauce tomate, emmenthal, chorizo traiteur, poivrons frais, oeuf, mozzarella fraiche, olives noires confites. ",
            price: 12
        },
        {
            image: "order4.png",
            name: "4 saisons",
            description: "Sauce tomate, emmenthal, épaule cuite tradition, champignons frais émincés, petits artichauts grillés, mozzarella fraiche, olives noires confites. ",
            price: 12
        },
        {
            image: "order5.png",
            name: "Buffalo",
            description: "Sauce tomate, emmenthal, steak haché, oignons cuits, mozzarella fraiche, olives noires confites. ",
            price: 12
        },
        {
            image: "order6.png",
            name: "Hawaïenne",
            description: "Sauce tomate, emmenthal, épaule cuite tradition, dés d'ananas crus rôtis, mozzarella fraiche, olives noires confites",
            price: 12
        }
    ];

_.each(PizzasList, function (doc) {
    Pizzas.insert(doc);
}
);


/////////////////////////////////////////////////////////////////////
///////////////////// Insertion des Burgers /////////////////////////
///////////////////////////////////////////////////////////////////
    let BurgersList = [{
        image: "b1.png",
        name: "Le Daron ",
        description: "Après une bonne journée passée à couper du bois à la force des ongles rien ne vaut un bon daron ! Des champignons, des oignons frais et du munster pour l’haleine de bûcheron, du lard et de la sauce ciboulette pour se remplir la panse, bref, le daron c’est comme Mennen : « pour nous les gnomes ! » ",
        price: 7
    },
        {
            image: "b2.png",
            name: "Le grand papa",
            description: "Qu’il pleuve, qu’il vente ou qu’il canicule, il y a pas de saison pour la raclette ! Un bon steak de boeuf, une belle tranche de jambon cru, quelques oignons confits, une poignée de champignons de Lutèce et un nappage de sauce cocktail, chuuuuut ! Tu l’entends chanter dans tes oreilles le bel accent savoyard ? ",
            price: 6
        },
        {
            image: "b3.png",
            name: "La poulette",
            description: "Ôte tes tongs et allume la lumière de tes chakras ! hume ce délicieux poulet pané agrémenté de cheddar ! Hume ces quelques rondelles de tomate, cette roquette et sa sauce curry ! Bienvenu au Nirvana du burger, Papa sait aussi prendre soin de ton karma ! ",
            price: 8
        },
        {
            image: "b4.png",
            name: "Le tête de lard",
            description: "Du lard paysan toasté délicatement posée sur du cheddar fondu et une viande de boeuf limousine, c’est du velours ! Mais alors quand on y ajoute quelques rondelles de tomate, de la roquette et une sauce béarnaise, là je vous le dis : cette Tête de lard, c’est de l’art ! ",
            price: 9
        },
        {
            image: "b5.png",
            name: "Le gaillard",
            description: "C’est toi qui as peté ? Mais non c’est la bonne odeur du Munster ! Ce fromage alsacien relevé de quelques grains de cumin se marie parfaitement avec un bon steak de boeuf hâché, des oignons confits et de la roquette du jardin. Quant à sa sauce tartare… je me l’envoie dare-dare ! ",
            price: 7
        },
        {
            image: "b6.png",
            name: "Le fils à papa",
            description: "Prêt pour un détour aux States en ouvrant simplement la bouche ? Un croc dans ce fils à Papa et ses oignons frits, pickles et sauce américaine t’emmène à Manhattan plus vite que le Concorde ! Oooooh yeah !",
            price: 8
        }
    ];
    _.each(BurgersList, function (doc) {
        Burgers.insert(doc);
    });

////////////////////////////////////////////////////////////////////
///////////////////// Insertion des Salades /////////////////////////
///////////////////////////////////////////////////////////////////

    let SaladesList = [{
        image: "sa1.png",
        name: "L'auvergnate ",
        description: "Après une bonne journée passée à couper du bois à la force des ongles rien ne vaut un bon daron ! Des champignons, des oignons frais et du munster pour l’haleine de bûcheron, du lard et de la sauce ciboulette pour se remplir la panse, bref, le daron c’est comme Mennen : « pour nous les gnomes ! » ",
        price: 6
    },
        {
            image: "sa2.png",
            name: "La Nordiste",
            description: "Qu’il pleuve, qu’il vente ou qu’il canicule, il y a pas de saison pour la raclette ! Un bon steak de boeuf, une belle tranche de jambon cru, quelques oignons confits, une poignée de champignons de Lutèce et un nappage de sauce cocktail, chuuuuut ! Tu l’entends chanter dans tes oreilles le bel accent savoyard ? ",
            price: 5
        },
        {
            image: "sa3.png",
            name: "L'hollandaise",
            description: "Ôte tes tongs et allume la lumière de tes chakras ! hume ce délicieux poulet pané agrémenté de cheddar ! Hume ces quelques rondelles de tomate, cette roquette et sa sauce curry ! Bienvenu au Nirvana du burger, Papa sait aussi prendre soin de ton karma ! ",
            price: 5
        },
        {
            image: "sa4.png",
            name: " La Provençale",
            description: "Du lard paysan toasté délicatement posée sur du cheddar fondu et une viande de boeuf limousine, c’est du velours ! Mais alors quand on y ajoute quelques rondelles de tomate, de la roquette et une sauce béarnaise, là je vous le dis : cette Tête de lard, c’est de l’art ! ",
            price: 6
        },
        {
            image: "sa5.png",
            name: "La César",
            description: "C’est toi qui as peté ? Mais non c’est la bonne odeur du Munster ! Ce fromage alsacien relevé de quelques grains de cumin se marie parfaitement avec un bon steak de boeuf hâché, des oignons confits et de la roquette du jardin. Quant à sa sauce tartare… je me l’envoie dare-dare ! ",
            price: 6
        },
        {
            image: "sa6.png",
            name: "Le fils à papa",
            description: "Prêt pour un détour aux States en ouvrant simplement la bouche ? Un croc dans ce fils à Papa et ses oignons frits, pickles et sauce américaine t’emmène à Manhattan plus vite que le Concorde ! Oooooh yeah !",
            price: 12
        }
    ];
    _.each(SaladesList, function (doc) {
        Salades.insert(doc);
    });


////////////////////////////////////////////////////////////////////
///////////////////// Insertion des boissons /////////////////////////
///////////////////////////////////////////////////////////////////

    let BoissonsList = [{
        image: "bo1.png",
        name: "Coca-Cola ",
        description: "gobelet de 50cl de boisson gazeuse au cola",
        price: 2
    },
        {
            image: "bo2.png",
            name: "Coca-Cola Light",
            description: "gobelet de 50cl de gazeuse au cola allégée en sucre.",
            price: 2
        },
        {
            image: "bo3.png",
            name: "Coca-Cola Zero",
            description: "gobelet de 50cl de gazeuse au cola sans sucre.",
            price: 2
        },
        {
            image: "bo4.png",
            name: " Fanta Orange",
            description: "gobelet de 50cl de boisson gazeuse à l'orange.",
            price: 2
        },
        {
            image: "bo5.png",
            name: "Sprite",
            description: "gobelet de 50cl de limonade .",
            price: 2
        },
        {
            image: "bo6.png",
            name: "Le Nestea Pêche",
            description: "gobelet de 50cl de thé glacé aromatisé à la pêche.",
            price: 2
        }
    ];
    _.each(BoissonsList, function (doc) {
        Boissons.insert(doc);
    });


    ////////////////////////////////////////////////////////////////////
///////////////////// Insertion des desserts /////////////////////////
///////////////////////////////////////////////////////////////////

    let DessertsList = [{
        image: "d1.png",
        name: "Coda-Fondant ",
        description: "Fondez pour ce fondant au chocolat garni de chantilly.",
        price: 3
    },
        {
            image: "d2.png",
            name: "Muffin au chocolat",
            description: "Découvrez les Muffins avec un fourrage saveur chocolat noisette",
            price: 2
        },
        {
            image: "d3.png",
            name: "Donut",
            description: "Découvrez le délicieux donut fourré saveur chocolat et noisettes.",
            price:3
        },
        {
            image: "d4.png",
            name: " Les frappés de Coda",
            description: "Découvrez le Frappé qui sommeille en vous!  " +
            "Craquez pour la nouvelle gamme gourmande de frappés : saveurs Chocolat, Vanille ou Myrtille. .",
            price: 2
        },
        {
            image: "d5.png",
            name: "Codadae",
            description: " Craquez pour un plaisir glacé au lait avec des éclats de cacahuètes et retrouvez les nappages saveur caramel et chocolat, pour une pause gourmande ou un plaisir de fin de repas.",
            price: 3
        },
        {
            image: "d6.png",
            name: "CodaCornetto",
            description: "Craquez pour une glace à l'italienne nappé d'éclats gourmands dans un cône en biscuit gauffré .",
            price: 4
        }
    ];
    _.each(DessertsList, function (doc) {
        Desserts.insert(doc);
    });

}