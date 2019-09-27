// Code your solution in this file!
function distanceFromHqInBlocks(blockNumber){
if (blockNumber> 42 ){
return blockNumber - 42; }
else {
  return 42 - blockNumber
}
}


function distanceFromHqInFeet (blockNumber) {
blocks =  distanceFromHqInBlocks(blockNumber);
feet = blocks * 264
return feet
}
