function lettergrade(score){
    if(score>=80){
        return "A";
    }else if(score>=70){
        return "B";
    }else if(score>=60){
        return "C";
    }else{
        return "F";
    }
}
const displayCount = (n) => n ?? "No Count";

console.log(displayCount(0));      
console.log(displayCount(null));   
console.log(displayCount(42));