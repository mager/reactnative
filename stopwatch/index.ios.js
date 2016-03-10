var formatTime = require('minutes-seconds-milliseconds');
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
  /*
  "state" is an object we use to track and respond to user input. Each component has its own instance of state. Changing state causes our components to re-render. Always default your state to a reasonable value.
  */
  getInitialState: function() {
    return {
      timeElapsed: null
    };
  },

  render: function() {
    return (
      <View style={styles.container}>

        <View style={[styles.header, this.border('yellow')]}>
          <View style={[styles.timerWrapper, this.border('red')]}>
            <Text>
              {formatTime(this.state.timeElapsed)}
            </Text>
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
    var startTime = new Date();

    setInterval(() => {
      // Never do this.state.timeElapsed. This is the only way to update state:
      this.setState({
        timeElapsed: new Date() - startTime
      });
    }, 30)

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
