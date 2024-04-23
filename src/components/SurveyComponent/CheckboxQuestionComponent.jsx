import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import Question from './Question';

const CheckboxQuestionComponent = ({
  index,
  questions,
  options,
  selectedOptions,
  onSelectOption,
}) => {
  console.log(index);
  return (
    <View style={styles.container}>
      <Question index={index + 1} question={questions} key={index} />
      {options.map((option, idx) => (
        <TouchableOpacity key={idx} onPress={() => onSelectOption(option)}>
          <View style={styles.optionContainer}>
            <View style={styles.checkbox}>
              {selectedOptions.includes(option) && (
                <View style={styles.checkboxInner} />
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
  checkbox: {
    width: 20,
    height: 20,
    borderWidth: 2,
    borderColor: '#333',
    marginRight: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  checkboxInner: {
    width: 12,
    height: 12,
    backgroundColor: '#333',
  },
  optionText: {
    fontSize: 16,
    marginBottom: 8,
    paddingLeft: 16,
  },
  questionText: {
    fontSize: 18,
    marginBottom: 12,
  },
});

export default CheckboxQuestionComponent;
