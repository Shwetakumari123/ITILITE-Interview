import {StyleSheet} from 'react-native';
export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#8C27F1',
  },
  subContainer: {
    flex: 1,
    margin: '5%',
    marginTop: '6%',
    backgroundColor: 'white',
    borderRadius: 30,
    justifyContent: 'center',
    flexDirection: 'column',
  },
  rowWiseView: {
    flexDirection: 'row',
    padding: 20,
  },
  playStore: {
    backgroundColor: '#16CBEC',
    padding: 8,
    margin: '2%',
    alignItems: 'center',
    borderRadius: 10,
  },
  navigateText: {
    color: 'black',
    fontSize: 18,
    fontWeight: 'bold',
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
});
