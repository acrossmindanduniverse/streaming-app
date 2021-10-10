/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View, ScrollView} from 'react-native';
import {FreeToWatch, Popular} from '../components/HomeCategories';
import {HomeHeader, HomeHeader2nd, HomeInfo} from '../components/headers';
import {useDispatch, useSelector} from 'react-redux';
import {createUserSession} from '../redux/actions/auth';
import {getPopularProducts, getProducts} from './../redux/actions/discover';
import {getUserDetails} from '../redux/actions/user';

const Home = ({navigation}) => {
  const dispatch = useDispatch();

  const {loginSession, userSession} = useSelector(state => state.auth);
  const [popularScreen, setPopularScreen] = React.useState('movie');
  const [screen, setScreen] = React.useState('movie');

  React.useEffect(() => {
    if (loginSession.request_token !== undefined) {
      dispatch(createUserSession(loginSession.request_token));
    }
  }, []);

  React.useEffect(() => {
    dispatch(getUserDetails(userSession.session_id));
  }, [userSession.session_id]);

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
    dispatch(getPopularProducts(popularScreen));
  }, [popularScreen]);

  React.useEffect(() => {
    dispatch(getProducts(screen));
  }, [screen]);

  return (
    <View
      style={{
        padding: 10,
        paddingHorizontal: 5,
        backgroundColor: '#001',
      }}>
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
