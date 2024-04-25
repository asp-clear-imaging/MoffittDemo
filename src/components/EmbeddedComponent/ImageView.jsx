import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';

const ImageView = ({imageURL}) => {
  return (
    <View style={{padding: 10, rowGap: 20, marginBottom: 50}}>
      <View style={{width: '100%', height: 200, borderWidth: 2}}>
        <Image source={{uri: imageURL}} style={{flex: 1}} />
      </View>
      <View
        style={{
          width: '100%',
          height: 200,
          flexDirection: 'row',
          borderWidth: 2,
        }}>
        <Image source={{uri: imageURL}} style={{flex: 2}} />
        <View style={{flex: 1, padding: 10, justifyContent: 'center'}}>
          <Text style={{fontSize: 20, fontWeight: '600', textAlign: 'center'}}>
            Moffitt
          </Text>
          <Text style={{fontSize: 12, fontWeight: '400'}}>
            At Moffitt, ours is an unrelenting mission to save more lives.
            That’s why we are accelerating the science with greater urgency than
            ever before.
          </Text>
        </View>
      </View>
      <View
        style={{
          width: '100%',
          height: 200,
          flexDirection: 'row-reverse',
          borderWidth: 2,
        }}>
        <Image source={{uri: imageURL}} style={{flex: 2}} />
        <View style={{flex: 1, padding: 10, justifyContent: 'center'}}>
          <Text style={{fontSize: 20, fontWeight: '600', textAlign: 'center'}}>
            Moffitt
          </Text>
          <Text style={{fontSize: 12, fontWeight: '400'}}>
            At Moffitt, ours is an unrelenting mission to save more lives.
            That’s why we are accelerating the science with greater urgency than
            ever before.
          </Text>
        </View>
      </View>
      <View style={{width: '100%', height: 200, borderWidth: 2}}>
        <Image source={{uri: imageURL}} style={{flex: 2}} />
        <View style={{flex: 1, padding: 10, justifyContent: 'center'}}>
          <Text style={{fontSize: 20, fontWeight: '600', textAlign: 'center'}}>
            Moffitt
          </Text>
          <Text style={{fontSize: 12, fontWeight: '400'}}>
            At Moffitt, ours is an unrelenting mission to save more lives.
            That’s why we are accelerating the science with greater urgency than
            ever before.
          </Text>
        </View>
      </View>
      <View
        style={{
          width: '100%',
          height: 200,
          flexDirection: 'column-reverse',
          borderWidth: 2,
        }}>
        <Image source={{uri: imageURL}} style={{flex: 2}} />
        <View style={{flex: 1, padding: 10, justifyContent: 'center'}}>
          <Text style={{fontSize: 20, fontWeight: '600', textAlign: 'center'}}>
            Moffitt
          </Text>
          <Text style={{fontSize: 12, fontWeight: '400'}}>
            At Moffitt, ours is an unrelenting mission to save more lives.
            That’s why we are accelerating the science with greater urgency than
            ever before.
          </Text>
        </View>
      </View>
    </View>
  );
};

export default ImageView;

const styles = StyleSheet.create({});
