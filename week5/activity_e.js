const products = [
  { id: 1, title: "Keyboard", price: 4500, category: "peripherals", inStock: true },
  { id: 2, title: "Mouse",    price: 1800, category: "peripherals", inStock: false },
  { id: 3, title: "USB Hub",  price: 1200, category: "cables",      inStock: true },
];


const inStockTitles = products
  .filter(p => p.inStock)
  .map(p => p.title);
console.log("In stock:", inStockTitles);  


const totalPrice = products.reduce((sum, p) => sum + p.price, 0);
console.log("Total price:", totalPrice);   


const groupBy = (list, key) => {
  return list.reduce((groups, item) => {
    const groupName = item[key];                  
    groups[groupName] = groups[groupName] ?? [];  
    groups[groupName].push(item);                 
    return groups;                                
  }, {});                                         
};

console.log(groupBy(products, "category"));