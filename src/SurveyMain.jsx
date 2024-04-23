/* eslint-disable react/no-unstable-nested-components */
import {useNavigation} from '@react-navigation/native';
import React, {useEffect} from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import radio from './SurveyQuestionsOnly.json';
import checkBox from './SurveyCheckboxOnly.json';
import combined from './SurveyCombined.json';

export default function SurveyMain() {
  const navigation = useNavigation();

  useEffect(() => {
    navigation.setOptions({
      title: 'Survey Type',
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const getJson = from => {
    console.log(from);
    if (from === 'Single Select') {
      return radio;
    } else if (from === 'Multi Select') {
      return checkBox;
    } else {
      return combined;
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
      {/* <Text style={styles.header}>Survey Type</Text> */}
      <Image
        source={require('./assets/logo.png')}
        style={{resizeMode: 'center'}}
      />
      {['Single Select', 'Multi Select', 'Combined'].map((value, index) => (
        <Type
          text={value}
          key={value}
          onPress={() => {
            navigation.navigate('survey', {surveyData: getJson(value)});
          }}
        />
      ))}
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
