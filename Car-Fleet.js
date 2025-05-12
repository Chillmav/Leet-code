
var carFleet = function(target, position, speed) {

    const arr = [];
    let res = 0;
    for (let i = 0; i < position.length; i++) {
        arr.push([position[i], speed[i]]);
    }
    arr.sort((a, b) => b[0] - a[0]);
    while (arr.length !== 0) {
        const [pos, spd] = arr.shift();
        const difference = (target - pos) / spd;
        while (arr.length && (target - arr[0][0])/arr[0][1] <= difference) {
            arr.shift();
        }
        res++;
    }
    return res;
};