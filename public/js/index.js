var Thai_menu = {
  "Paupia": [
    "crispy",
    "vegetable",
    "rolls"
  ],
  "Paupia Sod": [
    "fresh roll",
    "vegetables",
    "tofu",
    "peanuts",
    "chili",
    "lime vinaigrette"
  ],
  "Kao Pode Tod": [
    "thai spiced corn fritters",
    "cool cucumber",
    "crushed peanuts",
    "salad"
  ],
  "Keow Wan Roti": [
    "grilled",
    "indian bread",
    "eggplant",
    "bell peppers",
    "basil",
    "green curry dipping"
  ],
  "Basil Panstickers": [
    "pan-fried dumplings",
    "shrimp",
    "pork",
    "thai ginger",
    "soy"
  ],
  "Tod Mun thai": [
    "spiced",
    "fish cakes",
    "yard long beans",
    "nuts",
    "cucumber vinaigrette"
  ],
  "Goong Gra Bog": [
    "crispy",
    "wrapped whole tiger prawns",
    "sweet chili",
    "vinaigrette"
  ],
  "Toong Tong": [
    "golden pouches",
    "crab",
    "pork",
    "salad",
    "cucumber",
    "pineapple"
  ],
  "Plamuk Tod": [
    "fried",
    "calamari",
    "sriracha",
    "chili vinaigrette"
  ],
  "Kanom Pak Gard": [
    "turnip cakes",
    "stir-fried",
    "beansprouts",
    "chives",
    "roasted sriracha chili"
  ]
};

var scoreMenuItem = function(itemAttrs, defaultRating){
  return itemAttrs.map(function(attr) {
    return MenuApp.store.get(attr, defaultRating);
  }).reduce(function(a,b){
    return a + b;
  },0) / itemAttrs.length;
}

var pairs =[]

for (var name in Thai_menu) {
  var score = scoreMenuItem(Thai_menu[name], 3);
  pairs.push([score, name]);
}
pairs.sort(function(a,b){
  if (a[0] > b[0]) return -1;
  if (a[0] < b[0]) return +1;
  return 0;
});
console.log('your top 5!')
pairs.slice(0,5).forEach(function(pair) {
  var score = pair[0];
  var name = pair[1];
  console.log(name + ' (' + score.toFixed(1) + ') Ingredients: ' + Thai_menu[name].join(', '))
});
//show results on index.html: setting floats to stars?
//ratings:1. saving local storage, 2.option for trying new things rating/slider, 
//good job!!!

var suggestions = document.getElementById('suggestions');
pairs.slice(0, 5).forEach(function(pair) {
  var score = pair[0];
  var name = pair[1];
  var li = document.createElement('li');
  var b = document.createElement('b');
  b.appendChild(document.createTextNode(name));
  li.appendChild(b);
  li.appendChild(document.createTextNode(' (' + score.toFixed(1) + ') Ingredients: ' + Thai_menu[name].join(', ')));
  suggestions.appendChild(li);
});


document.getElementById("Select-Thai-menu").addEventListener('click', function(event) {
  event.preventDefault();
}, false);

document.getElementById("Rate-my-ingredients").addEventListener('click', function(event) {
}, false);
