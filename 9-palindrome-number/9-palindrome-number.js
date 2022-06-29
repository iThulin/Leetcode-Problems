/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    
    if (x < 0) return false;
    
    let temp = Array.from(x.toString());
    let reversedArray = [];
    
    for (let i = temp.length - 1; i >= 0; i--) {
        reversedArray.push(temp[i]);
    }

    let reversedInt = reversedArray.join("")
    
    if (reversedInt == x) return true
    else return false
};