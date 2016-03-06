// Displays a single day of the week
var React = require('react-native');
var Text = React.Text;
var StyleSheet = React.StyleSheet;

// Create component
var DayItem = React.createClass({
  render: function() {
    return (
      <Text style={styles.day}>
        {this.props.day}
      </Text>
    );
  }
});

// Style component
var styles = StyleSheet.create({
  // Name the property whatever you want
  day: {
    fontSize: 18,
    color: '#0000ff'
  }
});

// Make this code available elsewhere
module.exports = DayItem;
