import { colors } from "@/constants/cores";
import { StyleSheet, Text, TouchableOpacity } from "react-native";

interface ButtonAcaoProps {
    aoClicado: () => void;
    texto: string;
}

export default function ButtonAcao({ aoClicado, texto }: ButtonAcaoProps) {
    return (
        <TouchableOpacity
            onPress={aoClicado}
            style={styles.button}>
            <Text style={styles.text}>{texto}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    button: {
        backgroundColor: colors.primary.roxo900,
        paddingVertical: 16,
        paddingHorizontal: 32,
        borderRadius: 24,
        elevation: 4,
    },
    text: {
        fontSize: 24,
        color: '#fff',
        fontWeight: 600,
        fontFamily: 'Sora-Regular',
    },
})