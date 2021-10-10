/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {useDispatch} from 'react-redux';
import tmdbBg from '../assets/tmdb-logo.png';
import {ScreenWidth} from './../components/primary';
import {createGuestSession, createRequestToken} from './../redux/actions/auth';

const Welcome = ({navigation}) => {
  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(createGuestSession());
    dispatch(createRequestToken());
  }, []);

  return (
    <View style={styles.parent}>
      <View style={styles.bgWrapper}>
        <Image source={tmdbBg} />
      </View>
      <View>
        <TouchableOpacity
          onPress={() => navigation.navigate('home')}
          style={styles.primaryBtn}>
          <Text style={styles.primaryText}>Explore</Text>
        </TouchableOpacity>
        <View style={{padding: 10}} />
        <TouchableOpacity
          onPress={() => navigation.navigate('signIn')}
          style={styles.primaryBtn}>
          <Text style={styles.primaryText}>Sign In</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  parent: {
    backgroundColor: '#032541',
    padding: 50,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  bgWrapper: {
    height: '100%',
    flex: 1,
  },
  primaryBtn: {
    backgroundColor: '#fff',
    width: ScreenWidth / 1.2,
    borderRadius: 15,
    padding: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  primaryText: {
    fontFamily: 'Poppins-SemiBold',
    color: '#032541',
    fontSize: 18,
  },
});

export default Welcome;
