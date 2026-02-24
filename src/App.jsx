import 'bulma/css/bulma.css';
import './App.scss';
import { useState } from 'react';

export const goodsFromServer = [
  'Dumplings',
  'Carrot',
  'Eggs',
  'Ice cream',
  'Apple',
  'Bread',
  'Fish',
  'Honey',
  'Jam',
  'Garlic',
];

export const App = () => {
  const [visibleGoods, setVisibleGoods] = useState(goodsFromServer);

  const [resetList, setResetList] = useState(false);

  const sortByAlphabetically = () => {
    const sortedList = [...visibleGoods].sort((a, b) => a.localeCompare(b));

    setVisibleGoods(sortedList);
    setResetList(true);
  };

  const sortByLength = () => {
    const sortedLength = [...visibleGoods].sort((a, b) => a.length - b.length);

    setVisibleGoods(sortedLength);
    setResetList(true);
  };

  const sortByReverse = () => {
    const sortedReverse = [...visibleGoods].reverse();

    setVisibleGoods(sortedReverse);
    setResetList(true);
  };

  const handleReset = () => {
    setVisibleGoods(goodsFromServer);
    setResetList(false);
  };

  return (
    <div className="section content">
      <div className="buttons">
        <button
          type="button"
          className="button is-info is-light"
          onClick={sortByAlphabetically}
        >
          Sort alphabetically
        </button>

        <button
          type="button"
          className="button is-success is-light"
          onClick={sortByLength}
        >
          Sort by length
        </button>

        <button
          type="button"
          className="button is-warning is-light"
          onClick={sortByReverse}
        >
          Reverse
        </button>

        {resetList && (
          <button
            type="button"
            className="button is-danger is-light"
            onClick={handleReset}
          >
            Reset
          </button>
        )}
      </div>

      <ul>
        {visibleGoods.map(goods => (
          <li key={goods} data-cy="Good">
            {goods}
          </li>
        ))}
      </ul>
    </div>
  );
};
