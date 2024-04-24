/* eslint-disable react/no-unstable-nested-components */
import notifee from '@notifee/react-native';
import {useNavigation} from '@react-navigation/native';
import React, {useEffect} from 'react';
import {Button, StyleSheet, Text, TextComponent, TouchableOpacity, View} from 'react-native';
import PlayerComponent from './components/Player';

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
    
      {['Survey', 'Notifications', 'Embedded Components'].map(
        (value, index) => (
          <Type
            text={value}
            key={value}
            onPress={() => {
              openScreen(value);
            }}
          />
        ),
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    padding: 20,
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
    borderColor: 'black',
    marginBottom: 10,
  },
  typeText: {
    fontSize: 16,
  },
});
