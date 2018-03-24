import React from 'react';
import { AppRegistry, View} from 'react-vr';
import App from './src/App'
import TextScene from './src/TextScene'

export default class spaceman extends React.Component {
  render() {
    return (
      <View>
          <App />
          <TextScene/>
      </View>
    );
  }
};

AppRegistry.registerComponent('spaceman', () => spaceman);
