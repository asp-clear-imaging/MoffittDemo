import React from 'react';
import {StyleSheet, View} from 'react-native';
import SurveyMain from './src/SurveyMain';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Survey from './src/Survey';

const Stack = createNativeStackNavigator();
const App = () => {
  return (
    <View style={styles.container}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Main" component={SurveyMain} />
          <Stack.Screen name="Survey" component={Survey} />
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
