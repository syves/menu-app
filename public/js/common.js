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