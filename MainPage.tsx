import {View, SafeAreaView, StyleSheet} from 'react-native';
import React, {useState} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomePage from './Pages/HomePage/HomePage';
import ProductDetail from './Pages/ProductDetail/ProductDetail';
import BottomNav from './BottomNav';

const Stack = createNativeStackNavigator();

const MainPage = () => {
  return (
    <View style={styles.mainContainer}>
      <SafeAreaView style={styles.safeAreaView}>
        {/* Header */}
        <NavigationContainer>
          <Stack.Navigator id={undefined} initialRouteName="HomePage">
            <Stack.Screen
              name="HomePage"
              component={HomePage}
              options={{headerShown: false}}
            />
            <Stack.Screen
              name="ProductDetail"
              component={ProductDetail}
              options={{headerShown: false}}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </SafeAreaView>
      <BottomNav />
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    backgroundColor: '#242C3B',
    height: '100%',
    width: '100%',
  },
  safeAreaView: {
    flex: 1,
    backgroundColor: '#ffffff00',
  },
});

export default MainPage;
