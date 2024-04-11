import { Image, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { styles } from '../css/style';
import { Link } from 'expo-router';

export default function Cadastro() {
  return (
    <View style={styles.imagemBody}>
      <Image style={styles.imagens} source={require('../../assets/sesi-senai.webp')} />
      <View style={styles.form}>
        <Text style={styles.text}>NOME:</Text>
        <TextInput placeholder='Insira seu nome' style={styles.input}/>
        <Text style={styles.text}>CPF:</Text>
        <TextInput placeholder='Insira sua cpf' style={styles.input}/>
        <Text style={styles.text}>SENHA:</Text>
        <TextInput placeholder='Crie uma senha' style={styles.input}/>
        <Text style={styles.text}>CONFIRME A SENHA:</Text>
        <TextInput placeholder='Confirme a senha' style={styles.input}/>
      </View>

      <View style={styles.formBtn}>
        <Link href={'home'} style={styles.btn}>CADASTRAR</Link>
      </View>
    </View>
  );
}

