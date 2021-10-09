/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View, Image} from 'react-native';
import {useDispatch} from 'react-redux';
import splashImg from '../assets/tmdb-logo1.png';
import {ContentWrapper} from './primary';
import {splashToggleDefault} from './../redux/actions/user';

const SplashScreen = () => {
  const dispatch = useDispatch();

  React.useEffect(() => {
    setTimeout(() => {
      dispatch(splashToggleDefault());
    }, 2000);
  }, []);

  return (
    <ContentWrapper
      content={
        <View style={{justifyContent: 'center', alignItems: 'center'}}>
          <Image source={splashImg} />
        </View>
      }
    />
  );
};

export default SplashScreen;
