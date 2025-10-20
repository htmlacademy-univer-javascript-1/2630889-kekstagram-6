import {createComment} from "./postsComments.js";
import {getRandomNumber} from "./randomGenerator.js";
import {checkIdRepeat} from "./idRepeats.js";

const UrlRepeats = [];
const checkUrlRepeat = function(currentNum){
  while (UrlRepeats.includes(currentNum)){
    currentNum = getRandomNumber(1, 25);
  }
  UrlRepeats.push(currentNum);
  return currentNum;
};

const createRandomPerson = function(){
  return {
    id: checkIdRepeat(getRandomNumber(1, 25)),
    url: `photos/${checkUrlRepeat(getRandomNumber(1, 25))}.jpg`,
    description: 'Крутяк короче блин да',
    likes: getRandomNumber(15, 200),
    comments: Array.from({length: getRandomNumber(1, 25)}, createComment)
  };
};

const createPost = Array.from({length: 25}, createRandomPerson);

export{createPost}
