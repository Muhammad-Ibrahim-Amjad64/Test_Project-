
import { StyleSheet, Text, TouchableOpacity, View ,onPress} from 'react-native';
import React from 'react';
import {
  responsiveFontSize,
  responsiveHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';
import { Dark } from '../../styles/theme';

const ButtonComp = ({text = '', style = {}, textstyle = {}, onPress}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      activeOpacity={0.9}
      style={{...styles.pressable, ...style}}>
      <Text style={{...styles.textstyle, ...textstyle}}>{text}</Text>
    </TouchableOpacity>
  );
};

export default ButtonComp;

const styles = StyleSheet.create({
  pressable: {
    backgroundColor: Dark.secondaryColor,
    width: responsiveWidth(80),
    height: responsiveHeight(7.5),
    borderRadius: responsiveHeight(2),
    alignItems: 'center',
    flexDirection: 'row',
    paddingHorizontal: responsiveWidth(4),
    justifyContent: 'center',
    
  },
  textstyle: {
    fontWeight: '600',
    color: 'white',
    fontSize: responsiveFontSize(2),
  },
});
