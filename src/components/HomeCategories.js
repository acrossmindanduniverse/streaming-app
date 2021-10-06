/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View, FlatList, Image, Text} from 'react-native';
import tmdbBg from '../../src/assets/tmdb-logo.png';
import {TouchableOpacity} from 'react-native-gesture-handler';

export const Streaming = ({navigation, func}) => {
  return (
    <View>
      <FlatList
        horizontal={true}
        keyExtractor={item => String(item)}
        data={[1, 2, 3, 4, 5]}
        renderItem={({data}) => (
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

export const Movies = ({navigation}) => {
  return (
    <View>
      <FlatList
        horizontal={true}
        keyExtractor={item => String(item)}
        data={[1, 2, 3, 4, 5]}
        renderItem={({data}) => (
          <TouchableOpacity
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
