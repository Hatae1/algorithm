
function solution(participant, completion) { 
  
    let answer = ''; 
  
    let tempArray = [...participant,...completion].sort();
       let set = new Set();
    for(let i=0; i<tempArray.length; i++){
  
              if(set.has(tempArray[i])){
            set.delete(tempArray[i]);
        }else{
            set.add(tempArray[i]);
        }
                
    } 
    
    set.forEach( (notCompletion) => {
        answer = notCompletion;
    });
    
    return answer;
  
  }