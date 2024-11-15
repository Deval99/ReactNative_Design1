/* eslint-disable @typescript-eslint/no-unused-vars */
import React from 'react';

import {
  View,
  SafeAreaView,
  Text,
  StyleSheet,
  ScrollView
} from 'react-native';
import HomePage from './Pages/HomePage/HomePage';

function App() {
  return (
    <>
      {/* <SafeAreaView> */}
        <HomePage />
      {/* </SafeAreaView> */}
    </>
  );
}

let styles = StyleSheet.create({
})

export default App;