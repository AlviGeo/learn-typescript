// let age: number = 20;
// if(age < 50)
//     age += 10;
// console.log(age)

// let sales = 123_456_789;
// let course = "TypeScript";
// let is_published = true;
// let level;

// function render(document: any) {
//     console.log(document)
// }

// let numbers: number[] = [];

// let user: [number, string, boolean, number] = [1, 'Alvi', true, 0]

// const small = 1;
// const medium = 2;
// const large = 3;
// // PascalCase
// const enum Size { Small = 1, Medium, Large }
// let mySize: Size = Size.Medium;
// console.log(mySize);

// function calculateTax(income: number, taxYear = 2023): number {
//     if(taxYear < 2023)
//         return income * 1.2;
//     return income * 1.3;
// }

// calculateTax(10_000, 2023)

// type Employee = {
//     readonly id: number,
//     name: string,
//     retire: (date: Date) => void
// }   

// let employee: Employee = { 
//     id: 1, 
//     name: "Alvi",
//     retire: (date: Date) => {
//         console.log(date)
//     }
// };

// function kgToLbs(weight: number | string): number {
//     // Narrowing
//     if(typeof weight === "number") {
//         return weight * 2.2;
//     } else 
//         return parseInt(weight) * 2.2
// }

// kgToLbs(10);
// kgToLbs('10kg');

// type Draggable = {
//     drag: () => void
// }

// type Resizable = {
//     resize: () => void
// }

// type UIWidget = Draggable & Resizable

// let textBox: UIWidget = {
//     drag: () => {},
//     resize: () => {},
// }

// Literal (exact, specific)
// type Quantity = 50 | 100;
// let quantity: Quantity = 100;

// type Metric = 'cm' | 'inch';

// function greet(name: string | null) {
//     if(name)
//         console.log(name.toUpperCase());
//     else
//         console.log("Hola!");
// }

// greet(null);

type Customer = {
    birthday?: Date
}

function getCustomer(id: number): Customer | null {
    return id === 1 ? null : { birthday: new Date() };
}

let customer = getCustomer(0);
// if(customer !== null && customer !== undefined)
// Optional property access operator
console.log(customer?.birthday?.getFullYear())

// Optional element access operator 
// if (customers !== null && customers !== undefined)
// customers?.[0]

// Optional call
let log: any = null;
log?.("a");