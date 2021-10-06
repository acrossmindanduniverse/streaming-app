/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View, Image, StyleSheet} from 'react-native';
import {TextInput} from 'react-native-gesture-handler';
import signinBg from '../assets/signin.jpg';
import {
  AuthButton,
  BackGroundImage,
  ContentWrapper,
  ScreenWidth,
} from './../components/primary';

const Signin = ({navigation}) => {
  return (
    <View>
      <BackGroundImage src={signinBg} />
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
            </View>
            <AuthButton
              str="Sign In"
              func={() => navigation.navigate('home')}
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

export default Signin;
