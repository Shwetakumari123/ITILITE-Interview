import React, {Component} from 'react';
import {
  StyleSheet,
  View,
  Text,
  TouchableHighlight,
  TouchableWithoutFeedback,
  Dimensions,
  Keyboard,
  Button,
  Alert,
} from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome';
import {StackActions} from 'react-navigation';
import {styles} from '../public/styles/pattern';
import SmoothPinCodeInput from 'react-native-smooth-pincode-input';
import {connect} from 'react-redux';
import {loginUser, pinSet} from '../redux/action/login';

class Pattern extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pin: '',
    };
  }

  componentDidMount() {}

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
          <Text style={styles.screenName}> PATTERN </Text>
        </View>
      ),
    };
  };

  pText = () => {
    if (!this.props.isPinSet) {
      return (
        <View style={styles.pinTextArea}>
          <TouchableHighlight>
            <Text style={styles.pinText}>
              Please enter security pin for app
            </Text>
          </TouchableHighlight>
        </View>
      );
    }
    if (this.props.isPinSet) {
      return (
        <View style={styles.pinTextArea}>
          <TouchableHighlight>
            <Text style={styles.pinText}>Enter security pin</Text>
          </TouchableHighlight>
        </View>
      );
    }
  };

  onPinChange = (value) => {
    this.setState({pin: value});
  };
  onPinFulfill = () => {
    Keyboard.dismiss();
  };

  onPinSubmit = async () => {
    if (this.state.pin.length < 4) {
      Alert.alert('Please enter 4-digit pin ');
    }

    if (this.props.isPinSet) {
      console.log(this.state.pin, this.props.pin);
      if (this.state.pin === this.props.pin) {
        this.props.navigation.navigate('Weather');
      }
      if (this.state.pin !== this.props.pin) {
        Alert.alert('PIN-Incorrect');
      }
    }

    if (!this.props.isPinSet && this.state.pin.length === 4) {
      let data = {
        isPinSet: true,
        pin: this.state.pin,
      };
      await this.props.pinSet(data);

      this.props.navigation.navigate('Weather');
    }
    return this.setState({pin: ''});
  };

  render() {
    return (
      <View style={styles.container}>
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <View style={styles.subContainer}>
            <View style={styles.pinArea}>
              {this.pText()}
              <SmoothPinCodeInput
                value={this.state.pin}
                cellStyle={styles.cellStyle}
                cellSize={50}
                codeLength={4}
                textStyle={styles.pinTextStyle}
                restrictToNumbers={true}
                onTextChange={this.onPinChange}
                onFulfill={this.onPinFulfill}
              />
            </View>
            <TouchableHighlight
              style={styles.proceed}
              onPress={() => this.onPinSubmit()}>
              <Text style={styles.proceedText}> Proceed </Text>
            </TouchableHighlight>
          </View>
        </TouchableWithoutFeedback>
      </View>
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
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Pattern);
