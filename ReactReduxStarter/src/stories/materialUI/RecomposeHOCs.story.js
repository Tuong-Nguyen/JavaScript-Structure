/**
 * Created by lnthao on 8/16/2017.
 */
import React from 'react';
import { storiesOf } from '@storybook/react';
import {withState, withHandlers, compose} from 'recompose';

const enhance = withState('counter', 'setCounter', 0);
const addCounting = compose(
  withState('counter', 'setCounter', 0),
  withHandlers({
    increment: ({ setCounter }) => () => setCounter(n => n + 1),
    decrement: ({ setCounter }) => () =>  setCounter(n => n - 1),
    reset: ({ setCounter }) => () => setCounter(0)
  })
)
const Counter = addCounting(({ counter, increment, decrement, reset }) =>
  <div>
    Count: {counter}
    <br/>
    <button onClick={increment}>Increment</button>
    <button onClick={decrement}>Decrement</button>
    <button onClick={reset}>Reset</button>
  </div>
);

storiesOf('Recompose - HOCs', module)
  .add('withState()', () => (
    <Counter />
  ));


