// Brute force

// var searchMatrix = function(matrix, target) {
//     const flatArr = [];

//     for (let row of matrix) {
//         for (let i of row) {
//             flatArr.push(i)
//         }
//     }

//     let start = 0;
//     let end = flatArr.length - 1;

//     while (start <= end) {
//         const mid = Math.floor((start + end) / 2);
//         if (flatArr[mid] < target) {
//             start = mid + 1
//         } else if (flatArr[mid] > target) {
//             end = mid - 1
//         } else {
//             return true
//         }

//     }
//     return false
// };

// Suboptimal 

// var searchMatrix = function(matrix, target) {

//     const lastIndex = matrix[0].length - 1

//     let start = 0;
//     let end = matrix.length - 1;

//     while (start <= end) {
//         const mid = Math.floor((start + end) / 2);
//         if (matrix[mid][lastIndex] < target) {
//             start = mid + 1
//         } else if (matrix[mid][lastIndex] >= target && matrix[mid][0] <= target) {
            
//             for (let i = 0; i <= lastIndex; i++) {
//                 if (matrix[mid][i] === target) {
//                     return true
//                 }
                
//             }
//             return false
//         } else if (matrix[mid][0] > target) {
//             end = mid - 1
//         } else {
//             return true
//         }
//     }
//     return false
// };