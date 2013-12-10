var menu = {
  "Garlic Bread": [
    "garlic bread",
    "warm",
    "housemade bread",
    "butter",
    "garlic",
    "mozzarella",
    "basil"
  ],
  "Caprese Salad": [
    "caprese salad",
    "",
    "mozzarella",
    "sliced tomatoes",
    "basil",
    "olive oil",
    "balsamic vinegar"
  ],
  "Spicy Chicken Wings": [
    "spicy",
    "chicken wings",
    "baby carrots",
    "blue cheese",
    "cheese",
    "dressing"
  ],
  "Mixed Salad": [
    "salad greens",
    "cherry tomato",
    "red bell peppers",
    "red onions",
    "gorgonzola cheese",
    "walnuts",
    "vinaigrette dressing"
  ],
  "Classic pizza": [
    "sausage",
    "mushrooms",
    "onions",
    "green bell peppers"
  ],
  "Mediterranean Chicken pizza": [
    "chicken breast",
    "artichoke hearts",
    "red bell peppers",
    "green olives",
    "onions",
    "feta"
  ],
  "Vegetarian pizza": [
    "vegetarian",
    "mushrooms",
    "onions",
    "black",
    "olives",
    "red",
    "bell peppers",
    "garlic",
    "roasted",
    "zucchini"
  ],
  "Little Star pizza": [
    "spinach",
    "blended",
    "ricotta",
    "feta",
    "mushrooms",
    "onions",
    "garlic"
  ],
  "Cheese pizza": [
    "cheese"
  ],
  "Pesto Chicken pizza": [
    "pesto",
    "chicken",
    "roasted",
    "chicken roasted",
    "red peppers",
    "mushrooms",
    "onions"
  ],
  "Italian Combo pizza": [
    "pepperoni",
    "salami",
    "onions",
    "green bell peppers",
    "black olives",
    "pepperoncini"
  ],
  "Greek pizza": [
    "greek",
    "spinach",
    "black",
    "olives",
    "roasted",
    "garlic",
    "feta",
    "sun-dried",
    "tomatoes"
  ],
  "White Pie pizza": [
    "garlic",
    "olive oil",
    "mozzarella",
    "zucchini",
    "tomatoes",
    "feta"
  ],
  "Housemade Cheesecake": [
    "cheesecake"
  ],
  "Gelato": [
    "gelato"
  ]
};

if (typeof module !== "undefined") { // node
  module.exports = menu;
} else { // browser
  MenuApp.menus["little-star-pizza"] = menu;
}

