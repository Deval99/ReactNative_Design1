import { View, StyleSheet } from 'react-native'
import React from 'react'
import { useFonts } from 'expo-font';
import ScrollElement from './ScrollElement';

const BikeList = () => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [loaded, error] = useFonts({
    'Poppins-Bold': require('../../assets/fonts/Poppins/Poppins-Bold.ttf'),
    'Poppins-Medium': require('../../assets/fonts/Poppins/Poppins-Medium.ttf'),
  });
  return (
    <>
      <View style={styles.main}>
        <View style={styles.row}>
          <View style={[styles.element, styles.left]}>
            <ScrollElement />
          </View>
          <View style={[styles.element, styles.right]}>
            <ScrollElement />
          </View>
        </View>
      </View>
      <View style={styles.main}>
        <View style={styles.row}>
          <View style={[styles.element, styles.left]}>
            <ScrollElement />
          </View>
          <View style={[styles.element, styles.right]}>
            <ScrollElement />
          </View>
        </View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  main: {
    alignItems: 'center',
  },
  row: {
    flexDirection: 'row',
  },
  element: {
    width: '40%',
  },
  left: {
    marginRight: 15,
    marginTop: 25,
  },
  right: {
    marginLeft: 15,
  },
});

export default BikeList;
