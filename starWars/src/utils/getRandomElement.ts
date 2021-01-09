import {Fighter, URLResponse} from '../consts';

export const getRandomElement = (response: URLResponse) => {
  const numberOfElements: number = response.results.length;
  const elementIndex = Math.floor(Math.random() * numberOfElements);
  const element: Fighter = response.results[elementIndex];
  return element;
};
