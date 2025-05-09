import { colors } from "@/constants/cores";
import { theme } from "@/styles/theme";
import Ionicons from "@expo/vector-icons/Ionicons";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

interface ButtonDetalhePerfilProps {
    aoClicado: () => void;
    icone: string;
    titulo: string;
}
type IoniconsName = (
    'person-outline' | 'wallet-outline' | 'alert-circle-outline' | 'receipt-outline'
)

export default function ButtonDetalhePerfil({ aoClicado, icone, titulo }: ButtonDetalhePerfilProps) {
    const getIconName = (icone: string): IoniconsName => {
        switch(icone) {
            case 'perfil':
                return 'person-outline';
            case 'conta':
                return 'wallet-outline';
            case 'historico':
                return 'receipt-outline';
            default:
                return 'alert-circle-outline';
        }
    }
    return (
        <TouchableOpacity
            style={styles.buttonDetalhes}
            onPress={aoClicado} >
                <View style={styles.containerButtonDetalhes}>
                    <Ionicons name= {getIconName(icone)} size={28} color={colors.primary.roxo900}/>
                    <Text style={styles.textDetalhes}>{titulo}</Text>
                </View>
                <Ionicons name='arrow-forward-outline' size={32} color='#545454' />
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    containerButtonDetalhes: {
        flexDirection: 'row',
        gap: 12,
        alignItems: 'center',
    },
    textDetalhes: {
        fontSize: 18,
        color: colors.neutrals.cinza900,
        fontFamily: 'Sora-Regular',
    },
    buttonDetalhes: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        backgroundColor: '#fff',
        elevation: 4,
        borderRadius: 24,
        paddingVertical: 24,
        paddingHorizontal: 24,
        width: 330,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.3,
        shadowRadius: 3,
    },
})