/* eslint-disable radix */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View, Text, StyleSheet, ScrollView} from 'react-native';
import {
  BackGroundImage,
  ContentWrapper,
  NoBackgroundImage,
  SuccessMessage,
} from '../components/primary';
import Entypo from 'react-native-vector-icons/Entypo';
import {image} from '../helpers/request';
import {useSelector, useDispatch} from 'react-redux';
import {DetailBtn, DetailSecondComponent} from '../components/Detail';
import {addOrRemoveToWatchList} from '../redux/actions/user';
const Detail = props => {
  const dispatch = useDispatch();
  const {details} = useSelector(state => state.discover);
  const {userDetails} = useSelector(state => state.user);
  const {userSession} = useSelector(state => state.auth);

  const getGenreList = details.genres?.map(e => e.name);
  const {name} = props.route.params;

  const [duration, setDuration] = React.useState();
  const [addToWatchList, setAddToWatchList] = React.useState(false);

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

  const handleAddToWatchList = () => {
    const addList = {
      media_type: name,
      media_id: details.id,
      watchlist: true,
    };
    dispatch(
      addOrRemoveToWatchList(userDetails.id, userSession.session_id, addList),
    ).then(() => {
      setAddToWatchList(true);
    });
  };

  React.useEffect(() => {
    if (addToWatchList) {
      setTimeout(() => {
        setAddToWatchList(false);
      }, 2000);
    }
  });

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
                justifyContent: 'space-between',
                flexDirection: 'row',
              }}>
              <ScrollView>
                <View style={{height: 40}}>
                  {addToWatchList && (
                    <SuccessMessage str="Added To Watchlist" />
                  )}
                </View>
                <Text style={styles.descriptionText}>
                  {details.title || details.original_name}
                </Text>
                <View>
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
                <DetailSecondComponent />
              </ScrollView>
              <DetailBtn details={details} func={handleAddToWatchList} />
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
    fontSize: 18,
  },
  secondaryText: {
    fontSize: 15,
    color: '#fff',
    fontFamily: 'Poppins-Light',
  },
});

export default Detail;
