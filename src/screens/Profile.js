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
import {WatchList} from '../components/headers';
import {useDispatch} from 'react-redux';
import {authDefault} from '../redux/actions/auth';

const Profile = () => {
  const dispatch = useDispatch();
  const [modal, setModal] = React.useState(false);

  const showModal = visible => {
    setModal(visible);
  };

  const handleSignOut = () => {
    dispatch(authDefault());
  };

  return (
    <View>
      <BackGroundImage src={bg} />
      <PrimaryModal
        open={setModal}
        modal={modal}
        str="Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Cras vitae fermentum ligula. Nulla feugiat, justo ut rhoncus
                    dapibus, nisi tortor efficitur enim, et porttitor est ex eu
                    purus. Nam luctus, mi ut bibendum condimentum, urna ante
                    volutpat libero, "
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
                  <Text style={styles.primaryText}>Username</Text>
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
              <WatchList />
              <FlatList
                keyExtractor={item => String(item)}
                data={[1, 2, 3, 4, 5, 6, 7]}
                renderItem={({item}) => (
                  <View style={{paddingVertical: 20}}>
                    <View style={styles.listContent}>
                      <View>
                        <Image style={{backgroundColor: 'grey'}} />
                      </View>
                      <View>
                        <View style={styles.percentage}>
                          <Text style={styles.percentageText}>80%</Text>
                        </View>
                        <View>
                          <Text style={styles.primaryText}>Movie Title</Text>
                          <Text style={styles.primaryText}>Date and time</Text>
                        </View>
                        <View style={styles.detailWrapper}>
                          <TouchableOpacity onPress={() => showModal(true)}>
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
    borderRadius: 10,
    padding: 15,
  },
  percentage: {
    marginHorizontal: 15,
    width: 37,
    height: 37,
    borderRadius: 37 / 2,
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
