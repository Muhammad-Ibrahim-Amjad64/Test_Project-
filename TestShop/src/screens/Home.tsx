
import {
  responsiveHeight,
  responsiveFontSize,
  responsiveWidth,
} from 'react-native-responsive-dimensions';
import WrapperContainer from '../Components/WrapperContainer';
import {useState} from 'react';
import {
  Text,
  StyleSheet,
  View,
  TouchableOpacity,
  FlatList,
  Image,
  ScrollView,
  ImageBackground,
} from 'react-native';
import React from 'react';
import {Dark} from '../../styles/theme';
import TextInputComp from '../Components/TextInputComp';
import {useNavigation} from '@react-navigation/native';

import {images} from '../../utlies';
import NavigationsStrings from '../Navigations/NavigationsStrings';
import LinearGradient from 'react-native-linear-gradient';

const Categories = [
  {name: 'All', id: 1},
  {name: 'Cappuccino', id: 2},
  {name: 'Espresso', id: 3},
  {name: 'Americano', id: 4},
  {name: 'Macchiato', id: 5},
];

const Coffee = [
  {
    id: 1,
    image: images.coffee2,
    title: 'Cappuccino',
    price: "4.20",
    description: 'With Steamed Milk',
    rating: 4.5,
  },
  {
    id: 2,
    image: images.coffee,
    title: 'Cappuccino',
    price: "4.20",
    description: 'With Foam',
    rating: 4.2,
  },
  {
    id: 3,
    image: images.coffee2,
    title: 'Cappuccino',
    price: "4.20",
    description: 'With Steamed Milk',
    rating: 4.5,
  },
];

const Beans = [
  {
    id: 1,
    image: images.beans2,
    title: 'Robusta Beans',
    price: "4.20",
    description: 'Medium Roasted',
    rating: 4.5,
  },
  {
    id: 2,
    image: images.beans2,
    title: 'Cappuccino',
    price: "4.20",
    description: 'With Foam',
    rating: 4.2,
  },
  {
    id: 3,
    image: images.beans2,
    title: 'Robusta Beans',
    price: "4.20",
    description: 'Medium Roasted',
    rating: 4.5,
  },
];
const Home = () => {
  const navigation = useNavigation();
  const [active, setactive] = useState(0);
  return (
    <WrapperContainer
      style={{
        backgroundColor: Dark.primaryColor,
        // flex: 1,
        // paddingHorizontal: responsiveWidth(6),
      }}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{flexGrow: 1}}>
        <View style={styles.headerContainer}>
          <TouchableOpacity style={styles.headerItem}>
          <LinearGradient
              colors={['#252A32', Dark.primaryColor]}
              start={{ x: 0.15, y: 0.04 }}
              end={{ x: 0.91, y: 0.93 }}
              style={{flex:1,    width: responsiveWidth(10),
                height: responsiveWidth(10),justifyContent:"center",alignItems:"center"}}
            >
            <Image
              style={{width: responsiveWidth(6), height: responsiveWidth(6)}}
              source={images.hElement}
              />
              </LinearGradient>
          </TouchableOpacity>
          <TouchableOpacity style={styles.headerItem}>
            <Image
              style={{width: responsiveWidth(10), height: responsiveWidth(10)}}
              source={images.Intersect}
            />
          </TouchableOpacity>
        </View>
        <View style={styles.searchWrapper}>
          <View>
            <Text style={styles.heading}>
              Find the best {'\n'}Coffee for you
            </Text>
          </View>
          <TextInputComp
            style={{
              width: responsiveWidth(90),
              backgroundColor: Dark.secondaryText,
              marginTop: responsiveHeight(5),
              // marginBottom: responsiveHeight(3),
            }}
            placeholder="Find Your Coffee..."
          />
        </View>
        <View style={[styles.cardsContainer, {height: responsiveHeight(6)}]}>
          <FlatList
            data={Categories}
            horizontal
            showsHorizontalScrollIndicator={false}
            contentInsetAdjustmentBehavior="automatic"
            contentContainerStyle={
              {
                // marginTop: responsiveHeight(2),
              }
            }
            renderItem={({item}) => (
              <TouchableOpacity
                onPress={() => setactive(item.id)}
                key={item.id}
                style={styles.tag}>
                <Text
                  style={
                    active === item.id
                      ? [{color: Dark.secondaryColor}, styles.categories]
                      : [{color: Dark.secondaryText}, styles.categories]
                  }>
                  {item.name}
                </Text>
                {active === item.id && (
                  <View
                    style={{
                      marginTop: responsiveHeight(0.5),
                      backgroundColor: Dark.secondaryColor,
                      width: responsiveWidth(1.7),
                      height: responsiveWidth(1.7),
                      borderRadius: responsiveWidth(100),
                      alignSelf: 'center',
                    }}></View>
                )}
              </TouchableOpacity>
            )}
          />
        </View>
        <View style={styles.cardsContainer}>
          <FlatList
            data={Coffee}
            horizontal
            showsHorizontalScrollIndicator={false}
            contentInsetAdjustmentBehavior="automatic"
            contentContainerStyle={{
              marginTop: responsiveHeight(2),
            }}
            renderItem={({item}) => (
              <View
                // onPress={() => setactive(item.id)}
                key={item.id}
                style={styles.item}>
                <LinearGradient
              colors={['#252A32', Dark.primaryColor]}
              start={{ x: 0.15, y: 0.04 }}
              end={{ x: 0.91, y: 0.93 }}
              style={styles.gradient}
            >

                <View
                  style={{
                    width: responsiveWidth(30),
                    alignSelf: 'center',
                    height: responsiveHeight(24.5),
                    gap: responsiveHeight(0.7),
                  }}>
                  <View style={{borderRadius:responsiveHeight(2), overflow:"hidden"}}>
                  <ImageBackground
                    style={[styles.productImage, {borderRadius:responsiveHeight(2) }]}
                    source={item.image}>
                    <View
                      style={{
                        height: responsiveHeight(3),
                        backgroundColor: '#00000099',
                        width: responsiveWidth(15),
                        alignSelf: 'flex-end',
                        borderBottomLeftRadius: responsiveHeight(4),
                        flexDirection: 'row',
                        gap: responsiveWidth(1.3),
                        justifyContent: 'center',
                        alignItems: 'center',
                      }}>
                      <Image
                        style={{
                          
                          height: responsiveWidth(3),
                          width: responsiveWidth(3),
                        }}
                        source={images.star}
                      />
                      <Text style={{color:Dark.primaryText, fontSize:responsiveFontSize(1.45)}}>{item.rating}</Text>
                    </View>
                  </ImageBackground></View>
                  <View>
                    <Text style={styles.containerHeading}>{item.title}</Text>
                  </View>
                  <View>
                    <Text style={styles.ratingSubTxt}>{item.description}</Text>
                  </View>
                  <View style={styles.priceWrapper}>
                    <View style={{flexDirection: 'row'}}>
                      <Text style={styles.ratingTxt}>
                        <Text style={{color: Dark.secondaryColor}}>$ </Text>
                        {item.price}
                      </Text>
                    </View>
                    <TouchableOpacity
                      style={{
                        backgroundColor: Dark.secondaryColor,
                        height: responsiveWidth(7.2),
                        width: responsiveWidth(7.2),
                        justifyContent: 'center',
                        alignItems: 'center',
                        borderRadius: responsiveHeight(0.6),
                      }}
                      onPress={() =>
                        navigation.navigate(NavigationsStrings.PRODUCT)
                      }>
                      <Image
                        style={{
                          width: responsiveWidth(2.6),
                          height: responsiveWidth(2.6),
                        }}
                        source={images.plus}></Image>
                    </TouchableOpacity>
                  </View>
                  </View>
                  </LinearGradient>
              </View>
            )}
          />
        </View>

        <View style={styles.cardsContainer}>
          <Text>Coffee beans</Text>
        </View>
        <View style={styles.cardsContainer}>
          <FlatList
            data={Beans}
            horizontal
            showsHorizontalScrollIndicator={false}
            contentInsetAdjustmentBehavior="automatic"
            contentContainerStyle={{
              marginTop: responsiveHeight(2),
            }}
            renderItem={({item}) => (
              <View
                // onPress={() => setactive(item.id)}
                key={item.id}
                style={styles.item}>
                      <LinearGradient
              colors={['#252A32', Dark.primaryColor]}
              start={{ x: 0.15, y: 0.04 }}
              end={{ x: 0.91, y: 0.93 }}
              style={styles.gradient}
            >
                <View
                  style={{
                    width: responsiveWidth(30),
                    alignSelf: 'center',
                    height: responsiveHeight(24.5),
                    gap: responsiveHeight(0.7),
                  }}>
                  <Image style={styles.productImage} source={images.beans2} />
                  <View>
                    <Text style={styles.containerHeading}>{item.title}</Text>
                  </View>
                  <View>
                    <Text style={styles.ratingSubTxt}>{item.description}</Text>
                  </View>
                  <View style={styles.priceWrapper}>
                    <View style={{flexDirection: 'row'}}>
                      <Text style={styles.ratingTxt}>
                        <Text style={{color: Dark.secondaryColor}}>$ </Text>
                        {item.price}
                      </Text>
                    </View>
                    <TouchableOpacity
                      style={{
                        backgroundColor: Dark.secondaryColor,
                        height: responsiveWidth(7.2),
                        width: responsiveWidth(7.2),
                        justifyContent: 'center',
                        alignItems: 'center',
                        borderRadius: responsiveHeight(0.6),
                      }}
                      onPress={() =>
                        navigation.navigate(NavigationsStrings.PRODUCT)
                      }>
                      <Image
                        style={{
                          width: responsiveWidth(2.6),
                          height: responsiveWidth(2.6),
                        }}
                        source={images.plus}></Image>
                    </TouchableOpacity>
                  </View>
                  </View>
                  </LinearGradient>
              </View>
            )}
          />
        </View>
      </ScrollView>
    </WrapperContainer>
  );
};

export default Home;

const styles = StyleSheet.create({
  gradient: {
    flex: 1,
justifyContent:"center"
  },
  ratingSubTxt: {fontSize: responsiveFontSize(1.2)},
  ratingTxt: {
    color: Dark.primaryText,
    fontWeight: 'bold',
    fontSize: responsiveFontSize(2.4),
  },
  containerHeading: {
    fontSize: responsiveFontSize(1.8),
    color: Dark.primaryText,
  },
  searchWrapper: {
    alignItems: 'center',
  },
  cardsContainer: {
    width: responsiveWidth(90),
    alignSelf: 'center',
  },
  heading: {
    width: responsiveWidth(90),
    lineHeight: responsiveHeight(5.3),
    color: Dark.primaryText,
    fontWeight: 'bold',
    fontSize: responsiveFontSize(3.8),
  },
  tag: {
    marginTop: responsiveHeight(2),
    borderRadius: responsiveWidth(6),
    marginRight: responsiveWidth(6),
    marginVertical: responsiveHeight(1),
  },
  categories: {
    fontWeight: 'bold',

    fontSize: responsiveFontSize(1.6),
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
    borderWidth: responsiveWidth(0.2),
    borderColor: '#21262E',
    overflow: 'hidden',
    // backgroundColor: Dark.tertiaryColor,
    width: responsiveWidth(10),
    height: responsiveWidth(10),

    borderRadius: responsiveHeight(1),
    color: 'white',
  },
  item: {
    overflow:"hidden",
    borderRadius: responsiveHeight(3),
    justifyContent: 'center',
    // alignItems:"center",
    marginRight: responsiveWidth(5.5),
    height: responsiveHeight(27),
    width: responsiveWidth(35),
    backgroundColor: Dark.tertiaryColor,
  },
  productImage: {
    alignSelf: 'center',
    borderRadius: responsiveHeight(2),
    height: responsiveWidth(30),
    width: responsiveWidth(30),
  },
  price: {
    fontWeight: 'bold',
    color: Dark.primaryText,
    fontSize: responsiveFontSize(2),
  },
  priceWrapper: {
    marginTop: responsiveHeight(0.4),
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    alignSelf: 'center',
  },
});

// react-native-linear-gradient
