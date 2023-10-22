import { StyleSheet, Text, View } from 'react-native';
import OnBoarding from './screens/OnBoarding';

export default function App() {
  return (
    <OnBoarding/>
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