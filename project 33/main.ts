let ordinalNumber:number[]= [1,2,3,4,5,6,7,8,9,10];
for(let num of ordinalNumber){
    let ordinalEnding:string = 'st';
    if(num === 1){
        ordinalEnding = "st";
    }else if(num === 2){
      ordinalEnding = "nd";
    }else if (num ===3){
        ordinalEnding = "rd";
    }else {
        ordinalEnding = "th";
    }
    console.log(num+ordinalEnding);
}
