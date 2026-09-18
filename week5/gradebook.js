const students = [
  { name: "Sadia",   score: 99 },
  { name: "Anum",  score: 78 },
  { name: "Qudoos", score: 98 },
  { name: "AQ",  score: 77 },
  { name: "Chotu",  score: 90 },
];

const PASS = 50;

const total = students.reduce((sum, s) => sum + s.score, 0);
const average = total / students.length;


const highest = students.reduce((best, s) => (s.score > best.score ? s : best));


const lowest = students.reduce((worst, s) => (s.score < worst.score ? s : worst));

const passedCount = students.filter(s => s.score >= PASS).length;
const passRate = (passedCount / students.length) * 100;


const sortedNames = [...students]
  .sort((a, b) => b.score - a.score)
  .map(s => s.name);


console.log("--- Gradebook ---");
console.log(`Class average: ${average.toFixed(2)}`);
console.log(`Highest: ${highest.name} (${highest.score})`);
console.log(`Lowest: ${lowest.name} (${lowest.score})`);
console.log(`Pass rate: ${passRate.toFixed(0)}%`);
console.log(`Ranking: ${sortedNames.join(", ")}`);

console.log([] == false);//true; = converts both sides: [] becomes "" and then 0, and false becomes 0
console.log([1, 2, 3] + [4]); //error ; as + cant add arrays
console.log(typeof null);//error;idk the reason sir 
console.log(0.1 + 0.2 === 0.3);//true ; i predicted true but it isnt as computer store decimals in binary 
console.log([10, 9, 1].sort());//it will be sorted 
console.log(["a", "b"].map(x => x.toUpperCase()).join("-"));//A-B