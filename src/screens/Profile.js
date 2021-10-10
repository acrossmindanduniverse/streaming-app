/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View, Text, Image, StyleSheet, TouchableOpacity} from 'react-native';
import {ContentWrapper, PrimaryModal} from '../components/primary';
import {BackGroundImage} from './../components/primary';
import bg from '../assets/profile.jpg';
import {Watchlist} from '../components/headers';
import {useDispatch, useSelector} from 'react-redux';
import {authSignOut} from '../redux/actions/auth';
import {getWatchList, addOrRemoveToWatchList} from '../redux/actions/user';
import WatchlistSecondComponent from './../components/Watchlist';
import AsyncStorage from '@react-native-community/async-storage';

const Profile = ({navigation}) => {
  const dispatch = useDispatch();
  const {userSession} = useSelector(state => state.auth);
  const {userDetails} = useSelector(state => state.user);

  const [name, setName] = React.useState('movies');
  const [deleteName, setDeleteName] = React.useState('movie');
  const [modal, setModal] = React.useState({
    boolean: false,
    str: '',
    id: 0,
  });

  const showModal = (visible, text, id) => {
    setModal({
      ...modal,
      boolean: visible,
      str: text,
      id: id,
    });
  };

  const handleSignOut = () => {
    dispatch(authSignOut());
    AsyncStorage.removeItem('persist:auth');
  };

  React.useEffect(() => {
    dispatch(getWatchList(userDetails.id, name, userSession.session_id));
  }, [userDetails.id, name]);

  const handleRemoveWatchList = () => {
    const addList = {
      media_type: deleteName,
      media_id: modal.id,
      watchlist: false,
    };
    dispatch(
      addOrRemoveToWatchList(userDetails.id, userSession.session_id, addList),
    ).then(() => {
      dispatch(getWatchList(userDetails.id, name, userSession.session_id));
      setModal({
        ...modal,
        boolean: false,
      });
    });
  };

  return (
    userDetails !== undefined && (
      <View>
        <BackGroundImage src={bg} />
        <PrimaryModal
          open={setModal}
          modal={modal.boolean}
          str={modal.str}
          func={handleRemoveWatchList}
        />
        <ContentWrapper
          content={
            <View style={{flex: 1}}>
              <View
                style={{justifyContent: 'space-between', flexDirection: 'row'}}>
                <View style={{flexDirection: 'row'}}>
                  <View>
                    <Image style={styles.profilePicWrapper} />
                  </View>
                  <View
                    style={{
                      justifyContent: 'center',
                      alignItems: 'center',
                      paddingHorizontal: 5,
                    }}>
                    <Text style={styles.primaryText}>
                      {userDetails.username}
                    </Text>
                  </View>
                </View>
                <View>
                  <TouchableOpacity
                    onPress={handleSignOut}
                    style={styles.signOutBtn}>
                    <Text style={styles.primaryText}>Sign Out</Text>
                  </TouchableOpacity>
                </View>
              </View>
              <View style={{flex: 1}}>
                <Watchlist
                  name={name}
                  setName={setName}
                  setDeleteName={setDeleteName}
                />
                <WatchlistSecondComponent
                  name={name}
                  setName={setName}
                  setDeleteName={setDeleteName}
                  showModal={showModal}
                />
              </View>
            </View>
          }
        />
      </View>
    )
  );
};

const styles = StyleSheet.create({
  profilePicWrapper: {
    backgroundColor: 'grey',
    width: 50,
    height: 50,
    borderRadius: 40 / 2,
  },
  primaryText: {
    fontSize: 15,
    fontFamily: 'Poppins-Light',
    color: '#fff',
  },
  signOutBtn: {
    padding: 10,
    borderRadius: 15,
    backgroundColor: 'pink',
  },
});

export default Profile;
