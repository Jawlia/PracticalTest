import React from 'react';
import type {Node} from 'react';
import {HomePage} from './app/pages/home-page';
import {SafeAreaView, ScrollView, StatusBar} from 'react-native';

const App: () => Node = () => {
  return (
    <SafeAreaView>
      <StatusBar />
      <ScrollView contentInsetAdjustmentBehavior="automatic">
        <HomePage />
      </ScrollView>
    </SafeAreaView>
  );
};

export default App;
