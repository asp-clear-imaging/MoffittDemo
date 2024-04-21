import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const CheckboxQuestionComponent = ({ index, questions, options, selectedOptions, onSelectOption }) => {
    return (
        <View style={styles.container}>
            <Text style={styles.questionText}>{index+1}. {questions}</Text>
            {options.map((option, index) => (
                <TouchableOpacity key={index} onPress={() => onSelectOption(option)}>
                    <View style={styles.optionContainer}>
                        <View style={styles.checkbox}>
                            {selectedOptions.includes(option) && <View style={styles.checkboxInner} />}
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
        margin:10 ,
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
