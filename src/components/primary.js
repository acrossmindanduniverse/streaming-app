/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {
  Dimensions,
  View,
  StyleSheet,
  TouchableOpacity,
  Text,
  Image,
  Modal,
  TouchableWithoutFeedback,
  ActivityIndicator,
} from 'react-native';
import Entypo from 'react-native-vector-icons/Entypo';

export const ScreenWidth = Dimensions.get('window').width;

export const arrMonth = [
  'Jan',
  'Feb',
  'Mar',
  'Apr',
  'May',
  'Jun',
  'Jul',
  'Aug',
  'Sep',
  'Oct',
  'Nov',
  'Dec',
];

export const ContentWrapper = ({content}) => {
  return <View style={styles.contentWrapper}>{content}</View>;
};

export const BackGroundImage = ({src}) => {
  return (
    <Image
      source={src}
      resizeMode="cover"
      style={{height: '100%', width: '100%'}}
    />
  );
};

export const NoBackgroundImage = () => {
  return (
    <View
      style={{
        backgroundColor: '#fff',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        height: '100%',
      }}>
      <View style={{borderRadius: 15, padding: 30}}>
        <Entypo name="image" size={50} />
      </View>
    </View>
  );
};

export const NoBackDrop = () => {
  return (
    <View
      style={{
        backgroundColor: '#fff',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 15,
        width: 250,
        height: 150,
      }}>
      <Entypo name="image" size={50} />
    </View>
  );
};

export const PrimaryModal = ({open, modal, str, func}) => {
  return (
    <Modal
      visible={modal}
      onRequestClose={() =>
        open({
          ...modal,
          boolean: false,
        })
      }
      transparent={true}
      animationType={'fade'}>
      <TouchableOpacity
        onPress={() =>
          open({
            ...modal,
            boolean: false,
          })
        }
        style={styles.contentWrapper}>
        <TouchableWithoutFeedback>
          <View style={styles.modal}>
            <Text style={styles.modalText}>{str}</Text>
            <View style={{alignItems: 'flex-end'}}>
              <TouchableOpacity onPress={func}>
                <Entypo name="trash" size={25} />
              </TouchableOpacity>
            </View>
          </View>
        </TouchableWithoutFeedback>
      </TouchableOpacity>
    </Modal>
  );
};

export const ErrorMessage = ({str}) => {
  return (
    <View
      style={{
        justifyContent: 'center',
        alignItems: 'center',
        paddingVertical: 20,
        paddingHorizontal: 30,
        width: '100%',
        position: 'absolute',
      }}>
      <Text style={styles.errorMessageText}>{str}</Text>
    </View>
  );
};

export const SuccessMessage = ({str}) => {
  return (
    <View
      style={{
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <Text style={styles.successMessage}>{str}</Text>
    </View>
  );
};

export const PrimarySpinner = () => {
  return (
    <View style={styles.contentWrapper}>
      <ActivityIndicator size="large" color="#fff" />
    </View>
  );
};

export const AuthButton = ({str, func}) => {
  return (
    <View>
      <TouchableOpacity onPress={func} style={styles.signInBtn}>
        <Text style={styles.primaryText}>{str}</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  contentWrapper: {
    position: 'absolute',
    width: '100%',
    backgroundColor: '#000000a0',
    height: '100%',
    padding: 50,
    justifyContent: 'center',
  },
  errorMessageText: {
    color: '#ff9375',
    textAlign: 'center',
    fontSize: 18,
    fontFamily: 'Poppins-Light',
  },
  signInBtn: {
    backgroundColor: '#fff',
    borderColor: '#032541',
    padding: 15,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 15,
  },
  primaryText: {
    fontFamily: 'Poppins-SemiBold',
    color: '#032541',
    fontSize: 18,
  },
  modal: {
    backgroundColor: '#fff',
    padding: 30,
    borderRadius: 10,
  },
  modalText: {
    fontSize: 15,
    fontFamily: 'Poppins-Light',
    textAlign: 'justify',
  },
  successMessage: {
    fontSize: 15,
    textAlign: 'center',
    fontFamily: 'Poppins-Light',
    color: '#fff67a',
  },
});
