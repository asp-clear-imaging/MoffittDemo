import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

export default function Question({index, question}) {
  return (
    <View>
      <Text style={styles.question}>{`${index + 1}. ${question}`}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  question: {
    fontSize: 14,
    marginBottom: 10,
  },
});
