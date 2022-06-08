const repeatString = function(string, num) {
    message = '';
    if(num < 0){
        return message = 'ERROR';
    }
    for(let i = 0; i < num; i++){
        message += string;
    }
    return message;
};

// Do not edit below this line
module.exports = repeatString;
