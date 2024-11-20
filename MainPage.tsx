import {
  View,
  SafeAreaView,
  StyleSheet,
  Image,
  TouchableOpacity,
} from 'react-native';
import React, {useState} from 'react';
import LinearGradient from 'react-native-linear-gradient';
import Nav_Bicycle from './Vectors/Dashboard/Nav_Bicycle';
import Nav_Map from './Vectors/Dashboard/Nav_Map';
import Nav_Cart from './Vectors/Dashboard/Nav_Cart';
import Nav_Person from './Vectors/Dashboard/Nav_Person';
import Nav_Doc from './Vectors/Dashboard/Nav_Doc';
import Nav_Selected_Box from './Vectors/Dashboard/Nav_Selected_Box';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomePage from './Pages/HomePage/HomePage';

const Stack = createNativeStackNavigator();

const MainPage = () => {
  const [selectedTabState, setSelectedTabState] = useState(1);

  return (
    <View style={styles.mainContainer}>
      <SafeAreaView style={styles.safeAreaView}>
        {/* Header */}
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen
              name="1"
              component={HomePage}
              options={{headerShown: false}}
            />
          </Stack.Navigator>
        </NavigationContainer>
        <View style={styles.background}>
          <Image
            source={require('./assets/images/bg_rect.png')}
            style={styles.bgImage}
          />
        </View>
      </SafeAreaView>
      <View style={styles.navigationArea}>
        <View style={styles.navContent}>
          <TouchableOpacity
            onPress={() => {
              setSelectedTabState(1);
            }}>
            {selectedTabState === 1 ? (
              <Nav_Selected_Box style={[styles.selectedBox, {left: -15}]} />
            ) : (
              <></>
            )}
            <Nav_Bicycle
              style={[
                styles.firstNavIcon,
                selectedTabState === 1 ? styles.selected : {},
              ]}
            />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              setSelectedTabState(2);
            }}>
            {selectedTabState === 2 ? (
              <Nav_Selected_Box style={styles.selectedBox} />
            ) : (
              <></>
            )}
            <Nav_Map
              style={[
                styles.firstNavIcon,
                selectedTabState === 2 ? styles.selected : {},
              ]}
            />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              setSelectedTabState(3);
            }}>
            {selectedTabState === 3 ? (
              <Nav_Selected_Box style={[styles.selectedBox, {left: -17}]} />
            ) : (
              <></>
            )}
            <Nav_Cart
              style={[
                styles.firstNavIcon,
                selectedTabState === 3 ? styles.selected : {},
              ]}
            />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              setSelectedTabState(4);
            }}>
            {selectedTabState === 4 ? (
              <Nav_Selected_Box style={[styles.selectedBox, {left: -22}]} />
            ) : (
              <></>
            )}
            <Nav_Person
              style={[
                styles.firstNavIcon,
                selectedTabState === 4 ? styles.selected : {},
              ]}
            />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              setSelectedTabState(5);
            }}>
            {selectedTabState === 5 ? (
              <Nav_Selected_Box style={[styles.selectedBox, {left: -23}]} />
            ) : (
              <></>
            )}
            <Nav_Doc
              style={[
                styles.firstNavIcon,
                selectedTabState === 5 ? styles.selected : {},
              ]}
            />
          </TouchableOpacity>
        </View>
        <LinearGradient
          colors={['#363E51', '#181C24']}
          style={styles.linearGradient}
          useAngle={true}
          angle={140}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    backgroundColor: '#242C3B',
    height: '100%',
    width: '100%',
  },
  background: {
    position: 'absolute',
    bottom: -10,
    right: 0,
    zIndex: -1,
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
    padding: 10,
  },
  bgImage: {
    position: 'absolute',
  },
  safeAreaView: {
    flex: 1,
    backgroundColor: '#ffffff00',
  },
  navigationArea: {
    backgroundColor: '#ffffff00',
    height: 80,
    width: '100%',
  },
  linearGradient: {
    height: '110%',
    width: '100%',
    transform: [{skewY: '-2deg'}],
    borderRadius: 5,
  },
  navContent: {
    position: 'absolute',
    top: 25,
    left: 30,
    right: 30,
    zIndex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  firstNavIcon: {
    color: '#FFFFFFAA',
  },
  selected: {
    top: -10,
  },
  selectedBox: {
    position: 'absolute',
    top: -28,
    left: -20,
  },
});

export default MainPage;
