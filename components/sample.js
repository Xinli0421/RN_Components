import React from 'react';
import { View, Text, Image } from "react-native";

class StoryContainer extends React.Component {
  render() {
    return (
      <View>
          <Text>Some other text</Text>
          <Image
          source={require('../assets/images/northernlights.jpg')}
          style={{width: 200, height: 400, marginLeft: 50}}
        />
      </View>
    );
  }
}

export default StoryContainer;