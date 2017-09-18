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

// // _.each(PizzasList, function (doc) {
// //     Pizzas.insert(doc);
// // }
// );
}