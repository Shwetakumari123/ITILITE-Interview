import React from 'react';
//import react in our code.
import {TextInput, View, StyleSheet, Text, Dimensions} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
//import all the components we are going to use.
export default class Login extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {label, iconName, onChange, value, secure} = this.props;

    return (
      <View style={styles.container}>
        <Text style={styles.label}> {label} </Text>
        <Icon name={iconName} style={styles.iconStyle} size={30} />
        <TextInput
          value={value}
          autoCapitalize="none"
          secureTextEntry={secure}
          onChangeText={(text) => onChange(text)}
          style={styles.input}
        />
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    padding: 5,
    marginTop: '2%',
  },
  label: {
    textAlign: 'left',
    fontSize: 20,
    fontWeight: 'bold',
  },
  input: {
    padding: 10,
    borderBottomWidth: 2,
  },
  iconStyle: {
    marginTop: '2%',
  },
});
