import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,Alert } from 'react-native';
 
//tudo que vai aparecer na tela É DENTRO DO VIEW
//tudo que é função ou lógica é FORA da function principal sendo iniciada pelo const;
export default function App() {
  const [UserInput, setInputUser] = useState('');//estamos definindo o estado inicial do Userinput e o estado da função
  const clicou = () =>{//função so pode ser criada fora da function principaç(return());
    Alert.alert('Mensagem do user', UserInput || 'Nenhuma mensagem digitada'); //aqui estamos mostrando a mensagem do usuario e caso nao tenha nenhuma mensagem digitada vai mostrar a mensagem ao lado 
  }
  return (
    
    <View style={styles.container}>
      <TextInput
      style = {styles.botao}//para estilizar
      value = {UserInput}
      onChangeText={setUserinput} //a função setada dentro vai mudar o estado do texto atual
      />
      <TouchableOpacity OnPress = {() => {Alert.alert('TEXTO CLICADO')}}>
        <Text style = {styles.texto}>TESTE</Text> 
      { /*Sempre criar os elementos dentro do view para aparecer na tela*/ }
      </TouchableOpacity>
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
