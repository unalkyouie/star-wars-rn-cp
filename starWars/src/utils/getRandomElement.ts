import {Person} from '../assets/consts';
import {getData} from './getData';

export const getRandomElement = async () => {
  const numberOfElements = await getNumberOfItems();
  const elementIndex = Math.floor(Math.random() * numberOfElements);
  const response: Person = await getData(elementIndex.toString());
  return response;
};

const getNumberOfItems = async () => {
  const response = await getData();
  const numberOfItems: number = await response.count;
  return numberOfItems;
};
