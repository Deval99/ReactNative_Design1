import { View, SafeAreaView, StyleSheet, Image } from 'react-native';
import React from 'react';
import Header from './Header';
import Content from './Content';

const HomePage = () => {
    return (
        <View style={styles.mainContainer}>
            <SafeAreaView style={styles.safeAreaView}>
                {/* Header */}
                <Header />
                <Content/>
                <View style={styles.background}>
                    <Image source={require('../../assets/images/bg_rect.png')} style={styles.bgImage} />
                </View>
            </SafeAreaView>
        </View>
    );
};

const styles = StyleSheet.create({
    mainContainer: {
        backgroundColor: '#353F54',
        height: '100%',
        width: '100%',
    },
    background: {
        position: 'absolute',
        bottom: 30,
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
    },
});

// transform: [{ skewY: '-10deg' }]

export default HomePage;
