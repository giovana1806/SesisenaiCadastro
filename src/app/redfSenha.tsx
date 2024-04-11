import { Image, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { styles } from '../css/style';
import { Link } from 'expo-router';

export default function RedfSenha() {
  return (
    <View style={styles.imagemBody}>
      <Image style={styles.imagens} source={require('../../assets/sesi-senai.webp')} />
      <View style={styles.form}>
        <Text style={styles.text}>REDEFINA SUA SENHA:</Text>
        <TextInput placeholder='Insira a nova senha' style={styles.input}/>
        <Text style={styles.text}>CONFIRME A NOVA SENHA:</Text>
        <TextInput placeholder='Confirme a senha' style={styles.input}/>
      </View>

      <View style={styles.formBtn}>
        <Link href={'home'} style={styles.btn}>SALVAR</Link>
      </View>
    </View>
  );
}

