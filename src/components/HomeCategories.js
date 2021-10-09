/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable radix */
/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View, FlatList, Image, Text, StyleSheet} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {useSelector, useDispatch} from 'react-redux';
import {image} from '../helpers/request';
import {getDetails} from '../redux/actions/discover';
import {arrMonth, NoBackDrop} from './primary';

export const Popular = ({name, func}) => {
  const {popularProducts} = useSelector(state => state.discover);
  const dispatch = useDispatch();
  const [getId, setGetId] = React.useState(0);

  React.useEffect(() => {
    if (getId) {
      dispatch(getDetails(name, getId));
    }
  }, [getId]);

  return (
    <View>
      <FlatList
        keyExtractor={keyItem => String(keyItem)}
        horizontal={true}
        data={popularProducts.results}
        renderItem={({item}) => (
          <TouchableOpacity
            onPress={() => {
              func({
                name: name,
              });
              setGetId(item.id);
            }}
            style={{
              marginHorizontal: 20,
              padding: 30,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <View>
              {item.backdrop_path !== null ? (
                <Image
                  source={{uri: `${image}/${item.backdrop_path}`}}
                  style={{
                    borderRadius: 15,
                    width: 250,
                    height: 250,
                  }}
                  resizeMode="contain"
                />
              ) : (
                <NoBackDrop />
              )}
            </View>
            <Text style={styles.primaryText}>{item.title || item.name}</Text>
            <Text style={styles.primaryText}>
              {`${
                arrMonth[
                  parseInt(
                    (item.release_date || item.first_air_date).split('-')[1],
                  )
                ]
              } ${(item.release_date || item.first_air_date).split('-')[2]}, ${
                (item.release_date || item.first_air_date).split('-')[0]
              }`}
            </Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

export const FreeToWatch = ({name, func}) => {
  const {products} = useSelector(state => state.discover);
  const dispatch = useDispatch();
  const [getId, setGetId] = React.useState(0);

  React.useEffect(() => {
    if (getId) {
      dispatch(getDetails(name, getId));
    }
  }, [getId]);

  return (
    <View>
      <FlatList
        keyExtractor={keyItem2nd => String(keyItem2nd)}
        horizontal={true}
        data={products.results}
        renderItem={({item}) => (
          <TouchableOpacity
            onPress={() => {
              func({
                name: name,
              });
              setGetId(item.id);
            }}
            style={{
              height: 450,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <View style={{flex: 1}}>
              {item.backdrop_path !== null ? (
                <Image
                  source={{uri: `${image}/${item.backdrop_path}`}}
                  style={{
                    borderRadius: 15,
                    width: 250,
                    height: 250,
                  }}
                  resizeMode="contain"
                />
              ) : (
                <NoBackDrop />
              )}
            </View>
            <View
              style={{
                // flex: 1,
                height: 120,
                width: 350,
              }}>
              <Text style={styles.primaryText}>{item.title || item.name}</Text>
              {(item.release_date || item.first_air_date) !== undefined ? (
                <Text style={styles.primaryText}>
                  {`${
                    arrMonth[
                      parseInt(
                        (item.release_date || item.first_air_date).split(
                          '-',
                        )[1],
                      ) + 1
                    ]
                  } ${
                    (item.release_date || item.first_air_date).split('-')[2]
                  }, ${
                    (item.release_date || item.first_air_date).split('-')[0]
                  }`}
                </Text>
              ) : (
                <Text style={{padding: 5}} />
              )}
            </View>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  primaryText: {
    fontFamily: 'Poppins-Light',
    textAlign: 'center',
    fontSize: 20,
    color: '#fff',
  },
});
