
import {
  responsiveHeight,
  responsiveFontSize,
  responsiveWidth,
} from 'react-native-responsive-dimensions';
import LinearGradient from 'react-native-linear-gradient';

import {
  Text,
  StyleSheet,
  View,
  ScrollView,
  ImageBackground,
  TouchableOpacity,
  Image,
} from 'react-native';
import React, {useState} from 'react';
import WrapperContainer from '../Components/WrapperContainer';
import {Dark} from '../../styles/theme';
import {images} from '../../utlies';
import ButtonComp from '../Components/ButtonComp';
import CardComp from '../Components/CardComp';
import {useNavigation} from '@react-navigation/native';
import NavigationsStrings from '../Navigations/NavigationsStrings';

// import { TouchableOpacity } from 'react-native-gesture-handler';
const Product = () => {
  const navigation = useNavigation();
  const [toggleHeart, setToggleHeart] = useState(false);
  const [item, setItem] = useState(1);

  const handleQuantity = id => {
    setItem(id);
  };
  return (
    <WrapperContainer
      style={{
        backgroundColor: Dark.primaryColor,
        flex: 1,
      }}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{flexGrow: 1}}>
        <ImageBackground source={images.beans} style={styles.beansContainer}>
          <View style={styles.headerContainer}>
            <TouchableOpacity
              onPress={() => navigation.navigate(NavigationsStrings.HOME)}
              style={styles.headerItem}>
              <LinearGradient
                colors={['#252A32', Dark.primaryColor]}
                start={{x: 0.15, y: 0.04}}
                end={{x: 0.91, y: 0.93}}
                style={{
                  flex: 1,
                  width: responsiveWidth(10),
                  height: responsiveWidth(10),
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <Image
                  style={{
                    width: responsiveWidth(2.5),
                    height: responsiveWidth(6),
                  }}
                  source={images.arrowLeft}
                />
              </LinearGradient>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => setToggleHeart(!toggleHeart)}
              style={styles.headerItem}>
              <LinearGradient
                colors={['#252A32', Dark.primaryColor]}
                start={{x: 0.15, y: 0.04}}
                end={{x: 0.91, y: 0.93}}
                style={{
                  flex: 1,
                  width: responsiveWidth(10),
                  height: responsiveWidth(10),
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <Image
                  style={{
                    width: responsiveWidth(5),
                    height: responsiveWidth(5),
                  }}
                  source={toggleHeart ? images.heart2 : images.heart}
                />
              </LinearGradient>
            </TouchableOpacity>
          </View>
          <View style={styles.infoContainer}>
            <View style={styles.infoRow}>
              <View>
                <Text style={styles.title}>Robusta Beans</Text>
                <Text style={styles.infoText}>From Africa</Text>
              </View>
              <View style={styles.infoCardContainer}>
                <CardComp
                  textStyles={styles.ratingSubTxt}
                  image={images.bean}
                  CardStyle={styles.cardsMin}
                  text="Bean"
                />
                <CardComp
                  imageStyle={{
                    width: responsiveWidth(5.7),
                    marginBottom: responsiveHeight(1),
                    height: responsiveWidth(6.5),
                    // backgroundColor:"red"
                  }}
                  textStyles={styles.ratingSubTxt}
                  image={images.pointer}
                  CardStyle={styles.cardsMin}
                  text="Africa"
                />
              </View>
            </View>
            <View style={[styles.infoRow, {marginBottom: responsiveHeight(2)}]}>
              <View style={styles.ratingContainer}>
                <Image style={styles.star} source={images.starp} />
                <Text style={styles.ratingTxt}>4.5</Text>
                <Text style={styles.ratingSubTxt}>(6,879)</Text>
              </View>

              <CardComp
                textStyles={styles.ratingSubTxt}
                CardStyle={{width: responsiveWidth(33.5)}}
                text="Medium Roasted"
              />
            </View>
          </View>
        </ImageBackground>
        <View style={styles.cartContainer}>
          <View style={styles.descriptionContainer}>
            <Text style={styles.containerHeading}>Description</Text>
            <Text style={[styles.infoText, {color: 'white'}]}>
              Arabica beans are by far the most popular type of coffee beans,
              making up about 60% of the world’s coffee. These tasty beans
              originated many centuries ago in the highlands of Ethiopia, and
              may even be the first coffee beans ever consumed!
            </Text>
          </View>
          <View style={styles.cartSubContainer}>
            <Text style={styles.containerHeading}>Size</Text>
            <View style={styles.qtyContainer}>
              <TouchableOpacity onPress={() => handleQuantity('250gm')}>
                <CardComp
                  CardStyle={item === '250gm' ? styles.qtyCard2 : {}}
                  textStyles={item === '250gm' ? styles.qtyText : {}}
                  text="250gm"
                />
              </TouchableOpacity>

              <TouchableOpacity onPress={() => handleQuantity('500gm')}>
                <CardComp
                  CardStyle={item === '500gm' ? styles.qtyCard2 : {}}
                  textStyles={item === '500gm' ? styles.qtyText : {}}
                  text="500gm"
                />
              </TouchableOpacity>
              <TouchableOpacity onPress={() => handleQuantity('1000gm')}>
                <CardComp
                  CardStyle={item === '1000gm' ? styles.qtyCard2 : {}}
                  textStyles={item === '1000gm' ? styles.qtyText : {}}
                  text="1000gm"
                />
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.summaryContainer}>
            <View style={styles.priceContainer}>
              <Text>Price</Text>
              <Text style={styles.title}>
                <Text style={{color: Dark.secondaryColor}}>$ </Text>10.50
              </Text>
            </View>
            <ButtonComp
            onPress={()=>navigation.navigate(NavigationsStrings.CART)}
              style={{width: responsiveWidth(60)}}
              text="Add to Cart"
            />
          </View>
        </View>
      </ScrollView>
    </WrapperContainer>
  );
};

export default Product;

const styles = StyleSheet.create({
  ratingSubTxt: {fontSize: responsiveFontSize(1.45)},
  star: {
    height: responsiveHeight(3),
    width: responsiveHeight(3),
  },
  ratingContainer: {
    // backgroundColor:"red",
    alignItems: 'center',
    flexDirection: 'row',
    gap: responsiveWidth(1),
  },
  containerHeading: {
    fontSize: responsiveFontSize(2),
    color: Dark.tertiaryText,
    fontWeight: 'bold',
  },

  infoText: {
    fontSize: responsiveFontSize(1.65),
    color: Dark.tertiaryText,
    lineHeight: responsiveHeight(2.2),
  },

  title: {
    color: Dark.primaryText,
    fontWeight: 'bold',
    fontSize: responsiveFontSize(2.8),
  },
  ratingTxt: {
    color: Dark.primaryText,
    fontWeight: 'bold',
    fontSize: responsiveFontSize(2.6),
  },
  infoRow: {
    flexDirection: 'row',
    width: responsiveWidth(90),
    alignSelf: 'center',
    justifyContent: 'space-between',
    marginTop: responsiveHeight(2),
  },
  infoCardContainer: {
    flexDirection: 'row',
    gap: responsiveWidth(5),
  },
  cartSubContainer: {
    gap: responsiveHeight(2),
  },
  descriptionContainer: {
    gap: responsiveHeight(1.8),
  },
  cardsMin: {
    height: responsiveHeight(6.5),
    width: responsiveHeight(6.5),
  },
  headerContainer: {
    height: responsiveHeight(7),
    marginVertical: responsiveHeight(2),
    width: responsiveWidth(90),
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignSelf: 'center',
    alignItems: 'center',
  },
  headerItem: {
    backgroundColor: Dark.tertiaryColor,
    width: responsiveWidth(10),
    height: responsiveWidth(10),
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: responsiveHeight(1),
    color: 'white',
    overflow: 'hidden',
    borderWidth: responsiveWidth(0.2),
    borderColor: '#21262E',
  },
  summaryContainer: {
    alignItems: 'center',
    flexDirection: 'row',
    height: responsiveHeight(7),
    gap: responsiveWidth(10),
    width: responsiveWidth(90),
    alignSelf: 'center',
  },
  priceContainer: {
    width: responsiveWidth(20),
    alignItems: 'center',
  },

  qtyCard2: {
    borderWidth: responsiveHeight(0.2),
    borderColor: Dark.secondaryColor,
  },
  qtyText: {
    color: Dark.secondaryColor,
  },

  beansContainer: {
    // flexGrow:0.7
    height: responsiveHeight(60),
    justifyContent: 'space-between',
    // flexGrow:
  },
  qtyContainer: {
    flexDirection: 'row',
    gap: responsiveWidth(7),
    width: responsiveWidth(90),
    alignSelf: 'center',
  },
  cartContainer: {
    marginTop: responsiveHeight(1.8),
    width: responsiveWidth(90),
    alignSelf: 'center',
    backgroundColor: Dark.primaryColor,
    gap: responsiveHeight(2),
    height: responsiveHeight(40),
  },
  infoContainer: {
    // flex: 0.3,
    height: responsiveHeight(17.3),

    backgroundColor: '#00000080',
  },
});
