const repeatString = function(string, count) {

    let new_string='';

    if (count < 0) return 'ERROR'

    for (let i = 0; i < count; i++) {
        new_string += string;
    }

    return new_string;
};

// Do not edit below this line
module.exports = repeatString;