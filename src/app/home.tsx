import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { styles } from '../css/style';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Salvo com sucesso!</Text>
      <StatusBar style="auto" />
    </View>
  );
}

