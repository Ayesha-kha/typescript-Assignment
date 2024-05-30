// function carDetails(manufacture: string, model: string, ...options:[string,any] []):object{
//      let details = {
//         manufacture,
//         model,
//         ...Object.fromEnteries (options),
//      }
//      return details;
// }
// console.log(carDetails("Toyata","Corolla",["color","red"],["Year",2020]));

 function carDetails (manufacturer: string, modelName: string, ...additionalInfo){



    const car = {manufacturer, modelName, ...Object.fromEntries(additionalInfo)};
   
    return car;
   
    };
   
   
   
    const myCarDetails = carDetails("Toyota", "Corolla", ['color', 'blue'], ['year', 2022]);
   
   
   
   // console.log(myCarDetails);
