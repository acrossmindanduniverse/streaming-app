/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View, StyleSheet, ScrollView} from 'react-native';
import {Movies, Streaming} from '../components/HomeCategories';
import {HomeHeader, HomeHeader2nd, HomeInfo} from '../components/headers';
import {useDispatch} from 'react-redux';
import {getMovies} from '../redux/actions/discover';

const Home = ({navigation}) => {
  const dispatch = useDispatch();

  const [page, setPage] = React.useState(1);

  React.useEffect(() => {
    dispatch(getMovies(page));
  }, [page]);

  return (
    <View style={{flex: 1, padding: 50, backgroundColor: '#001'}}>
      <HomeInfo func={() => navigation.navigate('profile')} />
      <ScrollView>
        <HomeHeader />
        <Streaming func={() => navigation.navigate('detail')} />
        <HomeHeader2nd />
        <Movies />
      </ScrollView>
    </View>
  );
};

export default Home;
