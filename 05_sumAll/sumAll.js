const sumAll = function(start, end) {

    let sum = 0;
    let lowerNumber = 0;
    let higherNumber = 0;
    
    if (start > end) {
        higherNumber = start;
        lowerNumber = end;
    }
    else{
        lowerNumber = start;
        higherNumber = end;
    }

    if (typeof(start) !== 'number' || typeof(end) !== 'number'){
        return 'ERROR';
    }

    if (start < 0 || end < 0){
        return 'ERROR';
    }

    for (let i = lowerNumber; i < higherNumber + 1; i++) {
        sum += i;
    }

    return sum;

};

// Do not edit below this line
module.exports = sumAll;
