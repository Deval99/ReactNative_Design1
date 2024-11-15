import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import Heart_Sel from '../../Vectors/Dashboard/Heart_Sel';
import Bike2 from '../../Vectors/Dashboard/Bike2';
import ScrollElementSVG from '../../Vectors/Dashboard/ScrollElementSVG';

const ScrollElement = () => {
  return (
    <>
      <ScrollElementSVG style={styles.scrollElement} />
      <View style={styles.elementContent}>
        <Heart_Sel style={styles.heart} />
        <Bike2 style={styles.bike2} />
        <View style={styles.textSection}>
          <Text style={styles.text1}>Road Bike</Text>
          <Text style={styles.text2}>PEUGEOT - LR01 </Text>
          <Text style={styles.text3}>$ 1,999.99</Text>
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
