// Import some code we need
var React = require ('react-native');
var AppRegistry = React.AppRegistry;
var Text = React.Text;
var View = React.View;
var StyleSheet = React.StyleSheet;

// Create a React component
var Weekdays = React.createClass({
  // A set of instructions which says what our component looks like, plus actions, events, etc
  render: function() {
    // Return some code that describes what our component looks like
    return (
      <View style={styles.container}>
        <Text>
          Days of the week:
        </Text>
      </View>
    );
  }
});

// Style the React component
var styles = StyleSheet.create({
  container: {
    flex: 1,
    // reverse the operation
    flexDirection: 'row',
    // horizontal
    justifyContent: 'flex-end',
    // vertical
    alignItems: 'flex-start'
  }
});

// Show the React component on the screen
AppRegistry.registerComponent('weekdays', function() {
  return Weekdays
});
