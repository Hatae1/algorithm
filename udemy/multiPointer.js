function sumZero(arr){

    let left = 0;
    let right = arr.length-1;


    while(left < right){

        let result = arr[right] + arr[left];

        console.log(arr[left], arr[right], result);
        if(result === 0 ){
            
           return [arr[left], arr[right]];

        }

        if(result > 0){
            right --;
        }else{
            left ++;
        }

    }


}
//console.log(sumZero([-3,-2,-1,0,1,2,3]));
console.log(sumZero([-2,0,1,3]));
//console.log(sumZero([1,2,3]));

//sumZero([-3,-2,-1,0,1,2,3]); //[-3,3]
//sumZero([-2,0,1,3]); //undefined
//sumZero([1,2,3]); //undefined



