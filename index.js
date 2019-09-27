// Code your solution in this file!
function distanceFromHqInBlocks(blockNumber){
if (blockNumber> 42 ){
return blockNumber - 42; }
else {
  return 42 - blockNumber
}
}


function distanceFromHqInFeet (blockNumber) {
feet =  distanceFromHqInBlocks(blockNumber) * 264;
return feet
}
