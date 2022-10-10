function merge(array, array2){
    
    let i = 0;
    let j = 0;
    let mergeArray = [];
    
    while(i < array.length && j < array2.length){
        
        if(array[i] < array2[j]){
            mergeArray.push(array[i]);
            i++;
        }else{
            mergeArray.push(array2[j])
            j++;
        }
        
    }

    while(i<array.length){
        mergeArray.push(array[i]);
        i++;
    }

    while(j<array2.length){
        mergeArray.push(array2[j]);
        j++;
    }

    console.log(i,j)

    return mergeArray;

}



console.log(merge([1,10,50], [2,14,99,100])) // 
