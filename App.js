import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import HomeScreen from './screnns/HomeScreen';
import TermsandPrivacy from './screnns/TermsandPrivacy';

export default function App() {
  return (
    <View style={styles.container}>
      <TermsandPrivacy/>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
