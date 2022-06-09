const sumAll = function(a, b) {
    if(a < 0 || b < 0){
        return 'ERROR';
    }
    if(typeof(a) != 'number' || typeof(b) != 'number'){
        return 'ERROR';
    }
    let result = 0;
    if(a < b){
        result = a;
        for (; a < b; a++){
            //console.log(`${result} += ${a + 1}: `);
            result += (a + 1);
            //console.log(result + "\n");
        }
        //console.log(`\n\nfinal result is: ${result}`)
        return result;
    }
    if(b < a){
        result = b;
        for(; b <a; b++){
            result += (b + 1);
        }
        return result;
    }

};

// Do not edit below this line
module.exports = sumAll;
