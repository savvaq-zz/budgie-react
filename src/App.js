import React from 'react';
import {DefaultTheme, NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  useColorScheme,
} from 'react-native';
import {Welcome} from './screens/Welcome';
import {Login} from './screens/Login';
import {Register} from './screens/Register';

const Stack = createStackNavigator();

const App: () => Node = () => {
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <SafeAreaView style={styles.backgroundStyle}>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <NavigationContainer theme={BudgieTheme}>
        <ScrollView
          contentInsetAdjustmentBehavior="automatic"
          contentContainerStyle={styles.backgroundStyle}>
          <Stack.Navigator>
            <Stack.Screen
              name="Welcome"
              component={Welcome}
              options={{
                title: '',
                headerStyle: {
                  backgroundColor: '#FFFFFF',
                },
              }}
            />

            <Stack.Screen
              name="Login"
              component={Login}
              options={{
                title: '',
                headerStyle: {
                  backgroundColor: '#FFFFFF',
                },
              }}
            />

            <Stack.Screen
              name="Register"
              component={Register}
              options={{
                title: '',
                headerStyle: {
                  backgroundColor: '#FFFFFF',
                },
              }}
            />
          </Stack.Navigator>
        </ScrollView>
      </NavigationContainer>
    </SafeAreaView>
  );
};

const BudgieTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: '#FFFFFF',
    border: '#FFFFFF',
  },
};

const styles = StyleSheet.create({
  backgroundStyle: {
    flex: 1,
    flexGrow: 1,
  },
});

export default App;
