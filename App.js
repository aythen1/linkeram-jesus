import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import HomeScreen from './screnns/HomeScreen';
import TermsandPrivacy from './screnns/TermsandPrivacy';
import Faqs from './screnns/Faqs';
import UserList from './screnns/UserList';

export default function App() {
  return (
    <View style={styles.container}>
      <UserList/>
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
