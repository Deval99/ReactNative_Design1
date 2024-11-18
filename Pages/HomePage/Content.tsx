import { View, StyleSheet, Text, ScrollView } from 'react-native';
import React from 'react';
import CardComponent from '../../Vectors/Dashboard/Card';
import Bike1 from '../../Vectors/Dashboard/Bike1';
import { useFonts } from 'expo-font';
import Boxes from './Boxes';
import BikeList from './BikeList';

const Content = () => {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const [loaded, error] = useFonts({
        'Poppins-Bold': require('../../assets/fonts/Poppins/Poppins-Bold.ttf'),
        'Poppins-Medium': require('../../assets/fonts/Poppins/Poppins-Medium.ttf'),
    });
    return (
        <>
        <ScrollView style={mainCardStyle.scrollView}>
            <View style={mainCardStyle.main}>
                <CardComponent style={mainCardStyle.card}/>
                <View style={mainCardStyle.cardContent}>
                    <Bike1/>
                    <Text style={mainCardStyle.text}>30% Off</Text>
                </View>
            </View>
            <Boxes/>
            <BikeList />
            <View style={mainCardStyle.spacer}/>
        </ScrollView>
        </>
    );
};

const mainCardStyle = StyleSheet.create({
    spacer: {
        height: 35,
        width: 2,
    },
    scrollView: {
        marginBottom: -5,
    },
    main: {
        height: 210,
        marginTop: 20,
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
