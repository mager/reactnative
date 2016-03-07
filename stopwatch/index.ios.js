var React = require('react-native');
// Destructuring, same as var Text = React.Text, and so on
var {
  Text,
  View,
  TouchableHighlight,
  AppRegistry,
  StyleSheet
} = React;

var StopWatch = React.createClass({
  render: function() {
    return (
      <View style={styles.container}>

        <View style={[styles.header, this.border('yellow')]}>
          <View style={[styles.timerWrapper, this.border('red')]}>
            <Text>00:00.00</Text>
          </View>
          <View style={[styles.buttonWrapper, this.border('lime')]}>
            {this.startStopButton()}
            {this.lapButton()}
          </View>
        </View>

        <View style={[styles.footer, this.border('blue')]}>
          <Text>I am a list of laps</Text>
        </View>

      </View>
    );
  },
  startStopButton: function() {
    return (
      <TouchableHighlight
        underlayColor="gray"
        onPress={this.handleStartPress}>
        <Text>Start</Text>
      </TouchableHighlight>
    )
  },
  lapButton: function() {
    return <View><Text>Lap</Text></View>;
  },
  handleStartPress: function() {
    console.log('Start was pressed');
  },
  border: function(color) {
    return {
      borderColor: color,
      borderWidth: 2
    }
  }
});

var styles = StyleSheet.create({
  container: {
    flex: 1, // Fill the entire screen
    alignItems: 'stretch'
  },
  header: { // Yellow
    flex: 1
  },
  footer: { // Blue
    flex: 1
  },
  timerWrapper: { // Red
    flex: 5,
    justifyContent: 'center',
    alignItems: 'center'
  },
  buttonWrapper: { // Green
    flex: 3,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center'
  }
});

AppRegistry.registerComponent('stopwatch', () => StopWatch);
