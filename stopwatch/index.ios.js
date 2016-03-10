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
      timeElapsed: null,
      running: false
    };
  },

  render: function() {
    return (
      <View style={styles.container}>

        <View style={styles.header}>
          <View style={styles.timerWrapper}>
            <Text style={styles.timer}>
              {formatTime(this.state.timeElapsed)}
            </Text>
          </View>
          <View style={styles.buttonWrapper}>
            {this.startStopButton()}
            {this.lapButton()}
          </View>
        </View>

        <View style={styles.footer}>
          <Text>I am a list of laps</Text>
        </View>

      </View>
    );
  },

  startStopButton: function() {
    return (
      <TouchableHighlight
        underlayColor="gray"
        onPress={this.handleStartPress}
        style={[styles.button, styles.startButton]}>
        <Text>
          {this.state.running ? 'Stop' : 'Start'}
        </Text>
      </TouchableHighlight>
    )
  },
  lapButton: function() {
    return <View style={styles.button}>
      <Text>Lap</Text>
    </View>;
  },
  handleStartPress: function() {
    if (this.state.running) {
      clearInterval(this.interval);
      this.setState({running: false});
      return;
    }

    var startTime = new Date();

    this.interval = setInterval(() => {
      // Never do this.state.timeElapsed. This is the only way to update state:
      this.setState({
        timeElapsed: new Date() - startTime,
        running: true
      });
    }, 30)

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
  },
  timer: {
    fontSize: 60
  },
  button: {
    borderWidth: 2,
    height: 100,
    width: 100,
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center'
  },
  startButton: {
    borderColor: '#00cc00'
  }
});

AppRegistry.registerComponent('stopwatch', () => StopWatch);
