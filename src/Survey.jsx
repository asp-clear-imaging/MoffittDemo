import React, {useEffect, useState} from 'react';
import {
  Animated,
  Button,
  Easing,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import CheckboxQuestionComponent from './components/SurveyComponent/CheckboxQuestionComponent';
import RadioQuestionComponent from './components/SurveyComponent/RadioQuestionComponent';

const Survey = ({navigation, route}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [answers, setAnswers] = useState([]);
  const progressAnimation = new Animated.Value(0);
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);
  const [isEligible, setIsEligible] = useState(false);
  const {surveyData} = route.params;
  console.log(surveyData);

  useEffect(() => {
    navigation.setOptions({
      title: 'Survey',
    });
    Animated.timing(progressAnimation, {
      toValue: currentIndex / surveyData.length,
      duration: 300,
      easing: Easing.ease,
      useNativeDriver: false,
    }).start();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentIndex]);

  const handleNext = () => {
    if (currentIndex === surveyData.length - 1) {
      checkEligibility();
      setShowSuccessMessage(true);
    } else {
      setCurrentIndex(prevIndex => prevIndex + 1);
    }
  };

  const handleBack = () => {
    setCurrentIndex(prevIndex => prevIndex - 1);
  };

  const checkEligibility = () => {
    let eligibilityStatus = [];

    surveyData.forEach((question, index) => {
      const selectedOptions = answers[index];
      console.log('test', selectedOptions);
      if (question.type === 'radio') {
        let eligible = question.eligibleFields.includes(selectedOptions);
        eligible && setIsEligible(true);
      } else {
        if (!selectedOptions || selectedOptions.length === 0) {
          eligibilityStatus.push('Not eligible');
        } else if (!question.eligibleFields) {
          //eligibilityStatus.push('Eligible';
        } else {
          const isEligible = selectedOptions?.some(option =>
            question.eligibleFields.includes(option),
          );
          {
            isEligible && setIsEligible(true);
          }
          eligibilityStatus.push(isEligible ? 'Eligible' : 'Not eligible');
        }
      }
    });

    return eligibilityStatus;
  };

  const handleAnswerChange = option => {
    const currentQuestion = surveyData[currentIndex];
    let newAnswers = answers && answers.length > 0 ? [...answers] : [];

    if (currentQuestion.type === 'checkbox') {
      if (newAnswers[currentIndex]?.includes(option)) {
        newAnswers[currentIndex] = newAnswers[currentIndex].filter(
          item => item !== option,
        );
      } else {
        if (newAnswers[currentIndex]) {
          newAnswers[currentIndex].push(option);
        } else {
          newAnswers[currentIndex] = [option];
        }
      }
    } else if (currentQuestion.type === 'radio') {
      newAnswers[currentIndex] = option;
    }

    setAnswers(newAnswers);
  };

  const calculateScore = () => {
    let score = 0;
    surveyData.forEach((question, index) => {
      if (question.correctAnswer === answers[index]) {
        score++;
      }
    });
    return score;
  };

  const isNextButtonDisabled = () => {
    const currentQuestion = surveyData[currentIndex];
    if (currentQuestion.type === 'checkbox') {
      return !answers[currentIndex] || answers[currentIndex].length === 0;
    }
    return !answers[currentIndex];
  };

  const renderQuestion = () => {
    const currentQuestion = surveyData[currentIndex];
    console.log(currentIndex);
    switch (currentQuestion.type) {
      case 'radio':
        return (
          <RadioQuestionComponent
            index={currentIndex}
            questions={currentQuestion.question}
            options={currentQuestion.options}
            selectedOption={answers[currentIndex]}
            onSelectOption={option => handleAnswerChange(option)}
          />
        );
      case 'checkbox':
        return (
          <CheckboxQuestionComponent
            index={currentIndex}
            questions={currentQuestion.question}
            options={currentQuestion.options}
            selectedOptions={answers[currentIndex] || []}
            onSelectOption={option => handleAnswerChange(option)}
          />
        );
      default:
        return null;
    }
  };

  return (
    <ScrollView style={styles.container}>
      {/* <Text style={styles.heading}>Survey Form</Text> */}
      {!showSuccessMessage && (
        <>
          <View style={styles.progressBarContainer}>
            <View style={styles.progressBarText}>
              <Text>{`Progress ${currentIndex + 1}/${surveyData.length}`}</Text>
              <Text>{`${((currentIndex / surveyData.length) * 100).toFixed(
                0,
              )}%`}</Text>
            </View>
            <Animated.View
              style={[
                styles.progressBar,
                {
                  width: progressAnimation.interpolate({
                    inputRange: [0, 1],
                    outputRange: ['0%', '100%'],
                  }),
                },
              ]}
            />
          </View>
          {renderQuestion()}
          <View style={styles.buttonContainer}>
            {currentIndex !== 0 && (
              <Button
                buttonStyle={styles.button2}
                title="Back"
                onPress={handleBack}
              />
            )}
            <View style={{marginHorizontal: 10}} />
            <Button
              buttonStyle={styles.button2}
              title={currentIndex === surveyData.length - 1 ? 'Submit' : 'Next'}
              onPress={handleNext}
              disabled={isNextButtonDisabled()}
            />
          </View>
        </>
      )}
      {showSuccessMessage && (
        <View style={styles.completionMessage}>
          <Text style={{fontSize: 34, fontWeight: '700', marginBottom: 10}}>
            {isEligible ? 'You are eligible' : 'You are not eligible.'}
          </Text>
          <Button
            styles={styles.button2}
            onPress={() => {
              navigation.goBack();
              navigation.goBack();
              cl;
            }}
            title="Home"
          />
        </View>
      )}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#F4F4F4',
    height: '100%',
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
    textAlign: 'center',
  },
  progressBarContainer: {
    flexDirection: 'column',
    alignItems: 'left',
    marginBottom: 16,
  },
  progressBarText: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  progressBar: {
    height: 10,
    backgroundColor: '#4CAF50',
    borderRadius: 5,
    marginTop: 4,
    color: 'red',
  },
  progressText: {
    marginBottom: 8,
    fontSize: 14,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 16,
  },
  button2: {
    padding: '15px 30px 15px 30px',
    borderRadius: '10px',
    marginRight: '10px',
  },
  completionMessage: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default Survey;
