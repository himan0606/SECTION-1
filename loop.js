for(let i=0; i<=10; i++){
    console.log(i);
};

console.log('-------------------');

for(let i=20; i>=0; i-=3){
    console.log(i);
};

// WAP to print all numbers divisible by
// 7 & 11 in range of 50 - 1000;

// program to check if a number is perfect square

for(let i=50; i<=1000; i++){
    if(i%7==0 && i%11==0){
        console.log(i);
    }
}
console.log('-------------------');
        
let n = 26;

const sqrt = n**0.5;

// if( sqrt === parseInt(sqrt)){
// if( Number.isInteger(sqrt)){
if( sqrt % 1 === 0){
    console.log('Perfect Square');
}else{
    console.log('Not a Perfect Square');
}

console.log(34.5 == '34.5');

// While Loop

let mynum = 5;

while(mynum <= 20){
    console.log(mynum);
    mynum +=2;
}

mynum = 5;

do{
    console.log(mynum);
}while(mynum > 10);

// WAP to reverse digits of a number

let m = 3762578;
let rev = 0;

while(m>0){
    console.log(rev);
    let d = m%10;
    rev = rev*10 + d;
    m = parseInt(m/10);
}

console.log(rev);