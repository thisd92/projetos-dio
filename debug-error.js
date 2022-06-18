const referenceError = new ReferenceError("Envie os parâmetros")

const rangeError = new RangeError("Número maior que o tamanho do array")

function arrNum(arr, num){
    try{
        if(!arr || !num){
            throw referenceError
        }
        if(typeof(arr) != 'object'){
            throw new TypeError("Array deve ser do tipo Object")
        }
        if(typeof(num) != 'number'){
            throw new TypeError("Número deve ser do tipo Number")
        }
        if(num > arr.length){
            throw rangeError
        }
        return arr[num]
    }
    catch(e){
        if(e instanceof TypeError){
            throw e.message
        }
        else if(e instanceof ReferenceError){
            throw e.message
        }
        else if(e instanceof RangeError){
            throw e.message
        }else{
            console.log("Tipo de erro não esperado")
        }
    }
}

console.log(arrNum(4, 8))