const data = {
  Pizzas: {
    title: "Brick Oven Pizza",
    dataTarget: 'pizza',
    overlay: 35,
    description: "Our handcrafted brick oven pizza is traditional 'dark crust' because it is baked directly on stone. If you prefer 'light crust' please specify. 10 inch is 4 slices and makes a great personal size, or a 16 inch is 8 slices, good for 2+ people.",
    section1: "House Combinations",
    subheader1: '10" / 16"',
    section1Items: [
      {
        id: 1,
        itemName: "Calorosa",
        itemDesc: "Tomato Sauce, Smoked Mozzerella, Pepperoni, Bacon, Italian Sausage",
        itemPrice: "15 / 23"
      },
      {
        id: 2,
        itemName: "Bambinos",
        itemDesc: "Tomato Sauce, Mozzerella, Pepperoni, Meatball, Mushrooms, Olives",
        itemPrice: "15 / 24"
      },
      {
        id: 3,
        itemName: "Capricciosa",
        itemDesc: "Tomato Sauce, Fresh Mozzerella, Italian Sausage, Onions, Mushrooms",
        itemPrice: "14 / 20"
      },
      {
        id: 4,
        itemName: "Bufala",
        itemDesc: "Tomato Sauce, Water Buffalo Mozzerella, Basil, Olive Oil",
        itemPrice: "11 / 18"
      },
      {
        id: 5,
        itemName: "Genovese",
        itemDesc: "Tomato Sauce, Smoked Mozzerella, Pepperoni, Bacon, Italian Sausage",
        itemPrice: "15 / 23"
      },
      {
        id: 6,
        itemName: "Lazio",
        itemDesc: "Tomato Sauce, Smoked Mozzerella, Pepperoni, Bacon, Italian Sausage",
        itemPrice: "15 / 23"
      },
      {
        id: 7,
        itemName: "Tropicale",
        itemDesc: "Tomato Sauce, Smoked Mozzerella, Pepperoni, Bacon, Italian Sausage",
        itemPrice: "15 / 23"
      },
      {
        id: 8,
        itemName: "Primavera",
        itemDesc: "Tomato Sauce, Smoked Mozzerella, Pepperoni, Bacon, Italian Sausage",
        itemPrice: "15 / 23"
      }],
    section2: "Build Your Own",
    section2Items: [
      {
        id:9,
        itemName: "Margherita Base",
        itemDesc: "Tomato Sauce, Fresh Mozzerella, Basil",
        itemPrice: "11 / 16"
      },
      {
        id: 10,
        itemName: "Aditional Toppings",
        itemDesc: "Eggplant, Onions, Tomatoes, Pineapple, Olives, Gaeta Olives, Peppers,Castelvetrano Olives, Mushroom, Portebello, Roasted Garlic, Ricotta Mama's Lil' Peppers, Calabrian Peppers,Chicken, Pepperoni, Chicken Sausage, Italian Sausage, Spicy Calabrese Sausage, Ham, Salami, Bacon White Anchovies, Fontina, Extra Mozzerella",
        itemPrice: "1.5 / 2.5"
      }
    ]
  },
  Microbrews: {
    title: "Microbrews",
    dataTarget: "taps",
    overlay: 10,
    description: "All drafts $7",
    tableRowItems: [
      {
        id: 1,
        tapNumber: "1",
        brewery: "Boneyard",
        beerName: "RPM IPA",
        abv: "6.5",
        state: "OR",
        ounces: "16"
      },
      {
        id: 2,
        tapNumber: "2",
        brewery: "Ommegang",
        beerName: "Rosetta",
        abv: "5.6",
        state: "NY",
        ounces: "12"
      },
      {
        id: 3,
        tapNumber: "3",
        brewery: "Crucible",
        beerName: "Blood Orange Heffe",
        abv: "5.2",
        state: "WA",
        ounces: "16"
      },
      {
        id: 4,
        tapNumber: "4",
        brewery: "Pfreim",
        beerName: "Pilsner",
        abv: "5",
        state: "OR",
        ounces: "16"
      },
      {
        id: 5,
        tapNumber: "5",
        brewery: "Ace",
        beerName: "Pineapple Cider",
        abv: "5",
        state: "WA",
        ounces: "12"
      },
      {
        id: 6,
        tapNumber: "6",
        brewery: "Diamond Knot",
        beerName: "Brown Ale",
        abv: "5.9",
        state: "WA",
        ounces: "16"
      },
      {
        id: 7,
        tapNumber: "7",
        brewery: "Pike Place Brewing",
        beerName: "Kilt Lifter Scotch Ale",
        abv: "7.5",
        state: "WA",
        ounces: "12"
      },
      {
        id: 8,
        tapNumber: "8",
        brewery: "Firestone",
        beerName: "DBL Mind Haze",
        abv: "8.2",
        state: "CA",
        ounces: "12"
      },
      {
        id: 9,
        tapNumber: "9",
        brewery: "805",
        beerName: "Blonde",
        abv: "4.7",
        state: "CA",
        ounces: "12"
      },
      {
        id: 10,
        tapNumber: "10",
        brewery: "Scuttlebutt",
        beerName: "Amber",
        abv: "4.7",
        state: "CA",
        ounces: "12"
      },
      {
        id: 11,
        tapNumber: "11",
        brewery: "Freemont",
        beerName: "Summer Ale",
        abv: "5.2",
        state: "WA",
        ounces: "12"
      },
      {
        id: 12,
        tapNumber: "12",
        brewery: "Pfriem",
        beerName: "Pale Ale",
        abv: "5",
        state: "OR",
        ounces: "12"
      },
      {
        id: 13,
        tapNumber: "13",
        brewery: "Seattle Cider",
        beerName: "Berry Rose",
        abv: "5",
        state: "WA",
        ounces: "12"
      },
      {
        id: 14,
        tapNumber: "14",
        brewery: "Stoup",
        beerName: "Imperial Stout",
        abv: "11",
        state: "WA",
        ounces: "12"
      },
      {
        id: 15,
        tapNumber: "15",
        brewery: "Ecliptic",
        beerName: "Tucana Tang Sour",
        abv: "5",
        state: "OR",
        ounces: "12"
      },
      {
        id: 16,
        tapNumber: "16",
        brewery: "Anderson Valley",
        beerName: "Briney Melon Gose",
        abv: "4.2",
        state: "CA",
        ounces: "12"
      },
      {
        id: 17,
        tapNumber: "17",
        brewery: "Lost Coast",
        beerName: "Tangerine Wheat Ale",
        abv: "5.2",
        state: "CA",
        ounces: "16"
      },
      {
        id: 18,
        tapNumber: "18",
        brewery: "Deschutes",
        beerName: "Porter",
        abv: "6.5",
        state: "WA",
        ounces: "12"
      }
    ]
  },
  Appetizers:
  {
    title: "Appetizers",
    dataTarget: "appetizers",
    overlay: 50,
    description: "",
    sectionDesc: null,
    section1: null,
    subheader1: null,
    section1Items: [
      {
        id: 1,
        itemName: "Assorted Olives",
        itemDesc: null,
        itemPrice: "6"
      },
      {
        id: 2,
        itemName: "Cheese Plate",
        itemDesc: "Flatbread, Honey, Brie and Beechers Cheese",
        itemPrice: "10"
      },
      {
        id: 3,
        itemName: "Meatballs",
        itemDesc: "Trio of beef meatballs in a marinara sauce. Served with breadsticks",
        itemPrice: "10"
      },
      {
        id: 4,
        itemName: "Pork Belly",
        itemDesc: "Braised Porkbelly served with garlic mustard and breadsticks",
        itemPrice: "10"
      },
      {
        id: 5,
        itemName: "Breadsticks",
        itemDesc: "2 large breadsticks served with marinara on the side",
        itemPrice: "4"
      }
    ]
  }, 
  Calzoni: {
    title: "Calzoni",
    dataTarget: "calzoni",
    overlay: 50,
    description: "All Calzoni is made with Tomato Sauce and Mozzerella. Subtractions OK, no substitutions",
    section1: null,
    subheader1: null,
    section1Items: [
      {
        id: 1,
        itemName: "Pancrazio",
        itemDesc: "Italian Sausage, Mushrooms",
        itemPrice: "11"
      },
      {
        id: 2,
        itemName: "Benedetto",
        itemDesc: "Spicy Calabrese Sausage, Spicy Peppers",
        itemPrice: "11"
      },
      {
        id: 3,
        itemName: "Cipriano",
        itemDesc: "Pepperoni",
        itemPrice: "11"
      },
      {
        id: 4,
        itemName: "Stefano",
        itemDesc: "Ricotta cheese",
        itemPrice: "11"
      },
      {
        id: 5,
        itemName: "Pietro",
        itemDesc: "Chicken sausage, Calabrian Peppers, Ricotta Cheese",
        itemPrice: "11"
      },
      {
        id: 6,
        itemName: "Gennaro",
        itemDesc: "Meatballs, Onion, Peppers",
        itemPrice: "11"
      },
      {
        id: 7,
        itemName: "Claudio",
        itemDesc: "Eggplant, Ricotta Cheese",
        itemPrice: "11"
      },
      {
        id: 8,
        itemName: "Filipo",
        itemDesc: "Portabella Mushroom, Ricotta Cheese",
        itemPrice: "11"
      },
      {
        id: 9,
        itemName: "Giacomo",
        itemDesc: "Tomatoes, Onions, Olives, Ricotta Cheese",
        itemPrice: "11"
      }
    ]
  },
  Salads: {
    title: "Salads",
    dataTarget: "salad",
    overlay: 50,
    description: null,
    section1: null,
    subheader1: null,
    section1Items: [
      {
        id: 1,
        itemName: "Insalata Verde",
        itemDesc: "Balsamic Vinegrette, Baby Greens",
        itemPrice: "6"
      },
      {
        id: 2,
        itemName: "Insalata Cesarina",
        itemDesc: "Caesar Dressing, Romaine Hearts, Croutons, Parmesan",
        itemPrice: "9"
      },
      {
        id: 3,
        itemName: "Insalata Viola",
        itemDesc: "Sherry Vinagrette, Baby Greens, Roasted Beets, Riocotta Salata",
        itemPrice: "9"
      },
      {
        id: 4,
        itemName: "Insalata di Noci",
        itemDesc: "Fig Vinagrette, Baby Greens, Candied Walnuts, Dried Cranberries, Chevre",
        itemPrice: "10"
      }
    ]
  },
  Wines: {
    title: "Wine",
    dataTarget: "vino",
    overlay: 50,
    description: null,
    section1: "Red",
    subheader1: null,
    section1Items: [
      {
        id: 1,
        itemName: "Pinot Noir",
        itemDesc: "Hahn, California | 2019",
        itemPrice: "8.5 / 28"
      },
      {
        id: 2,
        itemName: "Cabernet",
        itemDesc: "Leese-Fitch, WA | 2019",
        itemPrice: "8.5 / 32"
      },
      {
        id: 3,
        itemName: "Red Blend",
        itemDesc: "Wolfe, WA | 2018",
        itemPrice: "8.5 / 28"
      },
      {
        id: 4,
        itemName: "Merlot",
        itemDesc: "Sodale, Italy | 2015",
        itemPrice: "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;/ 30"
      },
      {
        id: 5,
        itemName: "Chianti",
        itemDesc: "Tomato Sauce, Smoked Mozzerella, Pepperoni, Bacon, Italian Sausage",
        itemPrice: "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;/ 36"
      }
    ],
    section2: "White",
    subheader2: null,
    section2Items: [
      {
        id: 6,
        itemName: "Chardonay",
        itemDesc: "Wolfe, WA | 2018",
        itemPrice: "8.5 / 30"
      },
      {
        id: 7,
        itemName: "Pinot Grigio",
        itemDesc: "Vandori | 2019",
        itemPrice: "8.5 / 28"
      },
      {
        id: 8,
        itemName: "Riesling",
        itemDesc: "Tatoo Girl, WA | 2019",
        itemPrice: "8.5 / 32"
      },
      {
        id: 9,
        itemName: "Savigon Blanc",
        itemDesc: "Tohu, NZ | 2019",
        itemPrice: "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;/ 30"
      },
      {
        id: 10,
        itemName: "Chardonay",
        itemDesc: "Ryan Patrick, WA | 2019",
        itemPrice: "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;/ 36"
      },
    ]
  },
  Gelato: {
    title: "D'Ambrosio Gelato",
    dataTarget: "gelato",
    overlay: 35,
    description: "Price per Scoop",
    section1: null,
    subheader1: null,
    section1Items: [
      {
        id: 1,
        itemName: "Chocolate",
        itemDesc: null,
        itemPrice: "6"
      },
      {
        id: 2,
        itemName: "Chocolate Hazelnut",
        itemDesc: null,
        itemPrice: "6"
      },
      {
        id: 3,
        itemName: "Salted Carmel",
        itemDesc: null,
        itemPrice: "6"
      },
      {
        id: 4,
        itemName: "Tiramisu",
        itemDesc: null,
        itemPrice: "6"
      },
      {
        id: 5,
        itemName: "Coconut",
        itemDesc: null,
        itemPrice: "6"
      },
      {
        id: 6,
        itemName: "Vanilla",
        itemDesc: null,
        itemPrice: "6"
      }
    ]
  },
  NaDrinks: {
    title: "Non Alcholic",
    dataTarget: "na-bev",
    overlay: 35,
    description: null,
    section1: null,
    subheader1: null,
    section1Items: [
      {
        id: 1,
        itemName: "Ginger Beer",
        itemDesc: null,
        itemPrice: "3.5"
      },
      {
        id: 2,
        itemName: "San Pellegrino",
        itemDesc: null,
        itemPrice: "3"
      },
      {
        id: 3,
        itemName: "Coke",
        itemDesc: null,
        itemPrice: "3"
      },
      {
        id: 4,
        itemName: "Diet Coke",
        itemDesc: null,
        itemPrice: "3"
      },
      {
        id: 5,
        itemName: "Fanta",
        itemDesc: null,
        itemPrice: "3"
      },
      {
        id: 6,
        itemName: "Sprite",
        itemDesc: null,
        itemPrice: "3"
      },
      {
        id: 7,
        itemName: "Ginger Ale",
        itemDesc: null,
        itemPrice: "3"
      },
      {
        id: 8,
        itemName: "Root Beer",
        itemDesc: null,
        itemPrice: "3"
      }
    ]
  }
}


export default data;