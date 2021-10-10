/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import {ContentWrapper, PrimaryModal} from '../components/primary';
import {BackGroundImage} from './../components/primary';
import bg from '../assets/profile.jpg';
import {Watchlist} from '../components/headers';
import {useDispatch, useSelector} from 'react-redux';
import {authDefault} from '../redux/actions/auth';
import {
  getUserDetails,
  getWatchList,
  addOrRemoveToWatchList,
} from '../redux/actions/user';
import {image} from '../helpers/request';

const Profile = () => {
  const dispatch = useDispatch();
  const {userSession} = useSelector(state => state.auth);
  const {userDetails, watchlist} = useSelector(state => state.user);

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
    dispatch(authDefault());
  };

  React.useEffect(() => {
    dispatch(getUserDetails(userSession.session_id));
  }, []);

  React.useEffect(() => {
    dispatch(getWatchList(userDetails.id, name, userSession.session_id));
  }, [userDetails.id, name]);

  console.log(watchlist);

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

  console.log(modal);

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
            <View style={{flex: 1, paddingVertical: 30}}>
              <View
                style={{justifyContent: 'space-between', flexDirection: 'row'}}>
                <View style={{flexDirection: 'row'}}>
                  <View style={{paddingHorizontal: 15}}>
                    <Image style={styles.profilePicWrapper} />
                  </View>
                  <View>
                    <Text style={styles.primaryText}>
                      {userDetails.username}
                    </Text>
                    <Text style={styles.primaryText}>Member start</Text>
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
                <FlatList
                  keyExtractor={item => String(item)}
                  data={watchlist.results}
                  renderItem={({item}) => (
                    <View style={{paddingVertical: 20}}>
                      <View style={styles.listContent}>
                        <View>
                          <Image
                            resizeMode="contain"
                            source={{uri: `${image}${item.poster_path}`}}
                            style={{width: 150, height: 150, borderRadius: 15}}
                          />
                        </View>
                        <View
                          style={{
                            width: '65%',
                          }}>
                          <View
                            style={{
                              alignItems: 'flex-end',
                            }}>
                            <View style={styles.percentage}>
                              <Text style={styles.percentageText}>
                                {(item.vote_average + '').replace('.', '')}%
                              </Text>
                            </View>
                          </View>
                          <View>
                            <Text style={styles.primaryText}>
                              {item.title || item.original_name}
                            </Text>
                            <Text style={styles.primaryText}>
                              Date and time
                            </Text>
                          </View>
                          <View style={styles.detailWrapper}>
                            <TouchableOpacity
                              onPress={() => {
                                showModal(
                                  true,
                                  item.overview === ''
                                    ? 'no overview, yet'
                                    : item.overview,
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
    fontSize: 20,
    fontFamily: 'Poppins-Light',
    color: '#fff',
  },
  listContent: {
    backgroundColor: '#d4d4d4',
    flexDirection: 'row',
    borderRadius: 10,
    padding: 15,
  },
  percentage: {
    marginHorizontal: 15,
    width: 45,
    height: 45,
    borderRadius: 45 / 2,
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
    fontSize: 30,
    color: '#fff',
  },
  signOutBtn: {
    padding: 15,
    borderRadius: 15,
    backgroundColor: 'pink',
  },
});

export default Profile;
