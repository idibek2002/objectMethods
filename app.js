//task1

// const obj = {
//     upvotes:2,
//     downvotes:33,
// }

// function getVoteCount(obj) {
//     return Object.values(obj).reduce((a,b) => a-b)
// }
// console.log(getVoteCount(obj));

//task2

// const obj = {
//     upvotes:2,
//     downvotes:33,
// }

// function isEmpty(obj) {
//     return Object.keys(obj).length === 0
// }
// console.log(isEmpty(obj));


//task3


// function maximumScore(obj) {
//     let sum=0
//     Object.values(obj).map((e) => sum+=e.score)
//     return sum
// }
// console.log(maximumScore([{ tile:"N", score:1 }, { tile:"K", score:5 }, { tile:"Z", score:10 }, { tile:"X", score:8 }, 
// { tile:"D", score:2 }, { tile:"A", score:1 }, { tile:"E", score:1 }]));
// console.log(maximumScore([{ tile:"B", score:2 }, { tile:"V", score:4 }, { tile:"F", score:4 }, { tile:"U", score:1 }, 
// { tile:"D", score:2 }, { tile:"O", score:1 }, { tile:"U", score:1 }]));

//task4

// function addValueToObject(obj, petName, value) {
//     obj[petName] = value;
//     // obj.petName=value
//     return obj
//   }
//   console.log( addValueToObject({}, "Brutus", 300));
//   console.log( addValueToObject({piano: 500}, "Brutus", 400));
//   console.log( addValueToObject({piano: 500 , stereo: 300}, "Caligula", 400));

