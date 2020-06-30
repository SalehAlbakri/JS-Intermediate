// Code:
function Negative(X) {
    var arr = [];
    for (let i=0; i<X.length; i++) {
        if (X[i] >= 0) {
            arr.push(X[i])
        }
    }
    console.log(arr)
}
Negative([1,-2,4,1])