    
 function Worker(name,surname,rate,days){
    this.name = name;
    this.surname = surname;
    this.rate =  rate;
    this.days =  days;
    this.getSalary = function getSalary(){ 
        return this.rate * this.days;
    };
} 
let ivan = new Worker ('Іван', 'Іванов', 10, 31);
let petro = new Worker ('Петро', 'Петров', 12, 25);

console.log (ivan.name); 
console.log (ivan.surname); 
console.log (ivan.rate); 
console.log (ivan.days); 
console.log (ivan.getSalary ());

console.log (petro.name); 
console.log (petro.surname); 
console.log (petro.rate); 
console.log (petro.days); 
console.log (petro.getSalary ());
