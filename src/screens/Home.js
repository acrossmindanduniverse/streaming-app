/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View, ScrollView} from 'react-native';
import {FreeToWatch, Popular} from '../components/HomeCategories';
import {HomeHeader, HomeHeader2nd, HomeInfo} from '../components/headers';
import {useDispatch, useSelector} from 'react-redux';
import {createSessionWithAccessToken} from '../redux/actions/auth';
import {getPopularProducts, getProducts} from './../redux/actions/discover';

import {ACCESS_TOKEN} from '@env';

const Home = ({navigation}) => {
  const dispatch = useDispatch();

  const [popularPage, setPopularPage] = React.useState(1);
  const {loginSession} = useSelector(state => state.auth);
  const [page, setPage] = React.useState(1);
  const [popularScreen, setPopularScreen] = React.useState('movie');
  const [screen, setScreen] = React.useState('movie');

  React.useEffect(() => {
    if (loginSession.request_token !== undefined) {
      dispatch(
        createSessionWithAccessToken(ACCESS_TOKEN, {
          request_token: loginSession.request_token,
        }),
      );
    }
  }, []);

  const handleConditionalProfileScreen = () => {
    if (loginSession.request_token !== undefined) {
      navigation.navigate('profile');
    } else {
      navigation.navigate('signIn');
    }
  };

  const handleConditionalDetailScreen = (navigate, obj) => {
    if (loginSession.request_token !== undefined) {
      navigation.navigate(navigate, obj);
    } else {
      navigation.navigate('signIn');
    }
  };

  React.useEffect(() => {
    dispatch(getPopularProducts(popularScreen, popularPage));
  }, [popularScreen, popularPage]);

  React.useEffect(() => {
    dispatch(getProducts(screen, page));
  }, [screen, page]);

  return (
    <View style={{flex: 1, padding: 30, backgroundColor: '#001'}}>
      <HomeInfo func={handleConditionalProfileScreen} />
      <ScrollView>
        <HomeHeader screen={popularScreen} setScreen={setPopularScreen} />
        <Popular
          func={data => handleConditionalDetailScreen('detail', data)}
          name={popularScreen}
        />
        <HomeHeader2nd screen={screen} setScreen={setScreen} />
        <FreeToWatch
          func={data => handleConditionalDetailScreen('detail', data)}
          name={screen}
        />
      </ScrollView>
    </View>
  );
};

export default Home;
