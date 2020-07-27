import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import LoginScreen from '../screens/login';
import PatternScreen from '../screens/pattern';
import WeatherScreen from '../screens/weather';

const MainNavigator = createStackNavigator(
  {
    Login: {screen: LoginScreen},
    Pattern: {screen: PatternScreen},
    Weather: {screen: WeatherScreen},
  },
  {
    initialRouteName: 'Login',

    //  defaultNavigationOptions: {
    //gesturesEnabled: false,
    //headerStyle     : styles.globalHeaderBackground,
    // headerStyle: {backgroundColor: '#EBE6E6'},
    //},
    //cardStyle           : styles.globalBackground,
    //   cardStyle: {backgroundColor: '#EBE6E6'},
  },
);

const AppNavigation = createAppContainer(MainNavigator);

export default createAppContainer(MainNavigator);
