const nums = [23,25,48,12,47,45];


console.log(nums);
console.log(typeof nums);

const movies = ['batman','barbie','dol','gadar','conjuring','inception'];
console.log(movies.length);
console.log(movies[3]);
console.log(movies.at(-2));

// slicing

console.log(movies.slice(2,5));
console.log(movies.slice(2,-1));
console.log(movies.slice(2));
console.log(movies.slice(2,100));

// adding elements


 movies.push('PK'); //at the end
 movies.unshift('Flash');// add at start

 console.log(movies)

 movies.pop();
 movies.shift();

 console.log(movies);

 movies.splice(3,2);
 console.log(movies);

 movies.splice(1, 1, 'forzen');
 console.log(movies);

//  sperat oprator

console.log(...movies);
console.log([...movies , 'mi1', 'mi2']);

