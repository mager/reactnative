var React = require('react-native');
var {
  Text, View, StyleSheet, TextInput
} = React;
var Parse = require('parse/react-native');
var Button = require('../common/button');

module.exports = React.createClass({
  getInitialState: function() {
    return {
      username: '',
      password: '',
      passwordConfirmation: '',
      errorMessage: ''
    }
  },
  render: function() {
    return (
      <View style={styles.container}>
        <Text>Sign Up</Text>
        <Text style={styles.label}>Username:</Text>
        <TextInput
          value={this.state.username}
          onChangeText={(text) => this.setState({
            username: text
          })}
          style={styles.input} />
        <Text style={styles.label}>Password:</Text>
        <TextInput
          value={this.state.password}
          onChangeText={(text) => this.setState({
            password: text
          })}
          style={styles.input}
          secureTextEntry={true} />
        <Text style={styles.label}>Confirm Password:</Text>
        <TextInput
          value={this.state.passwordConfirmation}
          onChangeText={(text) => this.setState({
            passwordConfirmation: text
          })}
          style={styles.input}
          secureTextEntry={true} />
        <Text style={styles.label}>{this.state.errorMessage}</Text>
        <Button
          text={'Sign Up'}
          onPress={this.onSignUpPress}/>
        <Button
          text={'I have an account...'}
          onPress={this.onSignInPress} />
      </View>
    );
  },
  onSignUpPress: function() {
    // sign the user up
    if (this.state.password !== this.state.passwordConfirmation) {
      return this.setState({
        errorMessage: 'Your passwords do not match'
      });
    }

    var user = new Parse.User();
    user.set('username', this.state.username);
    user.set('password', this.state.password);
    user.signUp(null, {
      success: (user) => {
        this.props.navigator.immediatelyResetRouteStack([{
          name: 'tweets'
        }]);
      },
      error: (user, error) => {
        this.setState({
          errorMessage: error.message
        });
      }
    });
  },
  onSignInPress: function() {
    this.props.navigator.pop();
  }
});

var styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff'
  },
  label: {
    fontSize: 18
  },
  input: {
    padding: 4,
    height: 40,
    borderColor: '#ddd',
    borderWidth: 1,
    borderRadius: 3,
    margin: 5,
    alignSelf: 'center',
    width: 200
  }
});
