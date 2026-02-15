/*
Free Shipping
Given an array of strings representing items in your shopping cart, and a number for the minimum order amount to qualify for free shipping, determine if the items in your shopping cart qualify for free shipping.

The given array will contain items from the list below:

Item	Price
"shirt"	34.25
"jeans"	48.50
"shoes"	75.00
"hat"	19.95
"socks"	15.00
"jacket"	109.95
*/

function getsFreeShipping(cart, minimum) {
  const items = {
    shirt: {
      name: "shirt",
      price: 34.25,
    },
    jeans: {
      name: "jeans",
      price: 48.5,
    },
    shoes: {
      name: "shoes",
      price: 75.0,
    },
    hat: {
      name: "hat",
      price: 19.95,
    },
    socks: {
      name: "socks",
      price: 15.0,
    },
    jacket: {
      name: "jacket",
      price: 109.95,
    },
  };

  let total = 0;

  for (let i = 0; i < cart.length; i++) {
    switch (cart[i]) {
      case items.shirt.name:
        total += items.shirt.price;
        break;
      case items.jeans.name:
        total += items.jeans.price;
        break;
      case items.shoes.name:
        total += items.shoes.price;
        break;
      case items.hat.name:
        total += items.hat.price;
        break;
      case items.socks.name:
        total += items.socks.price;
        break;
      case items.jacket.name:
        total += items.jacket.price;
        break;
    }

    if (total >= minimum) {
      return true;
    }
  }

  return false;
}

function testCases() {
  console.log(getsFreeShipping(["shoes"], 50));
  console.log(getsFreeShipping(["hat", "socks"], 50));
  console.log(getsFreeShipping(["jeans", "shirt", "jacket"], 75));
  console.log(getsFreeShipping(["socks", "socks", "hat"], 75));
  console.log(getsFreeShipping(["shirt", "shirt", "jeans", "socks"], 100));
  console.log(
    getsFreeShipping(["hat", "socks", "hat", "jeans", "shoes", "hat"], 200),
  );
}

testCases();
