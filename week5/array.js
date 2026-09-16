const students = [
  { name: "Ali",   score: 92, active: true  },
  { name: "Sara",  score: 78, active: true  },
  { name: "Bilal", score: 45, active: false },
];

const total = students.reduce((sum, s) => sum + s.score, 0);   
const average = total / students.length;                        
console.log("Average:", average.toFixed(2));

const aboveAverage = students
  .filter(s => s.score > average)   
  .map(s => s.name);                
console.log("Above average:", aboveAverage); 

console.log("Anyone above 90?", students.some(s => s.score > 90));   
console.log("Everyone above 40?", students.every(s => s.score > 40));

const sorted = [...students].sort((a, b) => b.score - a.score);
console.log("Sorted:", sorted.map(s => s.name));

console.log("Original:", students);