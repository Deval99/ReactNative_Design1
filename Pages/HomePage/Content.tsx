import { View, StyleSheet, Text } from 'react-native';
import React from 'react';
import CardComponent from '../../Vectors/card';
import Bike1 from '../../Vectors/bike1';
import LinearGradient from 'react-native-linear-gradient';
import { useFonts } from 'expo-font';

const Content = () => {
    const [loaded, error] = useFonts({
        'Poppins-Bold': require('../../assets/fonts/Poppins/Poppins-Bold.ttf'),
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
            {/* <View style={boxesStyle.group}>
                <View style={boxesStyle.box}>

                </View>
            </View> */}
        </>
    );
};

const boxesStyle = StyleSheet.create({
    group: {
        width: '90%',
        height: 80,
        backgroundColor: '#fff',
        alignSelf: 'center'
    },
    box: {
        width: '15%',
        height: 50,
        backgroundColor: '#f00',
    },
});

const mainCardStyle = StyleSheet.create({
    main: {
        height: 200,
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
