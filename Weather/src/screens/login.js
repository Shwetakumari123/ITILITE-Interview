import React, {Component} from 'react';

//import React

import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  Image,
  TouchableHighlight,
  RefreshControl,
  Alert,
} from 'react-native';
import LoginComponent from '../components/login';
import Icon from 'react-native-vector-icons/FontAwesome';
import Svg, {Line} from 'react-native-svg';
import {connect} from 'react-redux';
import variable from '../common/variable';

import {styles} from '../public/styles/login';
import {loginUser} from '../redux/action/login';

//import React Native basic components

//import {styles} from '../public/styles/login';
//

class LoginScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userName: '',
      passWord: '',
      correctLogin: false,
    };
  }

  componentDidMount() {
    if (this.props.isLoggedIn) {
      this.props.navigation.navigate('Pattern');
    }
  }

  static navigationOptions = ({navigation}) => {
    return {
      headerTitle: (
        <View style={styles.alignCenter}>
          <Text style={styles.screenName}> LOGIN </Text>
        </View>
      ),
      headerRight: <View />,
    };
  };

  signIn = async () => {
    if (
      this.state.userName === variable.username &&
      this.state.passWord === variable.password
    ) {
      await this.setState({correctLogin: true});
    }
    if (!this.state.correctLogin) {
      Alert.alert('Please enter correct password');
    }
    if (this.state.correctLogin) {
      const data = {
        isLoggedIn: true,
      };
      await this.props.loginUser(data);
      // await this.setState({userName: '', passWord: '', correctLogin: false});
      this.props.navigation.navigate('Pattern');
    }
    return this.setState({userName: '', passWord: '', correctLogin: false});
  };

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.upSection}>
          <View style={{flex: 3}}>
            <LoginComponent
              value={this.state.userName}
              label="Username"
              iconName="user"
              secure="false"
              onChange={(userName) => this.setState({userName})}
            />
            <LoginComponent
              value={this.state.passWord}
              label="Password"
              iconName="lock"
              secure="true"
              onChange={(passWord) => this.setState({passWord})}
            />
            <TouchableHighlight
              style={styles.fPassword}
              onPress={() => Alert.alert(variable.message)}>
              <Text style={styles.rightSection}> Forgot Password? </Text>
            </TouchableHighlight>
            <View style={{alignItems: 'flex-end'}}>
              <TouchableHighlight
                activeOpacity={0}
                underlayColor="white"
                style={styles.nextPage}
                onPress={() => this.signIn()}>
                <Icon name={'arrow-circle-right'} size={50} />
              </TouchableHighlight>
            </View>

            <Svg
              height={Dimensions.get('screen').height / 4}
              width={Dimensions.get('screen').width}
              backgroundColor="red">
              <Line
                x1="0"
                y1="0"
                x2={Dimensions.get('screen').width}
                y2={Dimensions.get('screen').height / 4 - 120}
                stroke="#8C27F1"
                strokeWidth="10"
              />
            </Svg>
          </View>
          <View style={{flex: 1}}>
            <Text style={styles.OtherLogin}> OR </Text>
            <Text style={styles.OtherLogin}> Login With Social Media </Text>
            <View style={styles.ImageSection}>
              <TouchableHighlight
                activeOpacity={0}
                underlayColor="white"
                onPress={() => Alert.alert(variable.message)}>
                <Image
                  resizeMode="center"
                  source={require('/Users/antares/Desktop/Assigment-ITLITE/Weather/src/public/Images/fb.png')}
                />
              </TouchableHighlight>
              <TouchableHighlight
                activeOpacity={0}
                underlayColor="white"
                onPress={() => Alert.alert(variable.message)}>
                <Image
                  resizeMode="center"
                  source={require('/Users/antares/Desktop/Assigment-ITLITE/Weather/src/public/Images/G.png')}
                />
              </TouchableHighlight>
              <TouchableHighlight
                activeOpacity={0}
                underlayColor="white"
                onPress={() => Alert.alert(variable.message)}>
                <Image
                  resizeMode="center"
                  source={require('/Users/antares/Desktop/Assigment-ITLITE/Weather/src/public/Images/twitter.png')}
                />
              </TouchableHighlight>
            </View>
          </View>
        </View>
        <View style={styles.downSection}>
          <TouchableHighlight onPress={() => Alert.alert(variable.message)}>
            <Text style={styles.labelText}>
              Don't have a account? Click here
            </Text>
          </TouchableHighlight>
        </View>
      </View>
    );
  }
}

function mapStateToProps(state) {
  return {
    userName: state.Login.userName,
    isLoggedIn: state.Login.isLoggedIn,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    loginUser: (data) => dispatch(loginUser(data)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginScreen);
