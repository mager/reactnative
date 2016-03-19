var React = require('react-native');
var {
  Navigator,
  StyleSheet
} = React;

var Parse = require('parse/react-native');
var SignIn = require('./components/authentication/signin');

var ROUTES = {
  signin: SignIn
}


module.exports = React.createClass({
  componentWillMount: function() {
    Parse.initialize('vDqwTkZEILhk5HbnIXILowkBroDUUr0YNXTIxZ6q', 'KxISAY75oTWUZzZTt2XkQSPxllOgNZ8N0NrrDVCu');
  },
  renderScene: function(route, navigator) {
    var Component = ROUTES[route.name]; // ROUTES['signin'] => SignIn
    return <Component />;
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
