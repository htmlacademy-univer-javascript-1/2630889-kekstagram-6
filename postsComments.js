import {getRandomNumber} from "./randomGenerator.js";

const comments = ['Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!'
];

const commentators = ['Лёха', 'Александр Мирный', 'ФрИк №1', 'Кто?', 'Стас Борецкий', 'Глупенькость'];

const createComment = function(){
  return{
    id: getRandomNumber(1, 25),
    avatar: `img/avatar-${getRandomNumber(1, 6)}.svg`,
    message: comments[getRandomNumber(0, comments.length - 1)],
    name: commentators[getRandomNumber(0, commentators.length - 1)],
  };
};

export{createComment}
