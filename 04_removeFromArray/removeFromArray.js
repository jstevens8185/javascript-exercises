const removeFromArray = function(array, ...argugments) {
    let newArray = array;
    //console.log(argugments.length);
    for(let i = 0; i < argugments.length; i++){
        //console.log('in for loop\n');
        if (newArray.indexOf(argugments[i]) != -1){
            newArray.splice((newArray.indexOf(argugments[i])), 1);
        }
    }
        //console.log(newArray.indexOf(argugments));
    return newArray; 
};

// Do not edit below this line
module.exports = removeFromArray;
