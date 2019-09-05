import { createAction, props } from '@ngrx/store';

// declare the actions
export const increment = createAction('[Counter Component] Increment');
export const decrement = createAction('[Counter Component] Decrement');
export const multiply = createAction(
    '[Counter Component] Multiply',
    props<{ count: number }>()
);
export const divide = createAction(
    '[Counter Component] Divide',
    props<{ count: number }>()
);
export const reset = createAction('[Counter Component] Reset');
