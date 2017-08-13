import React, { Component } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      isReady: false,
      yaks: []
    }
  }
  async componentWillMount() {
  await Font.loadAsync({
    'Roboto': require('native-base/Fonts/Roboto.ttf'),
    'Roboto_medium': require('native-base/Fonts/Roboto_medium.ttf'),
    'Ionicons': require('native-base/Fonts/Ionicons.ttf'),
  });
    this.setState({isReady: true});
  }
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.heading}>Yak Bak</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'plum',
    alignItems: 'center',
    justifyContent: 'center',
  },
  heading: {
    fontSize: 90,
    color: 'blue'
  }
});
