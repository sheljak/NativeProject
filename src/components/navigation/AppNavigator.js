import {createStackNavigator} from 'react-navigation';

import Home from '../Home';
import Ambasarors from '../AmbasadorsList';
import Chat from '../Chat';


const AppNavigator = createStackNavigator(
  {
    Home,
    Ambasarors,
    Chat,
  },
  {
    initialRouteName: 'Home',
  },
);

export default AppNavigator;
