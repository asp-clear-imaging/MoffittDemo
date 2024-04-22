import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

export default function Question({index, question}) {
  return (
    <View>
      <Text style={styles.question}>{`${index}. ${question}`}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  question: {
    fontSize: 20,
    fontWeight: '700',
    marginBottom: 10,
  },
});
