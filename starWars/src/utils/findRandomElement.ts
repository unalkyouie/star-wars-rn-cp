import {getData} from './getData';

export const findRandomElement = async () => {
  const randResponse = await getRandomElement();
  const randName = randResponse.name;
  const response = await getData(`?search=${randName}`);
  return response;
};

const getRandomElement = async () => {
  const numberOfElements = await getNumberOfItems();
  const elementIndex = Math.floor(Math.random() * numberOfElements);
  const response = await getData(elementIndex.toString());
  return response;
};
const getNumberOfItems = async () => {
  const response = await getData();
  return response.count;
};
