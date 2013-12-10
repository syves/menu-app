var menu = {
  "Miso Soup": [
    "miso",
    "soup"
  ],
  "Edamame": [
    "edamame"
  ],
  "Steamed Soybeans": [
    "soybeans"
  ],
  "Mussel On Half Shell": [
    "mussel",
    "shell"
  ],
  "Salad": [
    "salad"
  ],
  "Tekka": [
    "tekka"
  ],
  "Sake-Maki": [
    "sake-maki"
  ],
  "Hama-Negi": [
    "hama-negi"
  ],
  "Gari-Saba": [
    "gari-saba"
  ],
  "California Roll": [
    "californiaroll"
  ],
  "New York Roll": [
    "new",
    "york roll"
  ],
  "Alaskan Roll": [
    "alaskan roll"
  ],
  "New Zealand Roll": [
    "New Zealand Roll"
  ],
  "King California": [
    "King California"
  ],
  "Tuna-Masa Roll": [
    "tuna-masa roll"
  ],
  "Hama-Masa Roll": [
    "hama-masa roll"
  ],
  "Spicy Tuna": [
    "spicy",
    "tuna"
  ],
  "Rock ‘N Roll": [
    "eel",
    "avacado",
    "unagi"
  ],
  "Papaya Unagi": [
    "papaya",
    "unagi"
  ],
  "Mango Hamachi": [
    "mango",
    "hamachi"
  ],
  "Sushi Combination Plate": [
    "nigiri sushi",
    "california roll"
  ],
  "Chirashi-Sushi": [
    "chirashi-sushi",
  ],
  "Sashimi": [
    "sashimi",
  ],
  "Sashimi Combination Plate": [
    "sashimi",
  ],
  "Ebi": [
    "ebi"
  ],
  "Saba": [
    "saba"
  ],
  "Sake": [
    "sake"
  ],
  "Suzuki": [
    "suzuki"
  ],
  "Hamachi": [
    "hamachi"
  ],
  "Maguro": [
    "maguro"
  ],
  "Unagi": [
    "unagi"
  ],
  "Tako": [
    "tako"
  ],
  "Masago": [
    "masago"
  ],
  "Ikura": [
    "ikura"
  ],
  "Kappa": [
    "kappa"
  ],
  "Shitake": [
    "shitake"
  ],
  "Oshinko": [
    "oshinko"
  ],
  "Spinach": [
    "spinach"
  ],
  "Avocado": [
    "avocado"
  ],
  "Natto": [
    "natto"
  ],
  "Inari": [
    "inari"
  ],
  "Mango Avocado": [
    "mango",
    "avocado"
  ]
}

if (typeof module !== "undefined") { // node
  module.exports = menu;
} else { // browser
  MenuApp.menus["sushi-zone"] = menu;
}
