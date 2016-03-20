var React = require('react-native');
var {
  Navigator,
  StyleSheet
} = React;

var Parse = require('parse/react-native');
var SignIn = require('./components/authentication/signin');
var SignUp = require('./components/authentication/signup');
var Tweets = require('./components/tweets/tweets');

var ROUTES = {
  signin: SignIn,
  signup: SignUp,
  tweets: Tweets
}


module.exports = React.createClass({
  componentWillMount: function() {
    Parse.initialize(
      'vDqwTkZEILhk5HbnIXILowkBroDUUr0YNXTIxZ6q',
      'KxISAY75oTWUZzZTt2XkQSPxllOgNZ8N0NrrDVCu');
  },
  renderScene: function(route, navigator) {
    var Component = ROUTES[route.name]; // ROUTES['signin'] => SignIn
    return <Component route={route} navigator={navigator} />;
  },
  render: function() {
    return (
      <Navigator
        style={styles.container}
        initialRoute={{name: 'signin'}}
        renderScene={this.renderScene}
        configureScene={() => {
          return Navigator.SceneConfigs.FloatFromRight;
        }} />
    );
  }
});

var styles = StyleSheet.create({
  container: {
    flex: 1
  }
});
