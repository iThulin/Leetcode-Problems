/**
 * @param {number} n
 * @return {number}
 */
var subtractProductAndSum = function(n) {
    const array = Array.from(String(n))
    
    let product = 1;
    let sum = 0;
    
    for (let i = 0; i < array.length; i++) {
        product *= parseInt(array[i]);
        sum += parseInt(array[i]);
    }

    return (product - sum)
};