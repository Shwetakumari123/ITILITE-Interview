import React, {Component} from 'react';
import {StyleSheet, View, Text, Image, Dimensions} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import timeCalc from '../common/timeCalculate';

export default class ForecastCard extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    let cardColor1 = '';
    const {
      cardName,
      iconName,
      forecast,
      currentTime,
      color,
      imagePath,
    } = this.props;
    // let images = require({imagePath});
    let currTime = Math.floor(Date.now() / 1000);
    let duration = currTime - currentTime;
    let time = timeCalc(duration);
    return (
      <View style={[styles.card, {backgroundColor: color}]}>
        <Image resizeMode="contain" source={imagePath} />
        <Text style={styles.cardName}> {cardName}</Text>
        <Text style={styles.forecast}> {forecast}</Text>
        <Text style={styles.time}> {time}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  card: {
    width: Dimensions.get('screen').width / 2 - 50,
    height: Dimensions.get('screen').height / 3 - 20,
    padding: 10,
    margin: '2%',
    borderRadius: 10,
  },
  cardName: {
    fontSize: 18,
  },
  forecast: {
    marginTop: '50%',
    fontSize: 15,
  },
  time: {
    fontSize: 15,
  },
  iconStyle: {},
});
