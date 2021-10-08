/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable radix */
/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View, FlatList, Image, Text, StyleSheet} from 'react-native';
import tmdbBg from '../../src/assets/tmdb-logo.png';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {useSelector, useDispatch} from 'react-redux';
import {image} from '../helpers/request';
import {getMovieDetails} from '../redux/actions/discover';

const arrMonth = [
  'Jan',
  'Feb',
  'Mar',
  'Apr',
  'May',
  'Jun',
  'Jul',
  'Aug',
  'Sep',
  'Oct',
  'Nov',
  'Dec',
];

export const Streaming = ({func}) => {
  const dispatch = useDispatch();
  const {movies} = useSelector(state => state.discover);
  const [getId, setGetId] = React.useState(0);

  React.useEffect(() => {
    if (getId) {
      dispatch(getMovieDetails(getId));
    }
  }, [getId]);

  return (
    <View>
      <FlatList
        keyExtractor={index => String(index)}
        horizontal={true}
        data={movies.results}
        renderItem={({item}) => (
          <TouchableOpacity
            onPress={() => {
              func();
              setGetId(item.id);
            }}
            style={{
              marginHorizontal: 20,
              padding: 30,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <View>
              {console.log(item.id, 'id')}
              <Image
                source={{uri: `${image}/${item.backdrop_path}`}}
                style={{
                  borderRadius: 15,
                  width: 350,
                  height: 350,
                }}
                resizeMode="contain"
              />
            </View>
            <Text style={styles.primaryText}>{item.title}</Text>
            <Text style={styles.primaryText}>
              {`${arrMonth[parseInt(item.release_date.split('-')[1])]} ${
                item.release_date.split('-')[2]
              }, ${item.release_date.split('-')[0]}`}
            </Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

export const Movies = ({func}) => {
  return (
    <View>
      <FlatList
        keyExtractor={item => String(item)}
        horizontal={true}
        data={[1, 2, 3, 4, 5]}
        renderItem={({item}) => (
          <TouchableOpacity
            onPress={func}
            style={{
              backgroundColor: 'grey',
              marginHorizontal: 20,
              padding: 50,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <View>
              <Image
                source={tmdbBg}
                style={{
                  borderRadius: 15,
                  width: 200,
                }}
                resizeMode="contain"
              />
            </View>
            <Text>123123</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  primaryText: {
    fontFamily: 'Poppins-Light',
    fontSize: 20,
    color: '#fff',
  },
});
