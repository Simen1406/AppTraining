function calculateTotal(price, quantity, discountCode) {
    let prisObjekt = {totalSum: 0, discount: 0, shipping: 0, warePrice: price }

    let total = price * quantity;
    let discountPercentage = 0
    const allowedDiscountCodes = ["DISCOUNT10", "DISCOUNT20"]

    if (allowedDiscountCodes.includes(discountCode) == false) {
        console.log("Ingen Rabattkode lagt til eller rabattkoden eksisterer ikke")
       discountPercentage = 0
    } else {
        if (discountCode == allowedDiscountCodes[0]) {
            prisObjekt.discount = 0.1
        } else {
            prisObjekt.discount = 0.2
        }
    }
    console.log("prisObjekt", Object.values(prisObjekt))
    let totalPrice = total * (1 - discountPercentage)
    if (Math.sign(totalPrice) == 1) {
        return totalPrice
    } else {
        return "Negativ pris, intern feil"
    }

}


console.log(calculateTotal(100, 2, 'DISCOUNT10')); // Example usage
console.log(calculateTotal(50, 3, 'DISCOUNT20')); // Example usage
console.log(calculateTotal(200, 5, "null"));
console.log(calculateTotal(-100, 2, "DISCOUNT10"));

