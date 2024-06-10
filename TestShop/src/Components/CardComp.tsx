
import { StyleSheet, Text, View, Image } from 'react-native';
import React from 'react';
import {
  responsiveFontSize,
  responsiveHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';
import { Dark } from '../../styles/theme';

// import { Image } from 'react-native-reanimated/lib/typescript/Animated';

const CardComp = ({image=false, text = '', textStyles = {}, CardStyle = {},imageStyle={} }) => {
  return (
      <View style={{ ...styles.qtyCard, ...CardStyle }}>
          {image && <Image style={{...styles.image,...imageStyle}} source={image}/>}
          <Text style={{ ...styles.textStyles, ...textStyles }}>{text}</Text></View>
  );
};

export default CardComp;

const styles = StyleSheet.create({
    image: {
        width: responsiveWidth(9),
      height:responsiveWidth(9)  
    },
    textStyles: {
        color:Dark.tertiaryText
    },
    qtyCard: {
        backgroundColor: Dark.tertiaryColor,
        width: responsiveWidth(25),
        height: responsiveHeight(5),
        justifyContent: "center",
        alignItems: "center",
        borderRadius:responsiveHeight(.6)
      },
});
