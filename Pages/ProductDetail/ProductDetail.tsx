import {View, StyleSheet, SafeAreaView, Image, Animated, useWindowDimensions} from 'react-native';
import React, { useRef } from 'react';
import Header from './Header';
import Content from './Content';

const ProductDetail = ({navigation, route}) => {
  const { height, width } = useWindowDimensions()

  const animatedWidth = useRef<Animated.Value>(new Animated.Value(width*1)).current;
  const animatedHeight = useRef<Animated.Value>(new Animated.Value(height*0.7)).current;

  return (
    <>
      <SafeAreaView style={styles.mainView}>
          <Header text={'PEUGEOT - LR01'} navigation={navigation} />
          <Animated.View style={{height: animatedHeight, width: animatedWidth}}>
            <View style={styles.contentView}>
              <Image source={route.params.product.imageName} style={styles.image} resizeMode='contain' />
            </View>
          </Animated.View>
      </SafeAreaView>
      <Content onExpandDetails={(isExpanded)=>{
        Animated.timing(animatedHeight, {
          toValue: height * (isExpanded ? 0.3 : 0.7),
          duration: 500,
          useNativeDriver: false,
        }).start();
        Animated.timing(animatedWidth, {
          toValue: width * (isExpanded ? 0.8 : 1),
          duration: 500,
          useNativeDriver: false,
        }).start();    
      }} />
    </>
  );
};

const styles = StyleSheet.create({
  mainView: {
    backgroundColor: '#242C3B',
    height: '100%',
    width: '100%',
    flex: 1,
    alignItems: 'center'
  },
  image: {
    height: '100%',
    width: '100%',
    alignSelf: 'center',
  },
  contentView: {
    height: '100%',
    width: '100%',
    justifyContent: 'center'
  }
});

export default ProductDetail;
