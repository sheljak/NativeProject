import {createAppContainer, createSwitchNavigator} from 'react-navigation';
import AppNavigator from './AppNavigator';

const InitialNavigator = createSwitchNavigator({
  AppNavigator,
});


export default createAppContainer(InitialNavigator);
