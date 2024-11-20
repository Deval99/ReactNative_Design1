import {View, StyleSheet, Text} from 'react-native';
import React, {useState} from 'react';
import {useFonts} from 'expo-font';
import ScrollElement, {BikeDetails} from './ScrollElement';

const BikeList = () => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [loaded, error] = useFonts({
    'Poppins-Bold': require('../../assets/fonts/Poppins/Poppins-Bold.ttf'),
    'Poppins-Medium': require('../../assets/fonts/Poppins/Poppins-Medium.ttf'),
  });

  const [obj, _setObj] = useState<BikeDetails[]>([
    {
      name: 'PEUGEOT - LR01 ',
      type: 'Road Bike',
      price: '1,999.99',
    },
    {
      name: 'PEUGEOT - LR02 ',
      type: 'Road Bike',
      price: '1,999.99',
    },
    {
      name: 'PEUGEOT - LR03 ',
      type: 'Road Bike',
      price: '1,999.99',
    },
    {
      name: 'PEUGEOT - LR04 ',
      type: 'Road Bike',
      price: '1,999.99',
    },
  ]);
  return (
    <>
      {obj
        .filter((element, index) => index % 2 !== 0)
        .map((element, index) => (
          <>
            <View style={styles.main}>
              <View style={styles.row}>
                <View style={[styles.element, styles.left]}>
                  <ScrollElement bikeDetails={obj[2 * index]} />
                </View>
                {obj.length > index + 1 ? (
                  <View style={[styles.element, styles.right]}>
                    <ScrollElement bikeDetails={obj[(2 * index) + 1]} />
                  </View>
                ) : (
                  <></>
                )}
              </View>
            </View>
          </>
        ))}
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
