/* eslint-disable radix */
/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  Image,
  TouchableOpacity,
} from 'react-native';
import {useSelector} from 'react-redux';
import {image} from '../helpers/request';
import {arrMonth} from './primary';

const WatchlistSecondComponent = ({showModal}) => {
  const {watchlist} = useSelector(state => state.user);

  return (
    <FlatList
      keyExtractor={item => String(item)}
      data={watchlist.results}
      renderItem={({item}) => (
        <View style={{paddingVertical: 20}}>
          <View style={styles.listContent}>
            <View style={{flexDirection: 'row'}}>
              <Image
                resizeMode="contain"
                source={{uri: `${image}${item.poster_path}`}}
                style={{width: 150, height: 150, borderRadius: 15}}
              />
              <View style={styles.percentage}>
                <Text style={styles.percentageText}>
                  {(item.vote_average + '').replace('.', '')}%
                </Text>
              </View>
            </View>
            <View>
              <View>
                <Text style={styles.primaryText}>
                  {item.title || item.original_name}
                </Text>
                <Text style={styles.primaryText}>{`${
                  arrMonth[
                    parseInt(
                      (item.release_date || item.first_air_date).split('-')[1],
                    )
                  ]
                } ${
                  (item.release_date || item.first_air_date).split('-')[2]
                }, ${
                  (item.release_date || item.first_air_date).split('-')[0]
                }`}</Text>
              </View>
              <View style={styles.detailWrapper}>
                <TouchableOpacity
                  onPress={() => {
                    showModal(
                      true,
                      item.overview === '' ? 'no overview, yet' : item.overview,
                      item.id,
                    );
                  }}>
                  <Text style={styles.detailText}>Detail</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>
      )}
    />
  );
};

const styles = StyleSheet.create({
  listContent: {
    backgroundColor: '#d4d4d4',
    borderRadius: 10,
    padding: 10,
  },
  percentage: {
    marginHorizontal: 15,
    width: 40,
    height: 40,
    borderRadius: 40 / 2,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#032541',
  },
  percentageText: {
    fontSize: 15,
    fontFamily: 'Poppins-SemiBold',
    color: '#fff',
  },
  detailWrapper: {
    alignItems: 'flex-end',
  },
  detailText: {
    fontFamily: 'Poppins-Bold',
    fontSize: 18,
    color: '#fff',
  },
  primaryText: {
    fontSize: 15,
    fontFamily: 'Poppins-Light',
    color: '#fff',
  },
});

export default WatchlistSecondComponent;
