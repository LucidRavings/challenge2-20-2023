let arr1 = [1, 4, 11, 2, 37, -4]
let arr2 = [0, 21, 33, 6, 0, -9]
let arr3 = [0, 1, 2, 3, 4, 5]
let answer = false

for(i = 0; i < arr1.length; i++){
    for(a = i; a < arr1.length - 1; a++){
        if(arr1[i] + arr1[a+1] === 0){
        answer = true
        }console.log("Cycle:" + [i] + " Round:" + [a] + "|" + arr1[i] + "+" + arr1[a+1])
    }
}
console.log("At least two numbers in this array add to zero: " + answer)