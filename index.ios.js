// Import some code we need
var React = require ('react-native');
var AppRegistry = React.AppRegistry;
var Text = React.Text;
var View = React.View;
var StyleSheet = React.StyleSheet;
var DayItem = require('./src/day-item');

var DAYS = [
  'Sunday',
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday'
];

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
          <DayItem day={DAYS[0]} />
        <Text>
        </Text>
      </View>
    );
  }
});

// Props in React is about passing configuration options from a parent to a child element

// Style the React component
var styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
});

// Show the React component on the screen
AppRegistry.registerComponent('weekdays', function() {
  return Weekdays
});
