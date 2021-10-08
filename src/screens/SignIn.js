/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View, StyleSheet} from 'react-native';
import {TextInput} from 'react-native-gesture-handler';
import {useSelector, useDispatch} from 'react-redux';
import signinBg from '../assets/signin.jpg';
import {createSessionWithLogin} from './../redux/actions/auth';
import {
  AuthButton,
  BackGroundImage,
  ContentWrapper,
  ScreenWidth,
} from './../components/primary';

const Signin = ({navigation}) => {
  const dispatch = useDispatch();
  const {requestToken} = useSelector(state => state.auth);

  const [login, setLogin] = React.useState({
    username: '',
    password: '',
    request_token: requestToken.request_token,
  });

  const handleLogin = () => {
    dispatch(createSessionWithLogin(login));
    // .then(() => {
    navigation.navigate('home');
    // });
  };

  return (
    <View>
      <BackGroundImage src={signinBg} />
      <ContentWrapper
        content={
          <View style={{flex: 1}}>
            <View style={{flex: 1, justifyContent: 'center'}}>
              <TextInput
                value={login.username}
                onChangeText={val =>
                  setLogin({
                    ...login,
                    username: val,
                  })
                }
                style={styles.textInput}
                placeholder="Username"
                placeholderTextColor="#fff"
              />
              <View style={{padding: 15}} />
              <TextInput
                secureTextEntry={true}
                value={login.password}
                onChangeText={val =>
                  setLogin({
                    ...login,
                    password: val,
                  })
                }
                style={styles.textInput}
                placeholder="Password"
                placeholderTextColor="#fff"
              />
            </View>
            <AuthButton str="Sign In" func={handleLogin} />
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
    color: '#fff',
    fontSize: 18,
    borderRadius: 15,
    borderWidth: 2,
    borderColor: '#032541',
    padding: 15,
  },
});

export default Signin;
