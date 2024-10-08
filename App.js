import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,Alert } from 'react-native';
 


export default function App() {
  const [UserInput, setInputUser] = useState('');
  const clicou = () =>{
    Alert.alert('Mensagem do user', UserInput || 'Nenhuma mensagem digitada'); 
  }
  return (
    
    <View style={styles.container}>
      <TextInput
      style = {styles.botao}
      value = {UserInput}
      onChangeText={setUserinput} 
      />
      <TouchableOpacity OnPress = {() => {Alert.alert('TEXTO CLICADO')}}>
        <Text style = {styles.texto}>TESTE</Text> 

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
