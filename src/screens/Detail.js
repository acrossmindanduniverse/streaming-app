/* eslint-disable radix */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {
  BackGroundImage,
  ContentWrapper,
  NoBackgroundImage,
} from '../components/primary';
import Entypo from 'react-native-vector-icons/Entypo';
import {image} from '../helpers/request';
import {useSelector, useDispatch} from 'react-redux';
import {getGenres} from './../redux/actions/discover';
import DetailBtn from '../components/Detail';

const Detail = props => {
  const dispatch = useDispatch();
  const {details, genres} = useSelector(state => state.discover);

  const getGenreList = details.genres?.map(e => e.name);
  const {name} = props.route.params;
  const [duration, setDuration] = React.useState();

  const splitDuration = details.runtime?.toString().split('');

  React.useEffect(() => {
    for (let i = 0; i < splitDuration?.length; i++) {
      if (
        (details.runtime - splitDuration[splitDuration.length - 1]) / 60 >=
        1
      ) {
        if (
          ((details.runtime - splitDuration[splitDuration.length - 1]) / 60) %
            2 ===
          0
        ) {
          setDuration(
            splitDuration.length >= 2
              ? `${Math.round(
                  (details.runtime - splitDuration[splitDuration?.length - 1]) /
                    60,
                )}h ${splitDuration[splitDuration.length - 1]}m`
              : details.runtime
              ? `${details.runtime}m`
              : 'no runtime information',
          );
        } else {
          const localSplit = `${Math.floor(
            (details.runtime - splitDuration[splitDuration?.length - 1]) / 60,
          )}h ${details.runtime - 60}m`;
          setDuration(localSplit);
        }
      } else {
        setDuration(
          details.runtime ? `${details.runtime}m` : 'no runtime information',
        );
      }
    }
  }, [details.runtime, splitDuration, duration]);

  console.log(duration);

  React.useEffect(() => {
    dispatch(getGenres(name));
  }, []);

  // React.useEffect(() => {
  //   route.params.setGetId(0);
  // }, []);

  return (
    getGenreList !== undefined && (
      <View>
        {details.poster_path !== null ? (
          <BackGroundImage src={{uri: `${image}/${details.poster_path}`}} />
        ) : (
          <NoBackgroundImage />
        )}
        <ContentWrapper
          content={
            <View
              style={{
                flex: 1,
                justifyContent: 'space-between',
                flexDirection: 'row',
                paddingHorizontal: 25,
              }}>
              <View>
                <Text style={styles.descriptionText}>
                  {details.title || details.original_name}
                </Text>
                <View
                  style={{
                    paddingVertical: 20,
                  }}>
                  <Entypo name="tv" size={25} color="#fff" />
                  <View style={{padding: 10}} />
                  <Text style={styles.secondaryText}>
                    {getGenreList.join(', ')}
                  </Text>
                  <Text style={styles.secondaryText}>
                    {duration ||
                      (details.last_episode_to_air?.episode_number > 1
                        ? `${details.last_episode_to_air?.episode_number} episodes`
                        : `${details.last_episode_to_air?.episode_number} episode`)}
                  </Text>
                </View>
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
                    {details.overview !== '' ? (
                      <Text style={styles.primaryText}>{details.overview}</Text>
                    ) : (
                      <Text style={styles.primaryText}>
                        This {name === 'movie' ? 'movie' : 'show'} doesn't have
                        an overview, yet
                      </Text>
                    )}
                  </View>
                </View>
              </View>
              <DetailBtn details={details} />
            </View>
          }
        />
      </View>
    )
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
  secondaryText: {
    fontSize: 15,
    color: '#fff',
    fontFamily: 'Poppins-Light',
  },
});

export default Detail;
