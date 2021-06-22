import React from 'react';
import ReactDOM from 'react-dom';
import Counter from './Counter/Counter.js';



ReactDOM.render(
  <React.StrictMode>
    <Counter cssClass="button button-1" wrapClass="counter-wrap" value={4} number={9} />
    <Counter cssClass="button button-2" wrapClass="counter-wrap" value={16} number={81} />
    <Counter cssClass="button button-3" wrapClass="counter-wrap" value={5} number={10} />
  </React.StrictMode>,
  document.getElementById('root')
);


