export interface IAppAction<P> {
  type: string,
  payload?: P
}

export interface IUIState {
  counter: number;
}

export interface IAppState {
  ui: IUIState;
}