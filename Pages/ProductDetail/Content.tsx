import {
  View,
  Button,
  Animated,
  StyleSheet,
  useWindowDimensions,
} from 'react-native';
import React, {useRef} from 'react';
import LinearGradient from 'react-native-linear-gradient';

const Content = ({onExpandDetails}) => {
  const {height} = useWindowDimensions();

  const animatedHeight = useRef<Animated.Value>(
    new Animated.Value(height * 0.2),
  ).current;

  return (
    <Animated.View
      style={{
        height: animatedHeight,
        width: '100%',
        bottom: 0,
        position: 'absolute',
      }}>
      <LinearGradient
        start={{x: 0.0, y: 0}}
        end={{x: 1.0, y: 1.0}}
        colors={['#353F54', '#222834']}
        style={styles.linearGradient}>
        <View
          style={{
            height: '100%',
            width: '100%',
            position: 'absolute',
            bottom: 0,
          }}>
          <Button
            title="Increase"
            onPress={() => {
              Animated.timing(animatedHeight, {
                toValue: height * 0.5,
                duration: 500,
                useNativeDriver: false,
              }).start();
              onExpandDetails(true);
            }}></Button>
          <Button
            title="Decrease"
            onPress={() => {
              Animated.timing(animatedHeight, {
                toValue: height * 0.2,
                duration: 500,
                useNativeDriver: false,
              }).start();
              onExpandDetails(false);
            }}></Button>
        </View>
      </LinearGradient>
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  linearGradient: {
    height: '100%',
    width: '100%',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
});

export default Content;
