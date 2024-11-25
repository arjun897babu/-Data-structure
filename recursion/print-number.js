//print number upto the limit

function printNumber(limit,number=1){
    if(limit<=1){
        return number
    }
    console.log(number)
    return printNumber(limit-1,number+1)
}


console.log(printNumber(10))