var React = require('react-native');
var {
  View,
  Text,
  StyleSheet,
  TextInput
} = React;
var Parse = require('parse/react-native');
var Button = require('../common/button');


module.exports = React.createClass({
  getInitialState: function() {
    return {
      username: '',
      password: '',
      errorMessage: ''
    };
  },
  render: function() {
    return (
      <View style={styles.container}>
        <Text>Sign in</Text>

        <Text style={styles.label}>Username:</Text>
        <TextInput
          style={styles.input}
          value={this.state.username}
          onChangeText={(text) => this.setState({
            username: text
          })} />

        <Text style={styles.label}>Password:</Text>
        <TextInput
          style={styles.input}
          value={this.state.password}
          onChangeText={(text) => this.setState({
            password: text
          })}
          secureTextEntry={true} />

        <Text style={styles.label}>{this.state.errorMessage}</Text>
        <Button text={'Sign in'} onPress={this.onPress} />
        <Button text={'I need an account'} onPress={this.onSignUpPress} />
      </View>
    );
  },
  onSignUpPress: function() {
    // Navigate over to signup page. Need to pass Navigator as a prop.
    this.props.navigator.push({name: 'signup'});
  },
  onPress: function() {
    // Log the user in
    Parse.User.logIn(
      this.state.username,
      this.state.password, {
        success: (user) => {
          this.props.navigator.immediatelyResetRouteStack([{
            name: 'tweets'
          }]);
        },
        error: (data, error) => {
          this.setState({
            errorMessage: error.message
          });
        }
      });
  }
});

var styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  input: {
    padding: 4,
    height: 40,
    borderColor: '#ddd',
    borderWidth: 1,
    borderRadius: 3,
    margin: 5,
    width: 200,
    alignSelf: 'center'
  },
  label: {
    fontSize: 18
  }
});
