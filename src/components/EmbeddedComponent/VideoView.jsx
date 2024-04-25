import React from 'react';
import {StyleSheet, View} from 'react-native';
import Video from 'react-native-video';

const VideoView = ({videoURL}) => {
  return (
    <View style={{flex: 1}}>
      <Video
        style={{width: 100, height: 200}}
        controls={true}
        src={{uri: videoURL}}
        source={{url: videoURL}}
        onError={() => {
          console.log('error');
        }}
      />
    </View>
  );
};

export default VideoView;

const styles = StyleSheet.create({});
