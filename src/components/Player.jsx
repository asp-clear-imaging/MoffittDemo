import React from 'react';
import { View, Text, Image } from 'react-native';
import Video from 'react-native-video';

const PlayerComponent = () => {
    const imgUrl = 'https://fastly.picsum.photos/id/842/200/300.jpg?hmac=VSk5Mm2EuqIzLkckPneqxJrjhkmVquU3o-pEYmuGiTk'
  return (
    <View style={{ flex: 1 }}>
      {/* Video Card */}
      <View style={{ borderRadius: 4, overflow: 'hidden', margin: 20, marginBottom: 10 }}>
        <Video
          source={{ uri: 'http://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4'}}
          ref={(ref) => {
            this._player = ref
        }}     
          style={{ width: '100%', aspectRatio: 16/9, position: 'absolute',
          top: 0,
          bottom: 0,
          left: 0,
          right: 0,}}
          resizeMode="cover"
          controls={true}
        />
      </View>

      {/* Photo Card */}
      <View style={{ borderRadius: 4, overflow: 'hidden', marginHorizontal: 20, marginBottom: 20, backgroundColor: '#ffffff' }}>
        
        <Image
          src={imgUrl}
          style={{ width: '100%', height: 200, resizeMode: 'cover' }}
        />
        <View style={{ padding: 20 }}>
          <Text style={{ fontSize: 16, color: 'black', textAlign: 'left' }}>
            Your description text goes here...
          </Text>
        </View>
      </View>
    </View>
  );
};

export default PlayerComponent;
