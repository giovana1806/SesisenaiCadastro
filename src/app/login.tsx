import { StatusBar } from 'expo-status-bar';
import { Image, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { styles } from '../css/style';
import { Link } from 'expo-router';

export default function Login() {
  return (
    <View style={styles.imagemBody}>
      <Image style={styles.imagens} source={require('../../assets/sesi-senai.webp')} />
      <View style={styles.form}>
        <Text style={styles.text}>LOGIN:</Text>
        <TextInput placeholder='Insira seu CPF' style={styles.input}/>
        <Text style={styles.text}>SENHA:</Text>
        <TextInput placeholder='Insira sua senha' style={styles.input}/>

        <View style={styles.subBtn}>
          <TouchableOpacity><Link href={'cadastro'} style={styles.subBtn1}>cadastrar</Link></TouchableOpacity>
          <TouchableOpacity><Link href={'redfSenha'} style={styles.subBtn1}>esqueci a senha</Link></TouchableOpacity>
        </View>
      </View>

      <View style={styles.formBtn}>
        <Link href={'home'} style={styles.btn}>ENTRAR</Link>
      </View>
    </View>
  );
}

