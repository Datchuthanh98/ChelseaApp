import React, { Component } from 'react';
import { View, Text, Button } from 'react-native';
import { WebView } from 'react-native-webview';

export default class Detail extends Component {
  static navigationOptions = {
    title: 'Detail Page',
  };
 
  render() {
    return (
      <View style={{ flex: 1}}>
       <WebView
        source={{uri: 'https://github.com/facebook/react-native'}}
        style={{marginTop: 20}}
      />
      </View>
    );
  }
}