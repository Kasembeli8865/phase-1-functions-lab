const start= 42;
// start is the headquarter location

function distanceFromHqInBlocks(stop){
   let distance = stop -start;
   if(distance < 0){
    return distance * -1;
   }
   return distance;
}

const feet=264
function distanceFromHqInFeet(someValue){
   return feet * distanceFromHqInBlocks(someValue)
}   
console.log(distanceFromHqInFeet(34));


function distanceTravelledInFeet(start, destination){
     if( start>destination){
        return (start - destination) *feet
     }else {
        if(destination>start){
            return(destination- start) *feet
        }
     }
}

function calculatesFarePrice(start, destination){
    let distanceTravelled = distanceTravelledInFeet(start, destination)
     if(distanceTravelled <=400){
        return 0}
     else if(distanceTravelled >=400 && distanceTravelled <=2000){
        return (distanceTravelled -400) *0.02
     } else if(distanceTravelled >2000 && distanceTravelled <2500){
        return 25
     } else if(distanceTravelled>2500){
        return 'cannot travel that far'
     }
}