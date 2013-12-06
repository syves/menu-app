.PHONY: all
all: \
  public/js/menus/atlas-cafe.js \
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
  public/js/menus/roku.js \
  public/js/menus/rosamunde.js \
  public/js/menus/savor.js \
  public/js/menus/sunflower.js \
  public/js/menus/sushi-zone.js \
  public/js/menus/tartine-bakery.js \
  public/js/menus/tuba.js \
  public/js/menus/udapi-palace.js
 
 
public/js/menus/atlas-cafe.js:
	@printf '%s' 'MenuApp.menus["atlas"] = ' > $@
	@bin/getMenu atlas-cafe >> $@


public/js/menus/basil.js:
	@printf '%s' 'MenuApp.menus["basil"] = ' > $@
	@bin/getMenu basil >> $@


public/js/menus/big-lantern.js:
	@printf '%s' 'MenuApp.menus["big-lantern"] = ' > $@
	@bin/getMenu big-lantern >> $@


public/js/menus/dosa.js:
	@printf '%s' 'MenuApp.menus["dosa"] = ' > $@
	@bin/getMenu dosa >> $@


public/js/menus/la-boulange.js:
	@printf '%s' 'MenuApp.menus["la-boulange"] = ' > $@
	@bin/getMenu la-boulange >> $@


public/js/menus/little-star-pizza.js:
	@printf '%s' 'MenuApp.menus["little-star-pizza"] = ' > $@
	@bin/getMenu little-star-pizza >> $@


public/js/menus/loving-hut.js:
	@printf '%s' 'MenuApp.menus["loving-hut"] = ' > $@
	@bin/getMenu loving-hut >> $@


public/js/menus/marnee-thai.js:
	@printf '%s' 'MenuApp.menus["marnee-thai"] = ' > $@
	@bin/getMenu marnee-thai >> $@


public/js/menus/pakwan.js:
	@printf '%s' 'MenuApp.menus["pakwan"] = ' > $@
	@bin/getMenu pakwan >> $@


public/js/menus/pancho-villa-taqueria.js:
	@printf '%s' 'MenuApp.menus["pancho-villa-taqueria"] = ' > $@
	@bin/getMenu pancho-villa-taqueria >> $@


public/js/menus/atlas-cafe.js:
	@printf '%s' 'MenuApp.menus["atlas"] = ' > $@
	@bin/getMenu atlas-cafe >> $@


public/js/menus/atlas-cafe.js:
	@printf '%s' 'MenuApp.menus["atlas"] = ' > $@
	@bin/getMenu atlas-cafe >> $@


.PHONY: setup
setup:
	@npm install


.PHONY: server
server:
	@node server.js
