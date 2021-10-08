/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {BackGroundImage, ContentWrapper} from '../components/primary';
import Icon from 'react-native-vector-icons/AntDesign';
import Entypo from 'react-native-vector-icons/Entypo';
import Fontisto from 'react-native-vector-icons/Fontisto';
import {image} from '../helpers/request';
import {useSelector} from 'react-redux';

const Detail = () => {
  const {moviePopularDetails} = useSelector(state => state.discover);
  const getGenres = moviePopularDetails.genres.map(e => e.name);
  return (
    <View>
      <BackGroundImage
        src={{uri: `${image}/${moviePopularDetails.poster_path}`}}
      />
      <ContentWrapper
        content={
          <View style={{flex: 1, flexDirection: 'row', paddingHorizontal: 25}}>
            <View>
              <Text style={styles.descriptionText}>
                {moviePopularDetails.title}
              </Text>
              <View style={{flexDirection: 'row', paddingVertical: 20}}>
                <Entypo name="tv" size={25} color="#fff" />
                <View style={{padding: 10}} />
                <Text style={styles.secondaryText}>{getGenres.join(', ')}</Text>
                <View
                  style={{
                    padingHorizontal: 10,
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}>
                  <Entypo name="dot-single" size={15} color="#fff" />
                </View>
                <Text style={styles.secondaryText}>1h</Text>
              </View>
              <View>
                <Text
                  style={{
                    fontFamily: 'Poppins-Light',
                    fontSize: 23,
                    marginVertical: 10,
                    color: 'rgb(224, 224, 224)',
                  }}>
                  {moviePopularDetails.tagline}
                </Text>
                <View style={{paddingTop: 50}}>
                  <Text
                    style={{
                      fontFamily: 'Poppins-SemiBold',
                      fontSize: 23,
                      color: '#fff',
                      marginBottom: 5,
                    }}>
                    Overview
                  </Text>
                  <Text style={styles.primaryText}>
                    {moviePopularDetails.overview}
                  </Text>
                </View>
              </View>
            </View>
            <View
              style={{
                paddingHorizontal: 20,
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
                  <Fontisto
                    name="favorite"
                    size={25}
                    style={styles.secondaryIcon}
                  />
                </TouchableOpacity>
                <View style={{padding: 20}} />
                <TouchableOpacity style={styles.primaryWrapper}>
                  <Icon name="staro" size={25} style={styles.secondaryIcon} />
                </TouchableOpacity>
              </View>
              <View style={{paddingVertical: 25}}>
                <View style={styles.primaryWrapper}>
                  <Text style={styles.primaryText}>
                    {(moviePopularDetails.vote_average + '').replace('.', '')}%
                  </Text>
                </View>
                <View style={{justifyContent: 'center', alignItems: 'center'}}>
                  <Text style={styles.primaryText}>User</Text>
                  <Text style={styles.primaryText}>Score</Text>
                </View>
              </View>
            </View>
          </View>
        }
      />
    </View>
  );
};

const styles = StyleSheet.create({
  descriptionText: {
    color: '#fff',
    fontFamily: 'Poppins-SemiBold',
    fontSize: 30,
  },
  primaryText: {
    fontFamily: 'Poppins-Light',
    color: '#fff',
    fontSize: 18,
    textAlign: 'justify',
  },
  secondaryIcon: {
    color: '#fff',
  },
  secondaryText: {
    fontSize: 15,
    color: '#fff',
    fontFamily: 'Poppins-Light',
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

export default Detail;
