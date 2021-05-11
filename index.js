let arr = [[0,"ab"],[6,"cd"],[0,"ef"],[6,"gh"],[4,"ij"],[0,"ab"],[6,"cd"],[0,"ef"],[6,"gh"],[0,"ij"],[4,"that"],[3,"be"],[0,"to"],[1,"be"],[5,"question"],[1,"or"],[2,"not"],[4,"is"],[2,"to"], [4, "the"]]
let novoArr = [[1,"e"], [2, "a"], [1,"b"], [3,"a"], [4, "f"], [1, "f"], [2, "a"], [1,"e"], [1, "b"], [1,"c"]]


function countSort(arr) {
           //  Verificar o ultimo valor do arrays --- 
           let biggerNumberArray = 0;
           for(let i = 1; i <= arr.length - 1; i++){
               if(arr[i][0] > arr[i - 1][0] && arr[i][0] > biggerNumberArray){
                   biggerNumberArray = arr[i][0];               
               }
          
           }
   
       //  ----- trocando primeira metade por -   ---------------
           for(let i = 0; i < arr.length/2; i++){
               arr[i][1] = "-"
       }
    
       // ------ ordenando o array ------ 
           let newArr = []  
           for(let j = 0; j <= biggerNumberArray; j++){
               arr.forEach(function(nome, i) {
                   if(arr[i][0] === j){
                       newArr.push(arr[i])
                       
                   }
               })         
           }
         
   
   
       // Imprimindo o array final sem os numeros 
           let finalString = ""
           for(let i = 0; i <= newArr.length - 1; i++){
               if(i === 0 || i === newArr.length){
                finalString = finalString + newArr[i][1]
               }
               finalString = finalString + " " + newArr[i][1]
           }

           console.log(finalString.toString())
        
}
    
    countSort(arr) 
        
