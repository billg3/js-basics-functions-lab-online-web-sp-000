// Code your solution in this file!
function distanceFromHqInBlocks(blockNumber){
if (blockNumber> 42 ){
return blockNumber - 42; }
else {
  return 42 - blockNumber
}
}


function distanceFromHqInFeet (blockNumber) {
const feet =  distanceFromHqInBlocks(blockNumber) * 264;
return feet
}

function distanceTravelledInFeet (start, end){
if (start > end){
  return (start - end) * 264
}
else {
  return (end - start) * 264
}
}

function calculatesFarePrice(start, end){
const feet = distanceTravelledInFeet (start, end);
if (feet <= 400){
return 0}

else if (400 < feet <= 2000){
  return (feet- 400) * .02
}

else if (2000 < feet < 2500){
  return 25;
}

else {
  return 'cannot travel that far';
}

}
