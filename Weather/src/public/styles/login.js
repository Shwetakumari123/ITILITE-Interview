import EStyleSheet from 'react-native-extended-stylesheet';
import {StyleSheet, Dimensions} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#8C27F1',
  },
  upSection: {
    margin: '5%',
    flex: 5,
    backgroundColor: 'white',
    borderRadius: 30,
  },
  rightSection: {
    justifyContent: 'flex-end',
    fontSize: 20,
  },
  downSection: {
    flex: 1,
  },
  labelText: {
    textAlign: 'center',
    color: 'white',
    fontSize: 20,
  },
  fPassword: {
    alignItems: 'flex-end',
    paddingBottom: 10,
  },
  nextPage: {},
  OtherLogin: {
    textAlign: 'center',
    fontSize: 15,
    fontWeight: 'bold',
  },
  ImageSection: {
    paddingLeft: 10,
    paddingRight: 10,
    paddingTop: 15,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  screenName: {
    fontSize: 20,
    fontWeight: 'bold',
  },
});
