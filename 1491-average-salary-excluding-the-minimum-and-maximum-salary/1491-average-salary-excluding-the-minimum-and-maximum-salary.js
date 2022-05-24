/**
 * @param {number[]} salary
 * @return {number}
 */
var average = function(salary) {
    let minSalary = salary[0];
    let maxSalary = salary[0];
    let addedSalaries = 0;
    let countedSalaries = 0;
    
    for (let i = 0; i < salary.length; i++) {
        
        if (salary[i] < minSalary) minSalary = salary[i];
        else if (salary[i] > maxSalary) maxSalary = salary[i];
        
        addedSalaries += salary[i];
        countedSalaries ++;
    }
    return (((addedSalaries - minSalary) - maxSalary) / (countedSalaries - 2))
};