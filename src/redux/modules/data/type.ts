export interface IAppAction<P> {
  type: string,
  payload?: P
}

export interface IAppState {
  ui: {
    counter: number;
  }
}