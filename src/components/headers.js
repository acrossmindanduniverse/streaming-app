/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {ScreenWidth} from './primary';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {useSelector} from 'react-redux';

export const GoBack = ({navigation}) => {
  return (
    <View style={{padding: 20}}>
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <Ionicons name="chevron-back" size={30} color="#fff" />
      </TouchableOpacity>
    </View>
  );
};

export const HomeHeader = ({screen, setScreen}) => {
  return (
    <View
      style={{
        paddingBottom: 50,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <View
        style={{
          justifyContent: 'center',
          alignItems: 'center',
          paddingBottom: 10,
        }}>
        <Text style={styles.primaryText}>What's Popular</Text>
      </View>
      <View style={styles.homeNavigation}>
        <TouchableOpacity
          onPress={() => setScreen('movie')}
          style={
            screen === 'movie'
              ? styles.btnNavigationActive
              : styles.btnNavigation
          }>
          <Text
            style={
              screen === 'movie' ? styles.primaryTextActive : styles.primaryText
            }>
            Streaming
          </Text>
        </TouchableOpacity>
        <View style={{padding: 10, paddingHorizontal: 30}} />
        <TouchableOpacity
          onPress={() => setScreen('tv')}
          style={
            screen === 'tv' ? styles.btnNavigationActive : styles.btnNavigation
          }>
          <Text
            style={
              screen === 'tv' ? styles.primaryTextActive : styles.primaryText
            }>
            On TV
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export const HomeInfo = ({func}) => {
  const {loginSession} = useSelector(state => state.auth);
  return loginSession.request_token !== undefined ? (
    <View style={{alignItems: 'flex-end'}}>
      <TouchableOpacity onPress={func} style={styles.profileBtn}>
        <Ionicons name="person" size={25} color="#fff" />
      </TouchableOpacity>
    </View>
  ) : (
    <View style={{alignItems: 'flex-end'}}>
      <TouchableOpacity onPress={func} style={styles.signInBtn}>
        <Text style={styles.primaryText}>Sign In</Text>
      </TouchableOpacity>
    </View>
  );
};

export const Watchlist = ({name, setName, setDeleteName}) => {
  return (
    <View
      style={{
        padding: 50,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <View
        style={{
          justifyContent: 'center',
          alignItems: 'center',
          paddingBottom: 10,
        }}
      />
      <Text style={styles.watchListText}>Watch List</Text>
      <View style={styles.listNavigation}>
        <TouchableOpacity
          onPress={() => {
            setName('movies');
            setDeleteName('movie');
          }}
          style={
            name === 'movies'
              ? styles.btnListNavigationActive
              : styles.btnListNavigation
          }>
          <Text style={styles.primaryText}>Movies</Text>
        </TouchableOpacity>
        <View style={{padding: 10, paddingHorizontal: 30}} />
        <TouchableOpacity
          onPress={() => {
            setName('tv');
            setDeleteName('tv');
          }}
          style={
            name === 'tv'
              ? styles.btnListNavigationActive
              : styles.btnListNavigation
          }>
          <Text style={styles.primaryText}>TV</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export const HomeHeader2nd = ({screen, setScreen}) => {
  return (
    <View
      style={{
        paddingBottom: 50,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <View
        style={{
          justifyContent: 'center',
          alignItems: 'center',
          paddingBottom: 10,
        }}>
        <Text style={styles.primaryText}>Free To Watch</Text>
      </View>
      <View style={styles.homeNavigation}>
        <TouchableOpacity
          onPress={() => setScreen('movie')}
          style={
            screen === 'movie'
              ? styles.btnNavigationActive
              : styles.btnNavigation
          }>
          <Text
            style={
              screen === 'movie' ? styles.primaryTextActive : styles.primaryText
            }>
            Movie
          </Text>
        </TouchableOpacity>
        <View style={{padding: 10, paddingHorizontal: 30}} />
        <TouchableOpacity
          onPress={() => setScreen('tv')}
          style={
            screen === 'tv' ? styles.btnNavigationActive : styles.btnNavigation
          }>
          <Text
            style={
              screen === 'tv' ? styles.primaryTextActive : styles.primaryText
            }>
            TV
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  homeNavigation: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 15,
    width: ScreenWidth / 1.5,
    borderRadius: 25,
    borderWidth: 2,
    borderColor: '#032541',
  },
  watchListText: {
    fontSize: 30,
    paddingTop: 15,
    fontFamily: 'Poppins-SemiBold',
    color: '#fff',
  },
  btnNavigation: {
    justifyContent: 'center',
    alignItems: 'center',
    width: ScreenWidth / 4,
    borderRadius: 15,
    borderColor: '#fff',
    borderWidth: 1,
  },
  btnNavigationActive: {
    justifyContent: 'center',
    alignItems: 'center',
    width: ScreenWidth / 4,
    borderRadius: 15,
    borderColor: '#fff',
    backgroundColor: '#fff',
    borderWidth: 1,
  },
  listNavigation: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 15,
    width: ScreenWidth / 1.5,
  },
  btnListNavigation: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 150,
    padding: 15,
  },
  primaryText: {
    fontFamily: 'Poppins-SemiBold',
    color: '#fff',
    fontSize: 23,
  },
  primaryTextActive: {
    fontFamily: 'Poppins-SemiBold',
    color: '#032541',
    fontSize: 23,
  },
  profileBtn: {
    justifyContent: 'center',
    position: 'absolute',
    alignItems: 'center',
    width: 40,
    height: 40,
    zIndex: 1,
    borderRadius: 40 / 2,
    backgroundColor: '#032541',
  },
  signInBtn: {
    justifyContent: 'center',
    position: 'absolute',
    alignItems: 'center',
    padding: 15,
    borderRadius: 15,
    backgroundColor: '#032541',
    zIndex: 1,
  },
  btnListNavigationActive: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 150,
    borderRadius: 15,
    backgroundColor: '#032541',
    padding: 15,
  },
});
