/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import Fontisto from 'react-native-vector-icons/Fontisto';
import {useSelector} from 'react-redux';

export const DetailBtn = ({details, func}) => {
  return (
    <View
      style={{
        alignItems: 'flex-end',
      }}>
      <View style={{paddingVertical: 20}}>
        <TouchableOpacity style={styles.primaryWrapper}>
          <Icon name="bars" size={25} style={styles.secondaryIcon} />
        </TouchableOpacity>
        <View style={{padding: 20}} />
        <TouchableOpacity style={styles.primaryWrapper}>
          <Icon name="heart" size={20} style={styles.secondaryIcon} />
        </TouchableOpacity>
        <View style={{padding: 20}} />
        <TouchableOpacity onPress={func} style={styles.primaryWrapper}>
          <Fontisto name="favorite" size={20} style={styles.secondaryIcon} />
        </TouchableOpacity>
        <View style={{padding: 20}} />
        <TouchableOpacity style={styles.primaryWrapper}>
          <Icon name="staro" size={20} style={styles.secondaryIcon} />
        </TouchableOpacity>
      </View>
      <View style={{paddingVertical: 20}}>
        <View style={styles.primaryWrapper}>
          <Text style={styles.primaryText}>
            {(details.vote_average + '').replace('.', '')}%
          </Text>
        </View>
        <View style={{justifyContent: 'center', alignItems: 'center'}}>
          <Text style={styles.primaryText}>User</Text>
          <Text style={styles.primaryText}>Score</Text>
        </View>
      </View>
    </View>
  );
};

export const DetailSecondComponent = ({name}) => {
  const {details} = useSelector(state => state.discover);
  return (
    <View style={{paddingRight: 50}}>
      <Text
        style={{
          fontFamily: 'Poppins-Light',
          fontSize: 23,
          marginVertical: 10,
          color: 'rgb(224, 224, 224)',
        }}>
        {details.tagline}
      </Text>
      <View style={{paddingTop: 10}}>
        <Text
          style={{
            fontFamily: 'Poppins-SemiBold',
            fontSize: 23,
            color: '#fff',
            marginBottom: 5,
          }}>
          Overview
        </Text>
        {details.overview !== '' ? (
          <Text style={styles.primaryText}>{details.overview}</Text>
        ) : (
          <Text style={styles.primaryText}>
            This {name === 'movie' ? 'movie' : 'show'} doesn't have an overview,
            yet
          </Text>
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  primaryText: {
    fontFamily: 'Poppins-Light',
    color: '#fff',
    fontSize: 15,
    textAlign: 'justify',
  },
  secondaryIcon: {
    color: '#fff',
  },
  primaryWrapper: {
    justifyContent: 'center',
    backgroundColor: '#032541',
    alignItems: 'center',
    width: 40,
    height: 40,
    borderRadius: 40 / 2,
  },
});
