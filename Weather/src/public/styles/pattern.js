import {StyleSheet, Dimensions} from 'react-native';
export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#8C27F1',
  },
  subContainer: {
    flex: 1,
    backgroundColor: 'white',
    margin: '5%',
    borderRadius: 30,
  },
  password: {
    fontSize: 18,
    textAlign: 'center',
    marginBottom: 20,
  },
  wrapper: {
    height: 250,
  },
  screenName: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  screenLeftIcon: {},
  screenRightIcon: {},
  rightText: {
    fontSize: 18,
  },
  pinText: {
    textAlign: 'center',
    fontSize: 20,
    fontWeight: 'bold',
  },
  pinArea: {
    alignItems: 'center',
    marginTop: '10%',
    padding: 50,
  },
  pinTextStyle: {
    color: 'black',
    fontSize: 20,
  },
  pinTextArea: {
    padding: 20,
  },
  cellStyle: {
    borderBottomWidth: 2,
    borderTopWidth: 2,
    borderLeftWidth: 2,
    borderRightWidth: 2,
    borderColor: 'black',
  },
  proceed: {
    backgroundColor: '#2C5A92',
    padding: 10,
    margin: '3%',
    alignItems: 'center',
    borderRadius: 10,
  },
  proceedText: {
    color: 'black',
    fontSize: 20,
    fontWeight: 'bold',
  },
});
