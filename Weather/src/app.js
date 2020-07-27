import React, {Component} from 'react';
import {View, Text} from 'react-native';

import AppNavigator from './common/navigator';
import EStyleSheet from 'react-native-extended-stylesheet';
//import Variables from './public/styles/globalVariables';

/*
 * Build the Extended stylesheets
 * Available globally within app
 */
//EStyleSheet.build(Variables);

class Main extends Component {
  render() {
    return <AppNavigator />;
  }
}

export default Main;
