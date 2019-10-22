import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { Provider } from 'react-redux';
import createStore from '../store';

let store: any;

class AppStoreProvider extends PureComponent {

  static childContextTypes = {
    store: PropTypes.shape({})
  };

  getChildContext() {
    return {
      store,
    };
  }

  render() {
    const { children } = this.props;

    store = store || createStore();

    return (
      <Provider store={store} >
        {children}
      </Provider>
    );
  }
}

export default AppStoreProvider;
