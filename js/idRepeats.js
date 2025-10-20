import {getRandomNumber} from "./randomGenerator.js";

const postIdRepeats = [];
const checkIdRepeat = function(currentNum){
  while (postIdRepeats.includes(currentNum)){
    currentNum = getRandomNumber(1, 25);
  }
  postIdRepeats.push(currentNum);
  return currentNum;
};

export{checkIdRepeat}
