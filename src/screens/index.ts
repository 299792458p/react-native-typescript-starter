import { Navigation } from 'react-native-navigation';
import { withCounterContext } from '../contexts/CounterContext';
import { CounterScreen } from './counter/Counter';
import { HomeScreen } from './home/Home';

export const Screens = new Map();

export const HOME = 'ueno-rns.Home';
export const COUNTER = 'ueno-rns.Counter';

Screens.set(HOME, HomeScreen);
Screens.set(COUNTER, withCounterContext(CounterScreen));

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
