import { UI_LOADING_ON } from './actions';
import { IAppState, IAppAction } from './type';

export const DEFAULT_STATE: IAppState = {
  ui: {
    loaderVisibility: false,
  }
};

export default function data(state = DEFAULT_STATE, action: IAppAction<any> = {}) {
  const { type, payload } = action;

  switch (type) {
    case UI_LOADING_ON: {
      return {
        ...state,
        ui: {
          ...state.ui,
          loaderVisibility: payload
        }
      }
    }

    default:
      return state;
  }
}
