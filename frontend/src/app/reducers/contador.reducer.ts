import { Action, createReducer, on } from '@ngrx/store';
import * as CounterActions from './actions/counter.actions';


export const initialState = 10;

const countReducer = createReducer(
  initialState,
  on(CounterActions.increment, state => ( state + 1 )),
  on(CounterActions.decrement, state => ( state - 1 )),
  on(CounterActions.multiply, (state, { count } ) => ( state * count )),
  on(CounterActions.divide, (state, { count } ) => ( state / count )),
  on(CounterActions.reset, state => ( 0 ))
);

export function counterReducer(state: number | undefined, action: Action): number {
  return countReducer(state, action);
}
