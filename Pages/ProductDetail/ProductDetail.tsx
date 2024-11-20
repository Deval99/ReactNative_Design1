import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import Header from './Header';
import Content from './Content';

const ProductDetail = ({navigation}) => {
  return (
    <View style={styles.mainView}>
      <Header text={'PEUGEOT - LR01'} navigation={navigation} />
      <Content />
    </View>
  );
};

const styles = StyleSheet.create({
  mainView: {
    backgroundColor: '#242C3B',
    height: '100%',
    width: '100%',
  },
});

export default ProductDetail;
