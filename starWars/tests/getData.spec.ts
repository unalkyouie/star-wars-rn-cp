import {cleanup} from '@testing-library/react-native';

import {URLResponse} from '../src/consts';
import {getData} from '../src/utils/getData';

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

const errorMassege = new Error(`Unable to connect, please try again`);

describe('getData', () => {
  afterEach(() => {
    cleanup();
  });
  it('should return data as JSON when connection works', async () => {
    (global as any).fetch = jest.fn((_, {body}: {body: string}) => ({
      ok: true,
      json: () => fakeRes,
    }));
    const response = await getData('someGoodUrl');
    expect(response).toEqual(fakeRes);
  });
  it('should return Error when cant fetch', async () => {
    (global as any).fetch = jest.fn(() => ({
      ok: false,
    }));
    try {
      await getData('soneWrongUrl');
      expect(false).toBe(true);
    } catch (error) {
      expect(error).toEqual(errorMassege);
    }
  });
});
