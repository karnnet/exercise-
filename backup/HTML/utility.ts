//Partial
// interface Point {
//   x: number;
//   y: number;
// }
    
// let pointPart: Partial<Point> = {}; // `Partial` allows x and y to be optional
// pointPart.x = 10;
// console.log(pointPart);

//Required changes all the properties in an object to be required
//  interface Point {
//    x: number;
//    y: number;
//    z?:number;
//  }
             
//  let pointPart: Required<Point> = {
//    x : 10,
   
//   y:10,
//  z:10
//  }; 
//     console.log(pointPart);


    //  Record defining object type with specific keay type and value type
    // const Point:Record<string,number>= {
    //   x: 10,
    //   y: 20
      
    // };
    // console.log(Point);

      //  const Point:Record<string,number>= {
      //   "x": 10,
      //   "y": 20
      //     };
                  
      //     console.log(Point);


      // `Omit` has removed y and z from the type and they can't be defined here

      // interface Point{
      //   x:string;
      //   y:number;
      //   z?:number;
      //         }
      //         let pointPart: Omit<Point,'y'|'z'>={
      //           x:'30'
      //         };
      //         console.log(pointPart);


      // `Pick` has only kept x, so y and z were removed from the type and they can't be defined here
            //   interface Point{
            //     x:number;
            //     y:number;
            //     z:number;
            //   }

            //  let pointPart:Pick<Point, 'x'>={
            //    x:20
            //  } 
            //  console.log(pointPart);

            //a string cannot be used here since Exclude removed it from the type
            // type Primitive = string | number | boolean;
            // const value: Exclude<Primitive,number> = 'true';
            // console.log(typeof value);
              

            // type Primitive = string | number | boolean;
            // const value: Exclude<Primitive,boolean> = 34;

            // console.log(typeof value);


            type PointPart=()=>{
              x:string; y:number;
            };
            const point: ReturnType<PointPart>={
              x:'10',
              y:20
            };
            console.log(typeof point);
            
            

