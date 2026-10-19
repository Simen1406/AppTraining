function calculateTotal(price, quantity, discountCode) {
    let innvoice = {totalSum: 0, discount: 0, shipping: 50, warePrice: price * quantity, error: ""}
    const allowedDiscountCodes = ["DISCOUNT10", "DISCOUNT20"]
    const freeShipping = 1000

    if (Math.sign(price) != 1 || Math.sign(quantity) != 1)
        return "Error negative price or quantity"

    if (innvoice.warePrice >= freeShipping) 
        innvoice.shipping = 0


    /*checking that discount is one of my activated discount codes*/ 
    if (allowedDiscountCodes.includes(discountCode) == false) {
        innvoice.error = "ingen rabattkode, eller rabattkode eksisterer ikke"
    } else {
        if (discountCode == allowedDiscountCodes[0]) {
            innvoice.discount = 0.1
        } else {
            innvoice.discount = 0.2
        }
        innvoice.totalSum = (innvoice.warePrice + innvoice.shipping) * (1 - innvoice.discount)
        return innvoice
    }

    innvoice.totalSum = innvoice.warePrice + innvoice.shipping
    return innvoice.totalSum

}


console.log(calculateTotal(100, 2, 'DISCOUNT10')); // Example usage
console.log(calculateTotal(500, 2, "")); // Example usage
console.log(calculateTotal(-100, 2, "DISCOUNT10"));

