var X = ['Man', 'I', 'Love','The','Matrix','Program'];
var str = '';
var newArr = [];
for(let i=0; i<X.length; i++){
    if(X[i] !== 'Program'){
        newArr.push(X[i]);
    }else {
        for(var j=0; j<X[i].length; j++){
            str += '*';
        }
        newArr.push(str);
        str = '';
    }
}
console.log(newArr);