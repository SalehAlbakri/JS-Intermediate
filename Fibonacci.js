//code:
var  X=[0,1]
for (let i=0; i<=30; i++) {
    if (i>1) {
        X[i]=X[i-1] + X[i-2]
    }
    console.log(X[i])
}