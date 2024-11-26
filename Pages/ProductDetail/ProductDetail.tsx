import {View, Text, StyleSheet, SafeAreaView} from 'react-native';
import React from 'react';
import Header from './Header';
import Content from './Content';

const ProductDetail = ({navigation}) => {
  return (
    <SafeAreaView style={styles.mainView}>
        <Header text={'PEUGEOT - LR01'} navigation={navigation} />
        <Content />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  mainView: {
    backgroundColor: '#242C3B',
    height: '100%',
    width: '100%',
    flex: 1,
  },
});

export default ProductDetail;
