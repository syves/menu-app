var menu = {
  "Plain Bagel": [
    "bagel"
  ],
  "Bagel": [
    "bagel",
    "ham",
    "cheese"
  ],
  "Bagel with cream cheese": [
    "cream",
    "bagel",
    "cheese"
  ],
  "Bagel with spread": [
    "spread",
    "bagel"
  ],
  "Bagel add veggie": [
    "bagel",
    "veggie"
  ],
  "Egg On Bagel, Croissant": [
    "egg",
    "bagel",
    "croissant"
  ],
  "Egg Croissant": [
    "egg",
    "cheese",
    "croissant"
  ],
  "Croissant with egg, ham and cheese": [
    "egg",
    "ham",
    "cheese",
    "croissant"
  ],
  "Bowl Fruit Only": [
    "fruit"
  ],
  "Fruit and yogurt": [
    "fruit",
    "yogurt"
  ],
  "Granola, Fruit, Yogurt": [
    "granola",
    "fruit",
    "yogurt"
  ],
  "Side Salad": [
    "salad"
  ],
  "Simple Salad": [
    "salad"
  ],
  "Atlas Salad": [
    "salad"
  ],
  "Tuna Salad": [
    "tuna",
    "salad"
  ],
  "Smoked Trout Salad": [
    "salad",
    "smoked trout"
  ],
  "Hummus Plate": [
    "hummus"
  ],
  "Basic Pizza": [
    "pizza"
  ],
  "Apple And Goat Cheese Pizza": [
    "apple",
    "goat cheese",
    "pizza"
  ],
  "No Cheese Pizza": [
    "bread",
    "tomato sauce",
    "vegetables"
  ],
  "No Cheese Pizza": [
    "bread",
    "sauce",
    "vegetables",
    "tofu"
  ],
  "No Cheese Pizza": [
    "bread",
    "sauce",
    "vegetables",
    "porto"
  ],
  "Cookies": [
    "cookies"
  ],
  "Vegan Cookies": [
    "vegan",
    "cookies"
  ],
  "Pastry": [
    "pastry"
  ],
  "Bread": [
    "bread"
  ],
  "Scone": [
    "scone"
  ],
  "Brownies": [
    "brownies"
  ],
  "Blondies": [
    "blondies"
  ],
  "Almond Biscotti": [
    "almond biscotti"
  ],
  "Chocolate Biscotti": [
    "chocolate biscotti"
  ],
  "Russian Tea Cookies": [
    "russian tea cookies"
  ],
  "Beet Loaf Sandwich": [
    "beet loaf"
  ],
  "Cuban Beef Sandwich": [
    "cuban beef"
  ],
  "Smoked Turkey Sandwich": [
    "smoked turkey"
  ],
  "Chicken Breast Sandwich": [
    "chicken breast"
  ],
  "Black Forest Ham Sandwich": [
    "black forest ham"
  ],
  "Trout Sandwich Sandwich": [
    "trout"
  ],
  "Tuna Sandwich Sandwich": [
    "tuna"
  ],
  "Portobello Mushroom Sandwich": [
    "portobello mushroom"
  ],
  "Beets": [
    "beets"
  ],
  "Apples And Cheese": [
    "apple",
    "cheese"
  ],
  "Grilled Cheddar": [
    "cheddar"
  ],
  "Yam": [
    "yam"
  ],
  "Tofu": [
    "tofu"
  ],
  "Potato Salad": [
    "potato"
  ],
  "Rice Noodle Salad": [
    "rice noodle"
  ],
  "Cup Soup": [
    "soup"
  ],
  "Bowl Of Soup": [
    "soup"
  ],
  "House Coffee": [
    "house coffee"
  ],
  "Teas": [
    "tea"
  ],
  "Hot Chocolate": [
    "hot chocolate"
  ],
  "Steamed Milk": [
    "milk"
  ],
  "Espresso": [
    "espresso"
  ],
  "Cappuccino": [
    "cappuccino"
  ],
  "Depth Charge": [
    "depth charge"
  ],
  "Cafe Au Lait": [
    "expresso",
    "milk"
  ],
  "Latte": [
    "latte"
  ],
  "Mocha": [
    "mocha"
  ],
  "Chai": [
    "chai"
  ],
  "Soy Chai": [
    "soy",
    "chai"
  ],
  "Iced Tea": [
    "iced tea" 
  ],
  "Fountain Soda, Sparkling ": [
    "fountain soda",
  ],
  "Sparkling soda": [
    "sparkling soda"
  ],
  "Italian Soda": [
    "italian soda"
  ],
  "Orange Juice": [
    "orange juice"
  ],
  "Juice Squeeze": [
    "juice squeeze"
  ],
  "Draft Beer": [
    "draft beer"
  ],
  "Wine": [
    "wine"
  ],
  "Beer Anchor": [
    "anchor",
  ],
  "Beer Stella": [
    "stella"
  ],
  "Beer Bohemia": [
    "bohemia"
  ],
  "Guinness": [
    "guinness"
  ],
  "Newcastle": [
    "newcastle"
  ]
};

if (typeof module !== 'undefined') { // node
  module.exports = menu;
} else { // browser
  MenuApp.menus["atlas-cafe"] = menu;
}
