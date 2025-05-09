import Container1 from "@/components/Container1";
import Container2 from "@/components/Container2";
import FormularioEntrar from "@/components/FormulaioEntrar";
import { colors } from "@/constants/cores";
import Ionicons from "@expo/vector-icons/Ionicons";
import { StyleSheet, Text, ToastAndroid, TouchableOpacity, View } from "react-native";
import { useFonts } from "expo-font";


export default function Index() {
  const [fontsLoaded] = useFonts({
    'Sora-Regular':require('../assets/fonts/Sora-Regular.ttf'),
  });
  if (!fontsLoaded) {
    return <Text>Carregando...</Text>  
  }
  const showToast = (mensagem: string) => {
    ToastAndroid.show(mensagem, ToastAndroid.SHORT);
  };
  return (
    <Container1>
        <View style={styles.containerHeader}>
            <Ionicons name='wallet-outline' size={95} color="#fff" />
            <View style={styles.containerTextNameApp}>
              <Text style={styles.textNameApp}>Shopping Coins</Text>
            </View>
        </View>
        <Container2>
          <FormularioEntrar />
          <View style={styles.containerFooter}>
            <TouchableOpacity onPress={() => showToast('Registrar')}>
              <Text style={styles.textFooter}>Registrar-se</Text>
            </TouchableOpacity>
              <Text style={styles.textFooter}> | </Text>
            <TouchableOpacity onPress={() => showToast('Recuperar senha')}>
              <Text style={styles.textFooter}>Recuperar senha</Text>
            </TouchableOpacity>
          </View>
        </Container2>
    </Container1>
  );
}

const styles = StyleSheet.create({
  containerHeader: {
    alignItems: 'center',
    paddingVertical: 40,
  },
  containerTextNameApp: {
    borderRadius: 24,
    backgroundColor: colors.neutrals.cinza900,
    paddingVertical: 8,
    paddingHorizontal: 24,
  },
  containerFooter: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  textNameApp: {
    color: '#fff',
    fontSize: 24,
    fontWeight: 600,
  },
  textFooter: {
    color: colors.neutrals.cinza100,
    fontWeight: 400,
    height: '100%',
  },
})
