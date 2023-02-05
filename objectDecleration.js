let shoppingCart = {
    shirt: '5pcs',
    pant: '10pcs',
    belt: '3pcs'
}

console.log(shoppingCart);

shoppingCart.belt = 50;
console.log(shoppingCart);

delete shoppingCart.pant;
console.log(shoppingCart);