import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import LinearGradient from 'react-native-linear-gradient';
import SearchIconSVG from '../../Vectors/SearchIcon';
import { useFonts } from 'expo-font';

const Header = () => {
    const [loaded, error] = useFonts({
        'Poppins-Bold': require('../../assets/fonts/Poppins/Poppins-Bold.ttf'),
    });

    return (
        <View style={headerStyle.header}>
            <View style={headerStyle.title}>
                <Text style={[headerStyle.headerText]}>Choose Your Bike</Text>
            </View>
            {/* <View style={headerStyle.searchButton}>
                <SearchIconSVG style={headerStyle.searchIcon} />
            </View> */}
            <LinearGradient colors={['#34C8E8', '#3E9AEC', '#4E4AF2']} style={headerStyle.linearGradient} useAngle={true} angle={140}>
                <View style={headerStyle.searchButton}>
                    <SearchIconSVG style={headerStyle.searchIcon} />
                </View>
            </LinearGradient>
        </View>
    );
};

const headerStyle = StyleSheet.create({
    headerText: {
        width: 300,
        color: '#fff',
        fontSize: 30,
        fontWeight: 'bold',
        marginStart: 20,
        fontFamily: 'Poppins-Bold',
    },
    title: {
        flexDirection: 'column',
    },
    searchButton: {
        height: '100%',
        width: '100%',
        zIndex: 2,
        // backgroundColor: '#34C8E8',
        // marginEnd: 20,
        // borderRadius: 8,
        justifyContent: 'center',
        alignItems: 'center',
    },
    header: {
        marginTop: 10,
        marginBottom: 10,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    searchIcon: {
    },
    linearGradient: {
        height: 43,
        width: 43,
        marginLeft: 15,
        marginRight: 15,
        borderRadius: 5,
    },
});

export default Header;
