/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import Fontisto from 'react-native-vector-icons/Fontisto';

const DetailBtn = ({details}) => {
  return (
    <View
      style={{
        alignItems: 'flex-end',
      }}>
      <View style={{paddingVertical: 30}}>
        <TouchableOpacity style={styles.primaryWrapper}>
          <Icon name="bars" size={25} style={styles.secondaryIcon} />
        </TouchableOpacity>
        <View style={{padding: 20}} />
        <TouchableOpacity style={styles.primaryWrapper}>
          <Icon name="heart" size={25} style={styles.secondaryIcon} />
        </TouchableOpacity>
        <View style={{padding: 20}} />
        <TouchableOpacity style={styles.primaryWrapper}>
          <Fontisto name="favorite" size={25} style={styles.secondaryIcon} />
        </TouchableOpacity>
        <View style={{padding: 20}} />
        <TouchableOpacity style={styles.primaryWrapper}>
          <Icon name="staro" size={25} style={styles.secondaryIcon} />
        </TouchableOpacity>
      </View>
      <View style={{paddingVertical: 25}}>
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

const styles = StyleSheet.create({
  primaryText: {
    fontFamily: 'Poppins-Light',
    color: '#fff',
    fontSize: 18,
    textAlign: 'justify',
  },
  secondaryIcon: {
    color: '#fff',
  },
  primaryWrapper: {
    justifyContent: 'center',
    backgroundColor: '#032541',
    alignItems: 'center',
    width: 50,
    height: 50,
    borderRadius: 50 / 2,
  },
});

export default DetailBtn;
