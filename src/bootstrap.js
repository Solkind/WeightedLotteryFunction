// My Solution and Git functions
const weights = { green: 1, yellow: 2, red: 3 }

function weightedLottery(weights) {
  const totalWeight = Object.values(weights).reduce((acc, weight) => acc + weight, 0);
  let randomNum = (Math.random() * totalWeight) | 0;


  for (let key of Object.keys(weights)) {
    const weight = weights[key];
    if (randomNum < weight) {
      return key;
    }
    randomNum -= weight;
  }
}
console.log(weightedLottery(weights))

// BottegaU Solution code
// const weightedLottery = weights => {
//   let containerArray = [];

//   Object.keys(weights).forEach(key => {
//     for (let i = 0; i < weights[key]; i++) {
//       containerArray.push(key);
//     }
//   });

//   return containerArray[(Math.random() * containerArray.length) | 0];
// };

// const weights = {
//   green: 1,
//   yellow: 2,
//   red: 3
// };
// console.log(weightedLottery(weights));
