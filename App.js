import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
// import { Header } from 'react-native/Libraries/NewAppScreen';
import Header from './src/Components/Header';

export default function App() {
  return (
    <View >
      <StatusBar style="auto" />
      <Header/>
      
    </View>
  );
}

const styles = StyleSheet.create({
  
});
