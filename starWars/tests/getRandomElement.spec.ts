import {cleanup} from '@testing-library/react-native';

import {Fighter, URLResponse} from '../src/consts';
import {getRandomElement} from '../src/utils/getRandomElement';

const fakeElement: Fighter = {
  name: 'R2-D2',
  fightingStat: 32,
};
const fakeRes: URLResponse = {
  count: 1,
  next: null,
  previous: null,
  results: [
    {
      name: 'R2-D2',
      fightingStat: 32,
    },
  ],
};
describe('getRandomElement', () => {
  afterEach(() => {
    cleanup();
  });
  it('should return a random element based on resource', () => {
    const foundRandomElement = getRandomElement(fakeRes);
    expect(foundRandomElement).toEqual(fakeElement);
  });
});
