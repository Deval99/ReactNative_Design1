import {
  View,
  StyleSheet,
  Text,
  ScrollView,
  Image,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import CardComponent from '../../Vectors/Dashboard/Card';
import {useFonts} from 'expo-font';
import Boxes from './Boxes';
import BikeList from './BikeList';
import { productList } from '../../DataSet/productList';

const Content = ({navigation}) => {
  const [loaded, error] = useFonts({
    'Poppins-Bold': require('../../assets/fonts/Poppins/Poppins-Bold.ttf'),
    'Poppins-Medium': require('../../assets/fonts/Poppins/Poppins-Medium.ttf'),
  });
  return (
    <View>
      <ScrollView style={mainCardStyle.scrollView}>
        <View style={mainCardStyle.main}>
          <TouchableOpacity
            style={{
              position: 'absolute',
              zIndex: 1,
              height: 215,
              width: '85%',
              alignSelf: 'center',
            }}
            onPress={() => {
              navigation.navigate('ProductDetail', {name: 'ProductDetail', product: productList[0]});
            }}>
          </TouchableOpacity>
          <CardComponent style={mainCardStyle.card} />
          <View style={mainCardStyle.cardContent}>
            <Image source={require('../../DataSet/Images/MainProduct.png')} />
            <Text style={mainCardStyle.text}>30% Off</Text>
          </View>
        </View>
        <Boxes />
        <BikeList />
        <View style={mainCardStyle.spacer} />
      </ScrollView>
      <View style={mainCardStyle.background}>
        <Image
          source={require('../../assets/images/bg_rect.png')}
          style={mainCardStyle.bgImage}
        />
      </View>
    </View>
  );
};

const mainCardStyle = StyleSheet.create({
  spacer: {
    height: 120,
    width: 2,
  },
  scrollView: {
    zIndex: 1,
    marginBottom: -5,
  },
  main: {
    height: 210,
    marginTop: 20,
  },
  card: {
    alignSelf: 'center',
    position: 'absolute',
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 0},
    shadowOpacity: 1,
    shadowRadius: 200,
  },
  cardContent: {
    top: 20,
    left: 50,
    width: 318,
    height: 170,
  },
  linearGradient: {
    marginLeft: 15,
    marginRight: 15,
    borderRadius: 5,
  },
  text: {
    color: '#ffffff99',
    fontFamily: 'Poppins-Bold',
    fontSize: 28,
  },
  background: {
    position: 'absolute',
    bottom: -30,
    right: 0,
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
    padding: 10,
  },
  bgImage: {
    position: 'absolute',
  },
});

export default Content;
