import React from 'react';
import {
  cleanup,
  fireEvent,
  render,
  waitFor,
} from '@testing-library/react-native';

import Game from '../src/components/Game';
import {resource, URLResponse} from '../src/consts';

describe('<Game/>', () => {
  afterEach(() => {
    cleanup();
  });
  it('should render Button value and function depanding on app state', async () => {
    const fakeRes: URLResponse = {
      count: 2,
      next: null,
      previous: null,
      results: [
        {
          name: 'someName',
          fightingStat: 32,
        },
        {
          name: 'someName',
          fightingStat: 42,
        },
      ],
    };

    (global as any).fetch = jest.fn((_, {body}: {body: string}) => ({
      ok: true,
      json: () => fakeRes,
    }));
    const {getByText} = render(<Game resourceUrl={resource.people} />);
    const startNewGameButton = getByText('new game');
    expect(startNewGameButton).toBeTruthy();
    fireEvent.press(startNewGameButton);
    await waitFor(() => {
      const newButtonValue = getByText('fight');
      expect(newButtonValue).toBeTruthy();
    });
  });

  it('should render DRAW when theres no winner', async () => {
    const fakeRes: URLResponse = {
      count: 1,
      next: null,
      previous: null,
      results: [
        {
          name: 'someName',
          fightingStat: 32,
        },
      ],
    };
    (global as any).fetch = jest.fn((_, {body}: {body: string}) => ({
      ok: true,
      json: () => fakeRes,
    }));
    const {getByText} = render(<Game resourceUrl={resource.people} />);
    const startNewGameButton = getByText('new game');
    fireEvent.press(startNewGameButton);
    await waitFor(async () => {
      const fightButton = getByText('fight');
      fireEvent.press(fightButton);
      await waitFor(() => {
        const winner = getByText('Winner: DRAW');
        expect(winner).toBeTruthy();
      });
    });
  });
});
