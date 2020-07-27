import React, {Component} from 'react';
import {
  View,
  ScrollView,
  Linking,
  RefreshControl,
  Text,
  TouchableHighlight,
} from 'react-native';
import {StackActions} from 'react-navigation';
import ForecastCard from '../components/ForecastCard';
import {loginUser, pinSet, logOut} from '../redux/action/login';
import Icon from 'react-native-vector-icons/FontAwesome';
import {styles} from '../public/styles/weather';
import {connect} from 'react-redux';
import Geolocation from '@react-native-community/geolocation';

class Weather extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      latitude: 0,
      longitude: 0,
      forecast: {},
      refreshing: false,
      setRefreshing: false,
    };
  }

  componentDidMount() {
    this.props.navigation.setParams({logout: this.onLogout});
    // Get the user's location
    this.getLocation();
  }

  onLogout = async () => {
    const data = {
      isLoggedIn: false,
      isPinSet: false,
    };
    await this.props.logOut(data);
    console.log(data);
    this.props.navigation.navigate('Login');
  };

  static navigationOptions = ({navigation}) => {
    return {
      headerLeft: (
        <TouchableHighlight
          onPress={() => navigation.dispatch(StackActions.pop({n: 1}))}>
          <View style={styles.screenLeftIcon}>
            <Icon name="arrow-left" style={styles.backButton} size={20} />
          </View>
        </TouchableHighlight>
      ),
      headerTitle: (
        <View>
          <Text style={styles.screenName}> DASHBOARD </Text>
        </View>
      ),
      headerRight: (
        <TouchableHighlight
          underlayColor={'transparent'}
          onPress={navigation.getParam('logout')}>
          <View style={styles.screenRightIcon}>
            <Text style={styles.rightText}> Logout </Text>
          </View>
        </TouchableHighlight>
      ),
    };
  };

  getLocation = () => {
    // Get the current position of the user
    Geolocation.getCurrentPosition(
      (position) => {
        this.setState(
          (prevState) => ({
            latitude: position.coords.latitude,
            longitude: position.coords.longitude,
          }),
          () => {
            this.getWeather();
          },
        );
      },
      (error) => this.setState({forecast: error.message}),
      {enableHighAccuracy: true, timeout: 20000, maximumAge: 1000},
    );
  };

  getWeather = () => {
    console.log(this.state.latitude, this.state.longitude);
    // Construct the API url to call
    let url =
      'https://api.openweathermap.org/data/2.5/onecall?lat=' +
      this.state.latitude +
      '&lon=' +
      this.state.longitude +
      '&units=metric&appid=be9e9208586d8fe76e2ca642e25e2d9d';

    // Call the API, and set the state of the weather forecast
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        console.log('weather data', data);
        let tempData = {
          currentTime: data.current.dt,
          humidity: data.current.humidity,
          pressure: data.current.pressure,
          visibility: data.current.visibility,
          uvi: data.current.uvi,
          temp: data.current.temp,
        };

        this.setState((prevState, props) => ({
          forecast: tempData,
        }));
      });
  };

  goToPlayStore = () => {
    Linking.openURL('https://play.google.com/store/apps?hl=en_IN');
  };

  _onRefresh = async () => {
    this.setState({refreshing: true});
    await this.getLocation();
    setTimeout(() => this.setState({refreshing: false}), 1000);
  };

  render() {
    return (
      <ScrollView
        style={styles.container}
        refreshControl={
          <RefreshControl
            refreshing={this.state.refreshing}
            onRefresh={this._onRefresh}
          />
        }>
        <View style={styles.subContainer}>
          <View style={styles.rowWiseView}>
            <ForecastCard
              imagePath={require('../public/Images/humidity.png')}
              cardName="Humidity"
              forecast={this.state.forecast.humidity}
              currentTime={this.state.forecast.currentTime}
              temp={this.state.forecast.temp}
              color="#169BEC"
            />
            <ForecastCard
              cardName="Pressure"
              imagePath={require('../public/Images/pressure.png')}
              forecast={this.state.forecast.pressure}
              currentTime={this.state.forecast.currentTime}
              temp={this.state.forecast.temp}
              color="#16CBEC"
            />
          </View>
          <View style={styles.rowWiseView}>
            <ForecastCard
              cardName="UV Index"
              imagePath={require('../public/Images/uv.png')}
              forecast={this.state.forecast.uvi}
              currentTime={this.state.forecast.currentTime}
              temp={this.state.forecast.temp}
              color="#E14F0B"
            />
            <ForecastCard
              cardName="Visibility"
              imagePath={require('../public/Images/visibility.png')}
              forecast={this.state.forecast.visibility}
              currentTime={this.state.forecast.currentTime}
              temp={this.state.forecast.temp}
              color="#F3AB89"
            />
          </View>
          <View style={styles.rowWiseView}>
            <ForecastCard
              cardName="Temperatute"
              imagePath={require('../public/Images/temp.png')}
              forecast={this.state.forecast.temp}
              currentTime={this.state.forecast.currentTime}
              color="#9F22EC"
            />
          </View>
        </View>
        <TouchableHighlight
          style={styles.playStore}
          onPress={() => this.goToPlayStore()}>
          <Text style={styles.navigateText}> Navigate to play store </Text>
        </TouchableHighlight>
      </ScrollView>
    );
  }
}
function mapStateToProps(state) {
  return {
    userName: state.Login.userName,
    isLoggedIn: state.Login.isLoggedIn,
    isPinSet: state.Login.isPinSet,
    pin: state.Login.pin,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    pinSet: (data) => dispatch(pinSet(data)),
    logOut: (data) => dispatch(logOut(data)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Weather);
