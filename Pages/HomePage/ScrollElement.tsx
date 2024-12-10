import {View, Text, StyleSheet, Image} from 'react-native';
import React from 'react';
import Heart_Sel from '../../Vectors/Dashboard/Heart_Sel';
import ScrollElementSVG from '../../Vectors/Dashboard/ScrollElementSVG';

export interface BikeDetails {
  name: string,
  type: string,
  price: string,
  imageName: any,
}

const ScrollElement: React.FC<{bikeDetails: BikeDetails}> = (data: {bikeDetails: BikeDetails}) => {
  return (
    <>
      <ScrollElementSVG style={styles.scrollElement} />
      <View style={styles.elementContent}>
        <Heart_Sel style={styles.heart} />
        <Image source={data.bikeDetails.imageName} style={styles.bike2} />
        <View style={styles.textSection}>
          <Text style={styles.text1}>{data.bikeDetails.type}</Text>
          <Text style={styles.text2}>{data.bikeDetails.name}</Text>
          <Text style={styles.text3}>$ {data.bikeDetails.price}</Text>
        </View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  element: {
    width: '40%',
  },
  left: {
    marginRight: 15,
    marginTop: 35,
  },
  right: {
    marginLeft: 15,
  },
  elementContent: {
    height: 220,
    width: '90%',
    top: 5,
    left: 10,
  },
  scrollElement: {
    position: 'absolute',
  },
  heart: {
    alignSelf: 'flex-end',
    right: 10,
    top: 15,
  },
  bike2: {
    alignSelf: 'center',
    top: 17,
    height: 85,
    width: 130
  },
  textSection: {
    marginTop: 25,
    marginLeft: 10,
  },
  text1: {
    color: '#ffffff88',
    fontFamily: 'Poppins-Medium',
    fontSize: 14,
  },
  text2: {
    color: '#fff',
    fontFamily: 'Poppins-Bold',
    fontSize: 16,
  },
  text3: {
    color: '#ffffff88',
    fontFamily: 'Poppins-Medium',
    fontSize: 14,
  },
});

export default ScrollElement;
