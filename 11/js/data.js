import {
  getRandomInteger,
  getRandomArrayElement,
  createIdGenerator
} from './util.js';

export const MESSAGES = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!'
];

export const NAMES = [
  'Артём', 'Мария', 'Дмитрий', 'Анна', 'Сергей',
  'Елена', 'Алексей', 'Ольга', 'Иван', 'Наталья',
  'Михаил', 'Татьяна', 'Андрей', 'Юлия', 'Павел',
  'Екатерина', 'Николай', 'Александра', 'Владимир', 'Светлана'
];

export const DESCRIPTIONS = [
  'Закат на море',
  'Горный пейзаж',
  'Уличное кафе',
  'Летний день в парке',
  'Зимний лес',
  'Городская архитектура',
  'Цветущий сад',
  'Путешествие по стране',
  'Домашний питомец',
  'Вкусный ужин',
  'Спортивные достижения',
  'Творческая работа',
  'Семейный праздник',
  'Природа весной',
  'Ночной город',
  'Отдых на природе',
  'Интересная книга',
  'Музыкальный концерт',
  'Художественная выставка',
  'Научный эксперимент',
  'Кулинарный шедевр',
  'Спортивное мероприятие',
  'Историческое место',
  'Теплые воспоминания',
  'Новые впечатления'
];

const generateCommentId = createIdGenerator();
const generatePhotoId = createIdGenerator();

const createComment = () => ({
  id: generateCommentId(),
  avatar: `img/avatar-${getRandomInteger(1, 6)}.svg`,
  message: getRandomArrayElement(MESSAGES),
  name: getRandomArrayElement(NAMES)
});

const createComments = () => {
  const commentsCount = getRandomInteger(0, 30);
  return Array.from({ length: commentsCount }, createComment);
};

const createPhoto = (index) => ({
  id: generatePhotoId(),
  url: `photos/${index + 1}.jpg`,
  description: DESCRIPTIONS[index] || `Описание фотографии ${index + 1}`,
  likes: getRandomInteger(15, 200),
  comments: createComments()
});

export const generatePhotos = () =>
  Array.from({ length: 25 }, (_, index) => createPhoto(index));

export const photos = generatePhotos();
