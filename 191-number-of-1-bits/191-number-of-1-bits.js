/**
 * @param {number} n - a positive integer
 * @return {number}
 */
var hammingWeight = function(n) {
    const array = n.toString(2).split("");
    let counter = 0
    
    for (let i = 0; i < array.length; i++) {
        if (array[i] == '1') counter++    
    }
    return counter;
};