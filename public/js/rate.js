var channel=new airwaves.Channel();
var ol = document.getElementById("stars");

var ingredients = ["fresh roll", "vegetables", "tofu", "peanuts", "chili", 
                  "lime", "thai spiced", "corn", "fritters", "cucumber", 
                  "salad", "indian bread", "eggplant", "bell peppers", 
                  "basil", "green curry",	"dumplings", "shrimp", "pork", 
                  "thai ginger", "soy",	"puff pastry", "duck", "sweet potato",	 	 	
                  "spiced", "fish cakes", "yard long beans","nuts", "crispy", 
                  "tiger prawns", "sweet chili", "vinaigrette",	"golden pouches", 
                  "crab", "pineapple", "calamari","sriracha", "turnip cakes", 
                  "beansprouts", "chives", "beef", "chicken", "fish",
                  "scallops", "garlic", "bean curd",];
                  
var preparation = ["stewed", "fried", "fry","saute", "grilled", "baked", 
                  "seared","boiled", "pan-fried","roasted", "steamed", "poached", 
                  "fresh", "curried", "barecue", "toasted","stir-fried",]

channel.subscribe('starSelect', MenuApp.store.set);

var showNextIngredient = function() {
  // update DOM
  //to do:never reaching first item in list!
  ingredients.shift();
  document.getElementById("ingredient").innerHTML = ingredients[0];
};

showNextIngredient();
//workshop code
channel.subscribe("starSelect",function(ingredient, starNumber){
  console.log(ingredient + ' was rated ' + Array(starNumber + 1).join('★'));
});
//shows/updates star select 
channel.subscribe("starSelect",function(ingredient, starNumber){
  var stars = ol.getElementsByTagName("li");
  for(var i = 0; i < stars.length; i++) {
    stars[i].className = i < starNumber ? "selected" : "";
  }
});

document.getElementById('next-ingredient').addEventListener('click', function(event) {
  event.preventDefault();
  showNextIngredient();
}, false);

ol.addEventListener("click",function(event){
  var ingredient = ingredients[0];
  var starRating = Number(event.target.getAttribute("data-star-number"));
  channel.broadcast("starSelect", ingredient, starRating);
},false);
