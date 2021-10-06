/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View, StyleSheet, ScrollView} from 'react-native';
import {Movies, Streaming} from '../components/HomeCategories';
import {HomeHeader, HomeHeader2nd, HomeInfo} from '../components/headers';

const Home = ({navigation}) => {
  return (
    <View style={{flex: 1, padding: 50, backgroundColor: '#001'}}>
      <HomeInfo func={() => navigation.navigate('profile')} />
      <ScrollView>
        <HomeHeader />
        <Streaming func={() => navigation.navigate('detail')} />
        <HomeHeader2nd />
        <Movies />
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  movieImgWrapper: {
    // padding: 20,
    // backgroundColor: '#000',
    // flexDirection: 'row',
    // width: ScreenWidth / 2,
    borderRadius: 15,
  },
});

export default Home;
