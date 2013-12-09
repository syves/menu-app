.PHONY: all
all: \
	public/js/menus/atlas-cafe.js \
	public/js/menus/basil.js \
	public/js/menus/big-lantern.js \
	public/js/menus/dosa.js \
	public/js/menus/la-boulange.js \
	public/js/menus/little-star-pizza.js \
	public/js/menus/loving-hut.js \
	public/js/menus/marnee-thai.js \
	public/js/menus/pakwan.js \
	public/js/menus/pancho-villa-taqueria.js \
	public/js/menus/range.js \
	public/js/menus/roku-izakaya.js \
	public/js/menus/rosamunde.js \
	public/js/menus/savor.js \
	public/js/menus/sunflower.js \
	public/js/menus/sushi-zone.js \
	public/js/menus/tartine-bakery.js \
	public/js/menus/tuba.js \
	public/js/menus/udupi-palace.js \
	public/js/cuisines/indian.js


public/js/menus/%.js:
	@printf '%s' 'var menu = ' > $@
	@bin/getMenu $* >> $@
	@echo >> $@
	@echo 'if (typeof module !== "undefined") { // node' >> $@
	@echo '  module.exports = menu;' >> $@
	@echo '} else { // browser' >> $@
	@echo '  MenuApp.menus["$*"] = menu;' >> $@
	@echo '}' >> $@


public/js/cuisines/indian.js: \
		public/js/menus/dosa.js \
		public/js/menus/udupi-palace.js
	@printf '%s' 'MenuApp.cuisines["indian"] = ' > $@
	@bin/getCuisine $^ >> $@
	@echo ';' >> $@


.PHONY: setup
setup:
	@npm install


.PHONY: server
server:
	@node server.js
