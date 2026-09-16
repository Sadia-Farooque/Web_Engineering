const getinitial = (fullname)=>{
    const parts = fullname.split(" ");
    const first=parts[0][0];
    const last = parts[1][0];
    return `${first}${last}`.toUpperCase();
};

const palindrome = (text)=>{
    const clean = text.toLowerCase().replaceAll(" ","");
    const reverse = clean.split("").reverse().join("");
    return clean===reverse;

};

const countwords =(text)=> text.trim().split(" ").length;

console.log(getinitial("Sadia Fatima"));        
console.log(palindrome("Race car"));            
console.log(palindrome("Mumma"));               
console.log(countwords("the quick brown fox"));
