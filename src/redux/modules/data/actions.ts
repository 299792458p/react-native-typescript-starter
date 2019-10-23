import { createAction } from 'typesafe-actions';

export const UI_COUNTER_INC = 'UI_COUNTER_INC';
export const UI_COUNTER_DEC = 'UI_COUNTER_DEC';

export const uiActionCreators = {
  increment: createAction(UI_COUNTER_INC, action => {
    return () => action();
  }),
  decrement: createAction(UI_COUNTER_DEC, action => {
    return () => action();
  })
}
