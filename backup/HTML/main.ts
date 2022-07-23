// let x=42;
// console.log(x);

//type string
// var x="42"; 
//  console.log(typeof x);

// type object
// var firstname:null=null;
// console.log(typeof firstname);   

// let v:any = "true"; // type string
// console.log(typeof v) ;  

//add value to string object
//  const firstname= [];
//  firstname.push("42");
//  console.log(firstname);
// const names:any= [];
// names.push("karn");
// console.log(names);

// Arithmetic operation
// let x=3;// multiplication
// let y=4;
// console.log(x*y);

// array
// let cars=["bmw","ford"];
// console.log(cars[0]);

// Tuple array
// let ourTuple: [number, boolean,string];
// ourTuple=[5,true,"dk"];
// console.log(ourTuple);
// let ourTuple:[number, boolean,string];
// ourTuple=[3,true,""];
// ourTuple.push(4);
// console.log(ourTuple);

//named tuples
// const graph: [x: number, y: number] = [55.2, 41.3];
// console.log(graph);

// const graph: [number, string] = [55.2, "41.3"];
// console.log(graph);

// object type1
// const car: { type: string, model: string, year: number } 
// = {type:"Toyota",model:"Corolla",year:2009};
// console.log(car);

// object type2
// const car: [ type: string, model: string, year: number ] 
// = ["Toyota","Corolla",2009];
// console.log(car);

// object type3
// const car: [ string, string, number ] 
// = ["Toyota","Corolla",2009];
// console.log(car);

// object type4
// const car:string="bmw";
// console.log(car);

// numeric Enums example1
// enum Direction {
//     North,
//     East,
//     South,
//     West
//   };
//   let currentDirection = Direction.South;
//   // North is the first value so it logs '0'
//   console.log(currentDirection);

// example2(default intial value)
// enum Direction {
//     North,
//       East,
//       South,
//    West};
// let currentDirection = Direction.West;
//  console.log(currentDirection);

// example3(set intialized value)
// enum CardinalDirections {
//     North = 1,
//     East,
//     South,
//     West
//   };
  
// let currentDirection=CardinalDirections.West;
//    console.log(currentDirection);

// example4(set intialized value )
// enum CardinalDirections {
//     North = 1,
//     East,
//     South,
//     West
//   };
  
//   // logs 1 since we initialized the first value to something other than '0'
//   console.log(CardinalDirections.North);
  
//   // logs 4 as it continued on from the initial '1' value
//   console.log(CardinalDirections.West);


// enum fully intialized
// enum CardinalDirections{
//     East=1,
//     West=2,
//     North=0,
//     South=3
// }
// console.log(CardinalDirections.North);
// console.log(CardinalDirections.South);


// string enum
// enum CardinalDirections {
//     North = 0,
//     East,
//     South = "south",
//     West = "west"
//   };
//   // logs "North"
//   console.log(CardinalDirections.North);
//   // logs "West"
//   console.log(CardinalDirections.East);


  // const graph: [number, number] = [55.2, 41.3];
  // const [x, y] = graph;
  // console.log([x, y]);


  // type CarYear = number
  // type CarType = string
  // type CarModel = string
  // type Car = {
  //   year: CarYear,
  //   type: CarType,
  //   model: CarModel
  // }
  
  // const carYear: CarYear = 2001
  // const carType: CarType = "Toyota"
  // const carModel: CarModel = "Corolla"
  // const car: Car = {
  //   year: carYear,
  //   type: carType,
  //   model: carModel
  // };
  // console.log(car);


// Alias
//   type CarYear = number
//   type CarType = string
//   type CarModel = string
  
  
//   const CarYear = 2001
//   const CarType = "Toyota"
//   const CarModel = "Corolla"
  
//   console.log(CarYear + CarType + CarModel);

//interface
// interface Square{
//   length:number,
//   breadth: number,
 
// }
// const square: Square =
// {
//   length:20,
//   breadth:25
  
// };
// console.log(square);

// interface
// interface Square{
//   length:number,
//   breadth: number
// }
//  interface color extends Square{
//    color:string
//  }
//  const Color : color = {
//    length:10,
//    breadth:10,
//    color:"green"
//  };
//  console.log(Color);


// function printStatusCode(code: string) {
//   console.log(`${code.toUpperCase()}.`) 
// }
// printStatusCode('cgxhfdgjfj');

//union
// function printStatusCode(code: string|number) {
//   console.log(`${code}.`) 
// }
// printStatusCode('cgxhfdgjfj');
// printStatusCode(23);

// function return type
// function getTime(): number {
//   return new Date().getTime();
// }
// console.log(getTime());


//use of void doesn't return any value
// function printHello(): void {
//   console.log('Hello!');
// }
// printHello();

// parameter
// function multiply(a: number, b: number) {
//   return a * b;
// }
// console.log(multiply(2,5))

// optional parameter
// function multiply(a: number, b: number, c?: number) {
//   return a * b * (c || 0);
// }
// console.log(multiply(2,5,3))

// default paramater
// function pow(value: number=3, exponent: number = 2) {
//   return value ** exponent;
// }
// console.log(pow());

// function divide({ dividend, divisor }: { dividend: number, divisor: number }) {
//   return (dividend / divisor);
// }

// console.log(divide({dividend: 10, divisor: 2}));

//Casting "as"
// let x: any = 'hello';
// console.log((x as string).length);


// let x:any="helljhjhji";
// console.log((<string>x).length)

// classes example1

// class Marks{
//  subject:string;
//  marks:number
//     }
//  const mark =new Marks();
//  mark.subject= 'history';
//  mark.marks= 87;
// console.log(mark);

// Classes example 2
// class Marks{
//   subject:string;
//   marks:number
//      }
//   const mark =new Marks();
//   mark.subject= 'history';
//   mark.marks= 87;
//  console.log(mark.subject);

// classes example3
//  class Person {
//   name: string;
//  }
// const person = new Person();
// person.name = "Jane";
// console.log(person.name);

// class example 4
// class Person{
//   name:string;
//   age:number;
//   group:string;
//   constructor(name,age,group?){
//     this.name=name;//this refer to current
//     this.age=age;
//   }
// }
// const person = new Person('abd',34);
// console.log(person.name);
// console.log(person.age);


// class example 5
// class Person{
//   name:string;
//   age:number;
//   group:string;
//   constructor(name,age,group){
//     this.name=name;//this refer to current
//     this.age=age;
//     this.group=group;
//   }
// }
// const person = new Person('abd',34,'A');
// console.log(person.name);
// console.log(person.age);
// console.log(person.group);

//class example 6 with modifier private and protected
// class Person{
//   private name:string;
//   protected age:number;
//     constructor(name,age){
//     this.name=name;//this refer to current
//     this.age=age;
    
//   }
// }
// const person = new Person('abd',34);
// console.log(person.age);
// console.log(person.name);

//class modifier example 7
// class Person{
//       constructor(private name:string,private age:number){
//         this.name=name;
//         this.age=age;
//                }
//                  }
      
// const person = new Person('abd',34);
// console.log(person.name);
// console.log(person.age);

//interface
// let names=(firstname:string,lastname:string) =>{
//   console.log(firstname);
//   console.log(lastname);
//   }
//   names('a','b');
  
//interface2
interface Shape {
  getArea: () => number;
}

class Rectangle implements Shape {
  public constructor(protected width: number, protected height: number) {}

  public getArea(): number {
    return this.width * this.height;
  }
}

const myRect = new Rectangle(10,20);

console.log(myRect.getArea());