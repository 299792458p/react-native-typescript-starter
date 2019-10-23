import { Navigation } from 'react-native-navigation';
import { HomeScreen } from './home/Home';
import CounterScreen from './counter/Counter';

export const Screens = new Map();

export const HOME = 'Home';
export const COUNTER = 'Counter';

Screens.set(HOME, HomeScreen);
Screens.set(COUNTER, CounterScreen);

export const startApp = () => {
  Navigation.setRoot({
    root: {
      stack: {
        id: 'ROOT_STACK',
        children: [
          {
            component: { name: HOME },
          },
        ],
      },
    },
  });
};
