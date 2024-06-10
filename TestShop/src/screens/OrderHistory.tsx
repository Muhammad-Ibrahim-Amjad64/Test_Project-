
import {
    responsiveHeight,
    responsiveFontSize,
    responsiveWidth,
  } from 'react-native-responsive-dimensions';
  
  import {Text, StyleSheet, View} from 'react-native';
import React from 'react';
  import { Dark } from '../../styles/theme';
  
  const OrderHistory = () => {
    return (
      <View style={styles.container}>
        <Text>OrderHistory</Text>
      </View>
    );
  };
  
  export default OrderHistory;
  
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Dark.primaryColor,
    justifyContent: "center",
    alignItems:"center"
  }
  });
  