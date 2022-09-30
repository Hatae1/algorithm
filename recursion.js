function flatten(arrayOfarray){

    let arr = [];

    if(arrayOfarray.length === 0){
        return [];
    }

    if( Array.isArray(arrayOfarray[0])){

        arr.push(...arrayOfarray[0]);
        return arr.concat(flatten(arrayOfarray.splice(1)));
        
    }else{

        arr.push(arrayOfarray[0]);
        return arr.concat(flatten(arrayOfarray.splice(1)));

    }

    // add whatever parameters you deem necessary - good luck!
  }
  
  console.log(flatten([1,2,3,[4,5]]));
  console.log(flatten([1, 2, 3, [4, 5] ])); // [1, 2, 3, 4, 5]
  console.log(flatten([1, [2, [3, 4], [[5]]]])) // [1, 2, 3, 4, 5]
  console.log(flatten([[1],[2],[3]])) // [1,2,3]
  // flatten([[[[1], [[[2]]], [[[[[[[3]]]]]]]]]]) // [1,2,3