function validAnagram(str1, str2){

    if(str1.length !== str2.length){
        return false;
    }

    let strArray = {};
    let strCompareArray = {};

    for(let i=0; i<str1.length; i++){
        strArray[str1[i]] = (strArray[str1[i]] || 0 ) + 1; 
    }

    for(let i=0; i<str2.length; i++){
        strCompareArray[str2[i]] = (strCompareArray[str2[i]] || 0 ) + 1; 
    }

    for(key in strArray){

        if( strCompareArray[key] === undefined){
            return false;
        }

        if(strCompareArray[key] !== strArray[key]){
            console.log(strCompareArray[key]);
            return false;
        }
    }

    return true;
    
    
}

validAnagram('aaa', 'zza');




/*
validAnagram('',''); // true
validAnagram('aaa', 'zza') // false
validAnagram('anagram', 'nagaram') // true
validAnagram('rat', 'car') //false
validAnagram('awesome', 'awesom') //false
validAnagram('qwerty', 'qeywrt') //true
validAnagram('texttwisttime', 'timetwisttext') //true


*/