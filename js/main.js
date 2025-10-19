const comments = ['Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!'
];

const commentators = ['Лёха', 'Александр Мирный', 'ФрИк №1', 'Кто?', 'Стас Борецкий', 'Глупенькость'];

const getRandomNumber = function(a, b){
  const lower = Math.ceil(Math.min(a, b));
  const upper = Math.floor(Math.max(a, b));
  const result = Math.random() * (upper - lower + 1) + lower;
  return Math.floor(result);
};


const checkIdRepeat = function(currentNum){
  const idRepeats = [];
  while (idRepeats.includes(currentNum)){
    currentNum = getRandomNumber(1, 25);
  }
  idRepeats.push(currentNum);
  return currentNum;
};

const UrlRepeats = [];
const checkUrlRepeat = function(currentNum){
  while (UrlRepeats.includes(currentNum)){
    currentNum = getRandomNumber(1, 25);
  }
  UrlRepeats.push(currentNum);
  return currentNum;
};

const createComment = function(){
  return{
    id: checkIdRepeat(getRandomNumber(1, 25)),
    avatar: `img/avatar-${getRandomNumber(1, 6)}.svg`,
    message: comments[getRandomNumber(0, comments.length - 1)],
    name: commentators[getRandomNumber(0, commentators.length - 1)],
  };
};

const createRandomPerson = function(){
  return {
    id: checkIdRepeat(getRandomNumber(1, 25)),
    url: `photos/${checkUrlRepeat(getRandomNumber(1, 25))}.jpg`,
    description: 'Крутяк короче блин да',
    likes: getRandomNumber(15, 200),
    comments: Array.from({length: getRandomNumber(1, 30)}, createComment)
  };
};

const createPost = Array.from({length: 25}, createRandomPerson);

// console.log(createPost);
