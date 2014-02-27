var channel=new airwaves.Channel();
MenuApp.channel = channel;
var ol = document.getElementById("stars");

var scoreMenuItem = function(itemAttrs, defaultRating, ratings){
  console.log('ratings:', ratings);
  return itemAttrs.map(function(attr) {
    if (ratings.hasOwnProperty(attr)) {
      return ratings[attr];
    } else {
      return MenuApp.store.get(attr, defaultRating);
    }
  }).reduce(function(a,b){
    return a + b;
  },0) / itemAttrs.length;
}

var showTop5 = function(menu){
  var pairs =[]

  for (var name in menu) {
    console.log('selectedDiet:', selectedDiet);
    var score = scoreMenuItem(menu[name], 3, MenuApp.diets[selectedDiet] || {});
    console.log(name + ' (' + score + ')');
    pairs.push([score, name]);
  }
  pairs.sort(function(a,b){
    if (a[0] > b[0]) return -1;
    if (a[0] < b[0]) return +1;
    return 0;
  });
  
  pairs.slice(0,5).forEach(function(pair) {
    var score = pair[0];
    var name = pair[1];
    console.log(name + ' (' + score.toFixed(1) + ') Ingredients: ' + menu[name].join(', '))
  });

  var suggestions = document.getElementById('suggestions');
  // delete old stuff
  suggestions.innerHTML='';
  pairs.slice(0, 5).forEach(function(pair) {
    var score = pair[0];
    var name = pair[1];
    var li = document.createElement('li');
    var b = document.createElement('b');
    b.appendChild(document.createTextNode(name));
    li.appendChild(b);
    li.innerHTML += ' (' + starScore(score) + ') Ingredients: ' + menu[name].join(', ');
    suggestions.appendChild(li);
  });
}

//make an event
var selectedMenu = null;
var ingredients = null;
var index = null;
var selectMenu = function(menuId) {
  console.log('selectMenu', 'menuId:', menuId);
  if (menuId) {
    selectedMenu = menuId;
    var menu = MenuApp.menus[selectedMenu];
    ingredients = getIngredients(menu);
    index = 0,
    showNextIngredient();
    showTop5(menu);
    document.getElementById('menus').value = menuId;
    document.body.classList.remove("default-state");
  } else {
    document.body.classList.add("default-state");
  }
};

document.getElementById("menus").addEventListener('change', function() {
  selectMenu(this.value);
}, false);

//special diet
var selectedDiet = null;
var selectDiet = function(dietId) {
  if (dietId) {
    selectedDiet = dietId;
    showTop5(MenuApp.menus[selectedMenu]);
  }
};

document.getElementById("diets").addEventListener('change', function() {
  selectDiet(this.value);
}, false);

//cuisine
var selectedCuisine = null;
var selectCuisine = function(cuisineId) {
  if (cuisineId) {
    selectedcuisine = cuisineId;
    showTop5(MenuApp.menus[selectedMenu]);
  }
};

document.getElementById("cuisines").addEventListener('change', function() {
  selectCuisine(this.value);
}, false);

// Takes a number representing a star rating and returns a string
// of HTML containing the stars, as images.
var starScore = function(rating) {
  if (rating < 0.25) {
    return "";
  } else if (rating < 0.75) {
    return halfStar;
  } else {
    return fullStar + starScore(rating - 1);
  }
};

var getIngredients = function(menu){
  var ingredients = {};              
  for (var itemName in menu) {
    menu[itemName].forEach(function(ingredient){
      ingredients[ingredient]=1
    })
  }
  return Object.keys(ingredients)
}

channel.subscribe("starSelect", function() {
  showTop5(MenuApp.menus[selectedMenu]);
});

channel.subscribe('starSelect', MenuApp.store.set);

//channel.subscribe('dietSelect',function(ingredient, starNumber){
//  channel.broadcast('renderStars', starNumber);
//});

var showNextIngredient = function() {
  if (index >= ingredients.length) {
    document.body.classList.add('all-done');
  } else {
    document.body.classList.remove('all-done');
    var ingredient = ingredients[index++];
    var rating = MenuApp.store.get(ingredient);
    if (rating === undefined) {
      // Display ingredient so it can be rated.
      document.getElementById('ingredient').innerHTML = ingredient;
      channel.broadcast('renderStars', 0);
    } else {
      // Ingredient has already been rated. Try the next ingredient.
      showNextIngredient();
    }
  }
};
//automatically shows next ingredient after half sec
channel.subscribe('starSelect', function() {
  setTimeout(function(){
    showNextIngredient();
    channel.broadcast('renderStars', 0);
  }, 500);
});

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

ol.addEventListener("click",function(event){
  var ingredient = ingredients[index - 1];
  var starRating = Number(event.target.getAttribute("data-star-number"));
  channel.broadcast("starSelect", ingredient, starRating);
},false);

















var fullStar = [
  '<img class="full-star" src="data:image/jpeg;base64,',
  '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"/>'
].join('');

var halfStar = [
  '<img class="half-star" src="data:image/jpeg;base64,',
  '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',
  'AAZUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAH/9k="/>'
].join('');
