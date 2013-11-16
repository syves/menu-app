window.MenuApp = {};

MenuApp.store = {
  set: function(key, value) {
    localStorage[key] = JSON.stringify(value);
  }, 
  get: function(key, default_) {
    if (key in localStorage){
      return JSON.parse(localStorage[key]);
    } else {
      return default_;
    }
  }
};
