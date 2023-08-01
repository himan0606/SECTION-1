let user = {
    name: 'ramu',
    email: 'ramu@mail.com',
    password: '24654875guh',
    age: 32
};

console.log(user.name);
console.log(user['email']);

user.password = 'vgfdgshqkjh';
user.address = 'Lucknow';

console.log(user)


let smartphone = {
    brand : 'sumsung',
    modal : 's23',
    price : 70000,
    color : ['red' , 'black', 'blue'],
    feature : {
        cpu : 'sd 865',
        ram : '8gb',
        storage : '128gb'
    }

};

console.log(Object.keys(smartphone));
console.log(Object.values(smartphone));

console.log(smartphone.color[2]);

smartphone.color[2] = 'grey';
console.log(smartphone.color)

// syntax to change the cpu of smartphone to 'sd 880'

smartphone.feature.cpu = 'sd 880';
console.log(smartphone.feature)


// display all the keys of feature object

console.log(Object.keys(smartphone.feature))



let smartphones = [
{
    brand : 'poco',
    modal :  ' M4 pro',
    price :  '22500',
    color : ['blue', 'yellow']
},
{
    brand : 'moto',
    modal :  ' G8',
    price :  '16000',
    color : ['black', 'blue', 'white']
},
{
    brand : 'nothing',
    modal :  ' 2',
    price :  '35000',
    color : ['white', 'black']
},
{
    brand : 'sumsung',
    modal :  ' S23',
    price :  '22500',
    color : ['blue', 'black']
},
]

smartphones[1].price = 20000;
console.log(smartphones);

smartphones[2].color.push('grey');

console.log(smartphones)

let count = 0;

for(let phone of smartphones){
    if(phone.price < 50000) count++;
}

console.log(count);


// use map get an array of all the brand of smartphone 
// use filter get all smartphone having price less than 50000
// use filter get  all samrtphone having color black 

let brands = smartphones.map( (phone) => { return phone.brand });

console.log(new Set(brands));

let phone1 = smartphones.filter( (phone) => { return phone.price<50000 });
console.log(phone1);


let phone2 = smartphones.filter( (phone) => { return phone.color.includes('black') });
console.log(phone2);







