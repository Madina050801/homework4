//1;
let a = +'230.000';
let b = +'00402';
let c = +'03.1400';
let d = +'30';
console.log(c);

//2;
let mas = ['q', 'q', 'qq', 'q', 'q']
let count=0;

for(i=0; i<=mas.length; i++){
    if(mas[i] == mas[i+1]){
        count++;
    }
}
if(count==mas.length){
    console.log('true');
} else{
    console.log('false');
}

// 3;
let array = [];
let son = 86420;
let sonTemp = son.toString();
for(i=sonTemp.length; i>=0; i--){
    let son2 = sonTemp[i];
    array.push(son2);
}
console.log(sonTemp.concat(array.join('')));

// 4;
var myString = "MarvinTalksTooMuch"
var newString = "";
var wasUpper = false;
for (var i = 0; i < myString.length; i++)
{
    if (!wasUpper && myString[i] == myString.toUpperCase()[i])
    {
        newString = newString + " ";
        wasUpper = true;
    }
    else
    {
        wasUpper = false;
    }
    newString = newString + myString[i];
}
console.log(newString);