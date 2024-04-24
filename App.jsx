import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import {StyleSheet, View} from 'react-native';
import HomeScreen from './src/HomeScreen';
import Survey from './src/Survey';
import SurveyMain from './src/SurveyMain';
import NotifOptions from './src/NotifOptions';
import PlayerComponent from './src/components/Player';

const Stack = createNativeStackNavigator();
const App = () => {
  return (
    <View style={styles.container}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="home" component={HomeScreen} />
          <Stack.Screen name="surveyOptions" component={SurveyMain} />
          <Stack.Screen name="survey" component={Survey} />
          <Stack.Screen name="notifOptions" component={NotifOptions} />
          <Stack.Screen name="ec" component={PlayerComponent} />
        </Stack.Navigator>
      </NavigationContainer>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
