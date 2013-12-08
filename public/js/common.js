window.MenuApp = {};

MenuApp.store = {
  set: function(key, value) {
    localStorage[key] = JSON.stringify(value);
  }, 
  get: function(key, default_) {
    if (Object.prototype.hasOwnProperty.call(localStorage, key)) {
      return JSON.parse(localStorage[key]);
    } else {
      return default_;
    }
  }
};
MenuApp.menus = {}
MenuApp.diets = {}
MenuApp.cuisines = {}


MenuApp._printCuisine = function(menuIds) {
  var ingredients = {};
  for (var i = 0; i < menuIds.length; i += 1) {
    var menuId = menuIds[i];
    var menu = MenuApp.menus[menuId];
    for (var name in menu) {
      for (var j = 0; j < menu[name].length; j += 1) {
        var ingredient = menu[name][j];
        ingredients[ingredient] = 1;
      }
    }
  }
  return JSON.stringify(Object.keys(ingredients).sort(), null, 2);
};