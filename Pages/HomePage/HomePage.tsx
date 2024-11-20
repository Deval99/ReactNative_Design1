import React from 'react';
import Header from './Header';
import Content from './Content';
import { StyleSheet, View } from 'react-native';


const HomePage = ({navigation}) => {
    return (
        <View style={styles.mainView}>
            <Header />
            <Content navigation={navigation}/>
        </View>
    );
};

const styles = StyleSheet.create({
    mainView: {
        backgroundColor: '#242C3B',
        height: '100%',
        width: '100%',
    },
});

export default HomePage;
