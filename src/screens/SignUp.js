/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View, Image, TextInput, StyleSheet} from 'react-native';
import signupBg from '../assets/signup.jpg';
import {
  AuthButton,
  BackGroundImage,
  ContentWrapper,
  ScreenWidth,
} from '../components/primary';

const SignUp = ({navigation}) => {
  return (
    <View>
      <BackGroundImage src={signupBg} />
      <ContentWrapper
        content={
          <View style={{flex: 1}}>
            <View style={{flex: 1, justifyContent: 'center'}}>
              <TextInput
                style={styles.textInput}
                placeholder="Username"
                placeholderTextColor="#fff"
              />
              <View style={{padding: 15}} />
              <TextInput
                style={styles.textInput}
                placeholder="Password"
                placeholderTextColor="#fff"
              />
              <View style={{padding: 15}} />
              <TextInput
                style={styles.textInput}
                placeholder="Password Confirm"
                placeholderTextColor="#fff"
              />
              <View style={{padding: 15}} />
              <TextInput
                style={styles.textInput}
                placeholder="Email Address"
                placeholderTextColor="#fff"
              />
            </View>
            <AuthButton
              str="Sign Up"
              func={() => navigation.navigate('signIn')}
            />
          </View>
        }
      />
    </View>
  );
};

const styles = StyleSheet.create({
  textInput: {
    width: ScreenWidth / 1.2,
    fontFamily: 'Poppins-Light',
    fontSize: 18,
    borderRadius: 15,
    borderWidth: 2,
    borderColor: '#032541',
    padding: 15,
  },
});

export default SignUp;
