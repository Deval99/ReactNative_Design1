import { View, StyleSheet, Text } from 'react-native';
import React from 'react';
import CardComponent from '../../Vectors/Dashboard/Card';
import Bike1 from '../../Vectors/Dashboard/Bike1';
import { useFonts } from 'expo-font';
import All_Box from '../../Vectors/Dashboard/Dashboard_Boxes/All_Box';
import Electric_Box from '../../Vectors/Dashboard/Dashboard_Boxes/Electric_Box';
import Accessory_Box from '../../Vectors/Dashboard/Dashboard_Boxes/Accessory_Box';
import Road_Box from '../../Vectors/Dashboard/Dashboard_Boxes/Road_Box';
import Mountain_Box from '../../Vectors/Dashboard/Dashboard_Boxes/Mountain_Box';

const Content = () => {
    const [loaded, error] = useFonts({
        'Poppins-Bold': require('../../assets/fonts/Poppins/Poppins-Bold.ttf'),
        'Poppins-Medium': require('../../assets/fonts/Poppins/Poppins-Medium.ttf'),
    });
    return (
        <>
            <View style={mainCardStyle.main}>
                <CardComponent style={mainCardStyle.card}/>
                <View style={mainCardStyle.cardContent}>
                    <Bike1/>
                    <Text style={mainCardStyle.text}>30% Off</Text>
                </View>
            </View>
            <View style={boxesStyle.group}>
                    <View style={[boxesStyle.box, boxesStyle.one]}>
                        <All_Box style={boxesStyle.boxSvg}/>
                        <Text style={boxesStyle.text}>All</Text>
                    </View>
                    <View style={[boxesStyle.box, boxesStyle.two]}>
                        <Electric_Box/>
                    </View>
                    <View style={[boxesStyle.box, boxesStyle.three]}>
                        <Road_Box/>
                    </View>
                    <View style={[boxesStyle.box, boxesStyle.four]}>
                        <Mountain_Box/>
                    </View>
                    <View style={[boxesStyle.box, boxesStyle.five]}>
                        <Accessory_Box/>
                    </View>
            </View>
        </>
    );
};

const boxesStyle = StyleSheet.create({
    group: {
        width: '90%',
        height: 80,
        alignSelf: 'center',
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    box: {
        width: '15%',
        height: 50,
        top: 50,
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

const mainCardStyle = StyleSheet.create({
    main: {
        height: 180,
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
        // height: 43,
        // width: 43,
        marginLeft: 15,
        marginRight: 15,
        borderRadius: 5,
    },
    text: {
        color: '#ffffff99',
        fontFamily: 'Poppins-Bold',
        fontSize: 28,
    },
});

export default Content;
