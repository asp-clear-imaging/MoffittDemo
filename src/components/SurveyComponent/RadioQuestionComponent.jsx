import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import Question from './Question';

const RadioQuestionComponent = ({
  index,
  questions,
  options,
  selectedOption,
  onSelectOption,
}) => {
  return (
    <View style={styles.container}>
      <Question index={index + 1} question={questions} key={index} />
      {options.map((option, index) => (
        <TouchableOpacity key={index} onPress={() => onSelectOption(option)}>
          <View style={styles.optionContainer}>
            <View style={styles.radioButton}>
              {selectedOption === option && (
                <View style={styles.radioInnerCircle} />
              )}
            </View>
            <Text style={styles.optionText}>{option}</Text>
          </View>
        </TouchableOpacity>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    margin: 10,
  },
  optionContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
  },
  radioButton: {
    width: 20,
    height: 20,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: '#333',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 10,
  },
  radioInnerCircle: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: '#333',
  },
  optionText: {
    fontSize: 16,
    marginBottom: 8,
    paddingLeft: 16,
    flexShrink: 1,
  },
  questionText: {
    fontSize: 18,
    marginBottom: 12,
  },
});

export default RadioQuestionComponent;
