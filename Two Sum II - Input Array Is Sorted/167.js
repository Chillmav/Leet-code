
// Brute force 

// var twoSum = function(numbers, target) {

//     for(let i = 0; i < numbers.length; i++) {
//         if (numbers[0] + numbers[i] > target) {
//             numbers.splice(i, numbers.length - 1)
//         }
//     }
    
//     for(let i = 0; i < numbers.length - 1; i++) {
//         for (let j = numbers.length - 1; j > i; j--) {
//             if (numbers[i] + numbers[j] === target) {
//                 return [i + 1, j + 1]

//             }
//         }
//     }
// };

// Efficient solution

var twoSum = function(numbers, target) {
    let result = false
    let i = 0;
    let j = numbers.length - 1

    while (!result) {

        if (numbers[i] + numbers[j] === target) {

            return [i + 1, j + 1]

        } else if (numbers[i] + numbers[j] > target) {
            j--
        } else {
            i++
        }
    }
    
};