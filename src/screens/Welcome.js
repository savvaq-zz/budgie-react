import React from 'react';
import {StyleSheet, Image, View} from 'react-native';
import {Button} from '../components/UI/Button';
import parrotImg from '../assets/images/parrot.png';

export const Welcome = ({navigation}) => {
  const handleLoginClick = () => {
    navigation.navigate('Login');
  };

  const handleSignupClick = () => {
    navigation.navigate('Register');
  };

  return (
    <View style={styles.container}>
      <View style={styles.subContainer}>
        <View style={styles.imageContainer}>
          <Image source={parrotImg} />
        </View>

        <View style={styles.buttonsContainer}>
          <Button onClick={handleLoginClick} style={styles.loginButton}>
            Log In
          </Button>

          <Button onClick={handleSignupClick} outline>
            Sign Up
          </Button>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
  subContainer: {
    width: '80%',
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  imageContainer: {
    height: '50%',
    justifyContent: 'flex-end',
  },
  buttonsContainer: {
    height: '50%',
    width: '100%',
    justifyContent: 'flex-end',
  },
  loginButton: {
    marginBottom: 36,
  },
});
