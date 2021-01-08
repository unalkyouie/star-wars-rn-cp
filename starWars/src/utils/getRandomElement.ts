import {Fighter} from '../consts';
import {getData} from './getData';

export const getRandomElement = async (url: string) => {
  const res = await getData(url);
  const numberOfElements: number = await res.results.length;
  const elementIndex = Math.floor(Math.random() * numberOfElements);
  const element: Fighter = await res.results[elementIndex];
  return element;
};
