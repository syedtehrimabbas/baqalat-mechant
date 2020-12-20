export function numDifferentiation(value) {
    let val = Math.abs(value);
    if (val >= 10000000) {
        val = (val / 10000000).toFixed(2) + ' Cr';
    } else if (val >= 100000) {
        val = (val / 100000).toFixed(2) + ' Lac';
    }
    return val;
}

export function purposeOfProperty(is_rental) {
    if (is_rental === 1 || is_rental === "1")
        return "Rent";
    else return "Sale"
}