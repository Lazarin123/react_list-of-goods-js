import 'bulma/css/bulma.css';
import './App.scss';
// import { useState } from 'react';

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

export const App = () => (
  <div className="section content">
    <div className="buttons">
      <button type="button" className="button is-info is-light">
        Sort alphabetically
      </button>

      <button type="button" className="button is-success is-light">
        Sort by length
      </button>

      <button type="button" className="button is-warning is-light">
        Reverse
      </button>

      <button type="button" className="button is-danger is-light">
        Reset
      </button>
    </div>

    <ul>
      <li>Dumplings</li>
      <li>Carrot</li>
      <li>Eggs</li>
      <li>Ice Cream</li>
      <li>Apple</li>
      <li>....</li>
    </ul>
  </div>
);
