// Import some code we need
var Moment = require('moment');
var React = require ('react-native');
var AppRegistry = React.AppRegistry;
var Text = React.Text;
var View = React.View;
var StyleSheet = React.StyleSheet;
var DayItem = require('./src/day-item');


// Create a React component
var Weekdays = React.createClass({
  // A set of instructions which says what our component looks like, plus actions, events, etc
  render: function() {
    // Return some code that describes what our component looks like
    return (
      <View style={styles.container}>
        {this.days()}
      </View>
    );
  },
  // Utility functions that we are gonna call manually
  days: function() {
    // Returns an array of DayItem components
    var daysItems = [];

    for(var i=0; i<7; i++) {
      var day = Moment().add(i, 'days').format('dddd');
      daysItems.push(
        <DayItem day={day} daysUntil={i} />
      )
    }

    return daysItems;
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
