import {View, TouchableOpacity, StyleSheet} from 'react-native';
import React, {useState} from 'react';
import LinearGradient from 'react-native-linear-gradient';
import Nav_Bicycle from './Vectors/Dashboard/Nav_Bicycle';
import Nav_Map from './Vectors/Dashboard/Nav_Map';
import Nav_Cart from './Vectors/Dashboard/Nav_Cart';
import Nav_Person from './Vectors/Dashboard/Nav_Person';
import Nav_Doc from './Vectors/Dashboard/Nav_Doc';
import Nav_Selected_Box from './Vectors/Dashboard/Nav_Selected_Box';

const BottomNav = () => {
  const [selectedTabState, setSelectedTabState] = useState(1);
  return (
    <View style={styles.navigationArea}>
      <View style={styles.navContent}>
        <TouchableOpacity
          style={styles.touchableOpacity}
          onPress={() => {
            setSelectedTabState(1);
          }}>
          {selectedTabState === 1 ? (
            <Nav_Selected_Box style={[styles.selectedBox]} />
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
          style={styles.touchableOpacity}
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
          style={styles.touchableOpacity}
          onPress={() => {
            setSelectedTabState(3);
          }}>
          {selectedTabState === 3 ? (
            <Nav_Selected_Box style={styles.selectedBox} />
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
          style={styles.touchableOpacity}
          onPress={() => {
            setSelectedTabState(4);
          }}>
          {selectedTabState === 4 ? (
            <Nav_Selected_Box style={styles.selectedBox} />
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
          style={styles.touchableOpacity}
          onPress={() => {
            setSelectedTabState(5);
          }}>
          {selectedTabState === 5 ? (
            <Nav_Selected_Box style={styles.selectedBox} />
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
  );
};

const styles = StyleSheet.create({
  touchableOpacity: {
    height: '100%',
    width: 70,
    alignItems: 'center',
    justifyContent: 'center',
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
  navigationArea: {
    backgroundColor: '#ffffff00',
    height: 80,
    marginTop: -10,
    width: '100%',
    zIndex: 0,
  },
  linearGradient: {
    height: '110%',
    width: '100%',
    transform: [{skewY: '-2deg'}],
    borderRadius: 5,
  },
  navContent: {
    position: 'absolute',
    left: 20,
    right: 20,
    zIndex: 1,
    height: 50,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  firstNavIcon: {
    color: '#FFFFFFAA',
  },
  selected: {
    top: -15,
  },
  selectedBox: {
    position: 'absolute',
    top: -15,
  },
});

export default BottomNav;
