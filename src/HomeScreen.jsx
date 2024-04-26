/* eslint-disable react/no-unstable-nested-components */
import notifee from '@notifee/react-native';
import {useNavigation} from '@react-navigation/native';
import React, {useEffect} from 'react';
import {
  Button,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

export default function HomeScreen() {
  const navigation = useNavigation();

  useEffect(() => {
    navigation.setOptions({
      title: 'Home',
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const openScreen = from => {
    console.log(from);
    if (from === 'Survey') {
      navigation.navigate('surveyOptions');
    } else if (from === 'Notifications') {
      navigation.navigate('notifOptions');
    } else {
      navigation.navigate('ec');
    }
  };

  const Type = ({text, onPress}) => {
    return (
      <TouchableOpacity style={styles.typeContainer} onPress={onPress}>
        <Text style={styles.typeText}>{text}</Text>
      </TouchableOpacity>
    );
  };
  return (
    <View style={styles.container}>
      <Image
        source={require('./assets/logo.png')}
        style={{resizeMode: 'center'}}
      />
      <Text style={{fontSize: 20, color: 'white', marginBottom: 20}}>
        Medal Component Library
      </Text>
      {['Survey', 'Notifications', 'Embedded Content'].map((value, index) => (
        <Type
          text={value}
          key={value}
          onPress={() => {
            openScreen(value);
          }}
        />
      ))}
      <Text style={{position: 'absolute', bottom: 10, color: 'white'}}>
        This is a demo
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#062F6E',
  },
  header: {
    fontSize: 24,
    fontWeight: '600',
    marginBottom: 20,
  },
  typeContainer: {
    width: '100%',
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderRadius: 10,
    borderColor: 'white',
    marginBottom: 10,
  },
  typeText: {
    fontSize: 16,
    color: 'white',
  },
});
