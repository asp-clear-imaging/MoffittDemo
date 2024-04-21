/* eslint-disable react/no-unstable-nested-components */
import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

export default function SurveyMain() {
  const Type = ({text}) => {
    return (
      <View style={styles.typeContainer}>
        <Text style={styles.typeText}>{text}</Text>
      </View>
    );
  };
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Survey Type</Text>
      {['Single Select', 'Mutli Select', 'Combined'].map((value, index) => (
        <Type text={value} />
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
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
