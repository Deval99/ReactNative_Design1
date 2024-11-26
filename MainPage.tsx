import {View, SafeAreaView, StyleSheet} from 'react-native';
import React, {useState} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomePage from './Pages/HomePage/HomePage';
import ProductDetail from './Pages/ProductDetail/ProductDetail';
import BottomNav from './BottomNav';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const HomePageTabsNavigation = () => {
  return (
    <>
      <SafeAreaView style={styles.safeAreaView}>
        <Tab.Navigator
          id={undefined}
          screenOptions={{
            tabBarStyle: {
              display: 'none',
            },
          }}>
          <Tab.Screen
            name="HomePage"
            component={HomePage}
            options={{headerShown: false}}
          />
        </Tab.Navigator>
      </SafeAreaView>
      <BottomNav />
    </>
  );
};

const MainPage = () => {
  return (
    <View style={styles.mainContainer}>
      <NavigationContainer>
        <Stack.Navigator
          id={undefined}
          initialRouteName="HomePageTabsNavigation">
          <Stack.Screen
            name="HomePageTabsNavigation"
            component={HomePageTabsNavigation}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="ProductDetail"
            component={ProductDetail}
            options={{headerShown: false}}
          />
        </Stack.Navigator>
      </NavigationContainer>
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
    backgroundColor: '#242C3B',
  },
});

export default MainPage;
