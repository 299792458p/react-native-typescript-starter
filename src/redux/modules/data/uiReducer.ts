import { UI_COUNTER_INC, UI_COUNTER_DEC } from './actions';
import { IUIState, IAppAction } from './type';

export const DEFAULT_STATE: IUIState = {
  counter: 0,
};

const uiReducer = (state = DEFAULT_STATE, action: IAppAction<any> = { type: '' }) => {
  const { type } = action;

  switch (type) {
    case UI_COUNTER_INC: {
      const counter = state.counter + 1;
      return {
        ...state,
        counter
      }
    }
    case UI_COUNTER_DEC: {
      const counter = state.counter - 1;
      return {
        ...state,
        counter
      }
    }
    default:
      return state;
  }
}

export default uiReducer;
