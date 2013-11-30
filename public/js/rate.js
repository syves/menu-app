var channel=new airwaves.Channel();
MenuApp.channel = channel;
var ol = document.getElementById("stars");

var preparation = ["stewed", "fried", "fry","saute", "grilled", "baked", 
                  "seared","boiled", "pan-fried","roasted", "steamed", "poached", 
                  "fresh", "curried", "barecue", "toasted","stir-fried",]

var getIngredients = function(menu){
  var ingredients = {};              
  for (var itemName in menu) {
    menu[itemName].forEach(function(ingredient){
      ingredients[ingredient]=1
    })
  }
  return Object.keys(ingredients)
}

//link up to index html to replace 'japanese' with selected menu
var ingredients = getIngredients(MenuApp.menus['Japanese-menu']);


channel.subscribe('starSelect', MenuApp.store.set);

var index = 0;

var showNextIngredient = function() {
  if (index >= ingredients.length) {
    document.body.classList.add('all-done');
  } else {
    var ingredient = ingredients[index++];
    var rating = MenuApp.store.get(ingredient);
    if (rating === undefined) {
      // Display ingredient so it can be rated.
      document.getElementById('ingredient').innerHTML = ingredient;
      channel.broadcast('renderStars', 0);
    } else if (index < ingredients.length) {
      // Ingredient has already been rated. Try the next ingredient.
      showNextIngredient();
    }
  }
};

//workshop code
channel.subscribe("starSelect",function(ingredient, starNumber){
  console.log(ingredient + ' was rated ' + Array(starNumber + 1).join('★'));
});
//shows/updates star select 
channel.subscribe("starSelect",function(ingredient, starNumber){
  channel.broadcast('renderStars', starNumber);
});

channel.subscribe('renderStars', function(starNumber){
  var stars = ol.getElementsByTagName("li");
  for(var i = 0; i < stars.length; i++) {
    stars[i].className = i < starNumber ? "selected" : "";
  }
});

document.getElementById('next-ingredient').addEventListener('click', function(event) {
  event.preventDefault();
  showNextIngredient();
}, false);

document.getElementById("main-menu").addEventListener('click', function(event) {
}, false);


ol.addEventListener("click",function(event){
  var ingredient = ingredients[index - 1];
  var starRating = Number(event.target.getAttribute("data-star-number"));
  channel.broadcast("starSelect", ingredient, starRating);
},false);

showNextIngredient();

