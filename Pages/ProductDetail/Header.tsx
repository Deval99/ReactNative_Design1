import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import React from 'react';
import LinearGradient from 'react-native-linear-gradient';
import {useFonts} from 'expo-font';
import LeftArrow from '../../Vectors/Dashboard/LeftArrow';

const Header = ({text, navigation}) => {
  const [_loaded, _error] = useFonts({
    'Poppins-Bold': require('../../assets/fonts/Poppins/Poppins-Bold.ttf'),
  });

  return (
    <View style={headerStyle.header}>
      <LinearGradient
        colors={['#34C8E8', '#3E9AEC', '#4E4AF2']}
        style={headerStyle.linearGradient}
        useAngle={true}
        angle={140}>
        <TouchableOpacity
          style={headerStyle.searchButton}
          onPress={() => {
            navigation.goBack();
          }}>
          <LeftArrow style={headerStyle.searchIcon} />
        </TouchableOpacity>
      </LinearGradient>
      <View style={headerStyle.title}>
        <Text style={[headerStyle.headerText]}>{text}</Text>
      </View>
    </View>
  );
};

const headerStyle = StyleSheet.create({
  headerText: {
    width: 300,
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
    marginStart: 20,
    fontFamily: 'Poppins-Bold',
  },
  title: {
    flexDirection: 'column',
    justifyContent: 'center',
    left: 15,
  },
  searchButton: {
    height: '100%',
    width: '100%',
    zIndex: 2,
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
    zIndex: 1,
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
