import { createAction } from 'typesafe-actions';

export const UI_LOADING_ON = '@UI/LOADING_ON';
export const UI_LOADING_OFF = '@UI/LOADING_OFF';

export const uiActionCreators = {
  loadinOn: createAction(UI_LOADING_ON, action => {
    return () => action(true);
  }),
  loadinOff: createAction(UI_LOADING_ON, action => {
    return () => action(false);
  })
}
