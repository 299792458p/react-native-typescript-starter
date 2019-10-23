import { UI_COUNTER_INC, UI_COUNTER_DEC } from './actions';
import { IAppState, IAppAction } from './type';

export const DEFAULT_STATE: IAppState = {
  ui: {
    counter: 0,
  }
};

export default function data(state = DEFAULT_STATE, action: IAppAction<any> = { type: '' }) {
  const { type } = action;

  switch (type) {
    case UI_COUNTER_INC: {
      const counter = state.ui.counter + 1;
      return {
        ...state,
        ui: {
          ...state.ui,
          counter
        }
      }
    }
    case UI_COUNTER_DEC: {
      const counter = state.ui.counter - 1;
      return {
        ...state,
        ui: {
          ...state.ui,
          counter
        }
      }
    }
    default:
      return state;
  }
}
