
var TimeMap = function() {

    this.map = new Map();

};

/** 
 * @param {string} key 
 * @param {string} value 
 * @param {number} timestamp
 * @return {void}
 */

TimeMap.prototype.set = function(key, value, timestamp) {

    if (!this.map.has(key)) {
        this.map.set(key, [[value, timestamp]]);
    } else {
        this.map.get(key).push([value, timestamp]);
    }

};

/** 
 * @param {string} key 
 * @param {number} timestamp
 * @return {string}
 */

TimeMap.prototype.get = function(key, timestamp) {

    if (!this.map.has(key)) {
        return "";

    } else {

        const arr = this.map.get(key);

        // arr = [['foo', 2], ['coo', 3], ['auuu', 5]];

        let left = 0;
        let right = arr.length - 1;
        let result = "";
        while (left <= right) {

            const mid = Math.floor((left + right) / 2);
            let t = arr[mid][1];

            if (t > timestamp) {
                right = mid - 1;
            } else if (t <= timestamp) {
                result = arr[mid][0]
                left = mid + 1;
            } else {
                return result;
            }
        }
        return result;

    }

};
