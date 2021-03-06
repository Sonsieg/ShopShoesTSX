import React from 'react';
import {StyleSheet, Text, TextInput, View} from 'react-native';
import {Colors} from '../../config';
import {scale} from '../../libs/scaling';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {FunctionComponent} from 'react';

Ionicons.loadFont();
MaterialCommunityIcons.loadFont();
interface IInputNormal {
  email?: any;
  password?: any;
  search?: any;
  error?: any;
  disable?: any;
  value?: string;
  onChangeText?: () => void;
  placeholder?: string;
  type?: any;
}
const InputNormal: FunctionComponent<IInputNormal> = ({
  email,
  password,
  search,
  error,
  disable,
  value,
  onChangeText,
  type = 'default',
  placeholder = 'enter',
}) => {
  return (
    <>
      <View
        style={[
          styles.container,
          disable && {opacity: 0.5},
          error && {borderColor: Colors.red},
        ]}>
        <View style={styles.viewIcon}>
          {email && (
            <MaterialCommunityIcons
              name="email-outline"
              style={[styles.icon, error && {color: Colors.red}]}
              size={scale(20)}
            />
          )}
          {password && (
            <MaterialCommunityIcons
              name="lock-outline"
              style={[styles.icon, error && {color: Colors.red}]}
              size={scale(20)}
            />
          )}
          {search && (
            <Ionicons
              name="search"
              style={[styles.icon, error && {color: Colors.red}]}
              size={scale(20)}
            />
          )}
        </View>
        <TextInput
          style={styles.viewTextInput}
          placeholder={placeholder}
          secureTextEntry={password && true}
          editable={disable}
          value={value}
          onChangeText={onChangeText}
          keyboardType={type}
        />
        <View style={styles.viewIcon} />
      </View>
      {error !== '' ? <Text style={styles.textError}>{error}</Text> : null}
    </>
  );
};
const styles = StyleSheet.create({
  container: {
    width: '100%',
    flexDirection: 'row',
    borderWidth: scale(0.5),
    marginTop: scale(0),
    justifyContent: 'space-between',
    borderColor: Colors.skyblue,
    borderRadius: scale(5),
  },
  viewIcon: {
    width: '10%',
    height: scale(50),
    justifyContent: 'center',
    alignItems: 'center',
  },
  viewTextInput: {
    width: '80%',
    height: scale(50),
  },
  icon: {
    color: Colors.skyblue,
  },
  textError: {
    marginVertical: scale(4),
    color: Colors.red,
    fontStyle: 'italic',
  },
});
export default InputNormal;
