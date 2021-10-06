/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {ScreenWidth} from './primary';
import Ionicons from 'react-native-vector-icons/Ionicons';

export const GoBack = ({navigation}) => {
  return (
    <View style={{padding: 20}}>
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <Ionicons name="chevron-back" size={30} color="#fff" />
      </TouchableOpacity>
    </View>
  );
};

export const HomeHeader = () => {
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
        <TouchableOpacity style={styles.btnNavigation}>
          <Text style={styles.primaryText}>Streaming</Text>
        </TouchableOpacity>
        <View style={{padding: 10, paddingHorizontal: 30}} />
        <TouchableOpacity style={styles.btnNavigation}>
          <Text style={styles.primaryText}>On TV</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
export const HomeInfo = ({func}) => {
  return (
    <View style={{alignItems: 'flex-end'}}>
      <TouchableOpacity onPress={func} style={styles.profileBtn}>
        <Ionicons name="person" size={25} color="#fff" />
      </TouchableOpacity>
    </View>
  );
};

export const WatchList = () => {
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
        <TouchableOpacity style={styles.btnListNavigation}>
          <Text style={styles.primaryText}>Movies</Text>
        </TouchableOpacity>
        <View style={{padding: 10, paddingHorizontal: 30}} />
        <TouchableOpacity style={styles.btnListNavigation}>
          <Text style={styles.primaryText}>TV</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export const HomeHeader2nd = () => {
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
        }}>
        <Text style={styles.primaryText}>Free To Watch</Text>
      </View>
      <View style={styles.homeNavigation}>
        <TouchableOpacity style={styles.btnNavigation}>
          <Text style={styles.primaryText}>Movies</Text>
        </TouchableOpacity>
        <View style={{padding: 10, paddingHorizontal: 30}} />
        <TouchableOpacity style={styles.btnNavigation}>
          <Text style={styles.primaryText}>TV</Text>
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
    width: ScreenWidth / 4,
    borderRadius: 15,
  },
  primaryText: {
    fontFamily: 'Poppins-SemiBold',
    color: '#fff',
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
});
