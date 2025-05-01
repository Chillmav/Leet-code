// Brute force
var minEatingSpeed = function(piles, h) {
    let k = 1;
    while (k <= Math.max(...piles)) {
        let hours = 0;
        for (let pile of piles) {
            if (pile / k > Math.floor(pile / k)) {
                hours += Math.floor(pile / k) + 1
            } else {
                hours += Math.floor(pile / k)
            }
        }
        if (hours <= h) {
            return k
        }
        k++
        
        
    }
};

// Binary Search

var minEatingSpeed = function(piles, h) {

let start = 1
let max = Math.max(...piles)
let result;

while (start <= max) {
    let hours = 0;
    let mid = Math.floor((start + max) / 2)
    for (let pile of piles) {
        hours += Math.ceil(pile / mid)
    }
    if (hours <= h) {
        result = mid;
        max = mid - 1
    } else  {
        start = mid + 1
    }

}
return result

};