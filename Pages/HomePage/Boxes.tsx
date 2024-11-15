import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import All_Box from '../../Vectors/Dashboard/Dashboard_Boxes/All_Box';
import Electric_Box from '../../Vectors/Dashboard/Dashboard_Boxes/Electric_Box';
import Accessory_Box from '../../Vectors/Dashboard/Dashboard_Boxes/Accessory_Box';
import Road_Box from '../../Vectors/Dashboard/Dashboard_Boxes/Road_Box';
import Mountain_Box from '../../Vectors/Dashboard/Dashboard_Boxes/Mountain_Box';

const Boxes = () => {
  return (
    <View style={boxesStyle.group}>
      <View style={[boxesStyle.box, boxesStyle.one]}>
        <All_Box style={boxesStyle.boxSvg} />
        <Text style={boxesStyle.text}>All</Text>
      </View>
      <View style={[boxesStyle.box, boxesStyle.two]}>
        <Electric_Box />
      </View>
      <View style={[boxesStyle.box, boxesStyle.three]}>
        <Road_Box />
      </View>
      <View style={[boxesStyle.box, boxesStyle.four]}>
        <Mountain_Box />
      </View>
      <View style={[boxesStyle.box, boxesStyle.five]}>
        <Accessory_Box />
      </View>
    </View>
  );
};

const boxesStyle = StyleSheet.create({
    group: {
        width: '90%',
        height: 110,
        alignSelf: 'center',
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    box: {
        width: '15%',
        height: 50,
        top: 20,
        alignItems: 'center',
        justifyContent: 'center',
    },
    boxSvg: {
        position: 'absolute',
    },
    linearGradient: {
        height: 43,
        width: 43,
        marginLeft: 15,
        marginRight: 15,
        borderRadius: 5,
    },
    text: {
        color: '#fff',
        fontFamily: 'Poppins-Medium',
        zIndex: 9999999,
        alignSelf: 'center',
    },
    one: {
        marginTop: 40,
    },
    two: {
        marginTop: 30,
    },
    three: {
        marginTop: 20,
    },
    four: {
        marginTop: 10,
    },
    five: {
        marginTop: 0,
    },
});

export default Boxes;
