import React from 'react';
import {render} from '@testing-library/react-native';

import Tile from '../src/components/Tile';
import {Fighter} from '../src/consts';

const someFighter: Fighter = {
  name: 'someName',
  fightingStat: 123,
};
const somePoints = 0;

describe('<Tile/>', () => {
  it('should render fighter element and points correctly ', () => {
    const {getByText} = render(
      <Tile fighter={someFighter} points={somePoints} />,
    );
    const fighterName = getByText(someFighter.name);
    expect(fighterName).toHaveTextContent(someFighter.name);
    const fightingStat = getByText(someFighter.fightingStat.toString());
    expect(fightingStat).toHaveTextContent(someFighter.fightingStat.toString());
    const points = getByText(somePoints.toString());
    expect(points).toHaveTextContent(somePoints.toString());
  });
});
