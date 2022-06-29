/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
    
    let value = 0;
    let sum = 0;
    let previous = 0;
    
    
        
    for (let i = s.length-1; i >= 0; i--) {
        
        switch (s.charAt(i)) {
        case 'I':
            value = 1;
            break;
        case 'V':
            value = 5;
            break;
        case 'X':
            value = 10;
            break;
        case 'L': 
            value = 50;
            break;
        case 'C':
            value = 100;
            break;
        case 'D':
            value = 500;
            break;
        case 'M':
            value = 1000;
            break;
        }
        
        if (previous > value) {
            sum -= value;
            previous = value;
        }
        else {
            sum += value;
            previous = value;
        }
    }
    return sum;
};