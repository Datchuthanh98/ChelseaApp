import React, { Component } from 'react';
import { View, Text, Button } from 'react-native';
import { WebView } from 'react-native-webview';

export default class Item2 extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <View style={{ flex: 1}}>
        <Button
        title='Comback to Home' 
        onPress={() => {
          this.props.navigation.navigate('Home')
        }}/>
         <WebView
        source={{uri: 'https://www.youtube.com/'}}
        style={{marginTop: 20}}
      />
      </View>
    );
  }
}