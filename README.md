# MenuApp

### Installation

    make setup    # install dependencies
    make server   # start the development server on localhost:2999

### Adding a menu

Add target to Makefile (copy an existing target). Then run:

    make

### Updating existing menus

    rm public/js/menus/*
    git checkout -- public/js/menus/thai.js
    make
