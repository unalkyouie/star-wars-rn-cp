import {Person} from '../consts';
import {getData} from './getData';

export const getRandomElement = async (url: string) => {
  const res = await getData(url);
  const numberOfElements: number = await res.count;
  const elementIndex = Math.floor(Math.random() * numberOfElements);
  const response: Person = await getData(`${url}${elementIndex}`);
  return response;
};
