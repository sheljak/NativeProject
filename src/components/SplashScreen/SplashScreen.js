import React from 'react';
import { StyleSheet,
         Text,
         View,
         } from 'react-native';

export default class SplashScreen extends React.Component {
  static navigationOptions = {
    header: null
  }

  componentWillMount() {
    setTimeout(() => {
      this.props.navigation.navigate('Home')
    },2000)
  }

  render() {
    return(
        <View style={styles.container}>
          <Text style={styles.welcome}>Splash Screen</Text>
        </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'skyblue'
  },
  welcome: {
    color: '#FFF',
    fontSize: 30
  }
})