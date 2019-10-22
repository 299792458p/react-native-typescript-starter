import React from 'react';
import { Navigation } from 'react-native-navigation';
import { Screens, startApp } from './src/screens';
import { Provider } from './src/redux';

const WrappedComponent = (Component) => {
  return function inject(props) {
    const EnhancedComponent = () => (
      <Provider>
        <Component
          {...props}
        />
      </Provider>
    );

    return <EnhancedComponent />;
  };
}

// Register screens
Screens.forEach((ScreenComponent, key) =>
  Navigation.registerComponent(key, () => WrappedComponent(ScreenComponent))
);

// Start application
Navigation.events().registerAppLaunchedListener(() => {
  startApp();
});
