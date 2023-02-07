import React, { useRef } from 'react';
import { StatusBar } from 'expo-status-bar';
import { AppState, StyleSheet, Text, View } from 'react-native';
// import { Header } from 'react-native/Libraries/NewAppScreen';
import Header from './src/Components/Header';
import Body from './src/Components/Body';
import BottomBar from './src/Components/BottomBar';

export default function App() {
  const appState = useRef(AppState.currentState);
  return (
    <View className="flex justify-around m-0 p-0">
      <Header/>
      <Body/>
      <BottomBar/>
      <StatusBar translucent="true"  />
    </View>
  );
}

