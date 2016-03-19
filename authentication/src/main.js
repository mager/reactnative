var React = require('react-native');
var {
  View,
  Text,
  StyleSheet
} = React;

var SignIn = require('./components/authentication/signin');


module.exports = React.createClass({
  render: function() {
    return (
      <View style={styles.container}>
        <SignIn />
      </View>
    );
  }
});

var styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
});
