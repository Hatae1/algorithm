function charCount(str){

    let result = {};

    for(let i=0; i<str.length; i++){

        if(result[str[i]] === undefined ){

            result[str[i]] = 1;

        }else{

            result[str[i]]++;

        }

    }

    return result;
}


console.log(charCount('asjdfklas'));