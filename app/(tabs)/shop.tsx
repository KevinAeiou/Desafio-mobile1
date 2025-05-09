import { colors } from "@/constants/cores";
import { StyleSheet, Text, View } from "react-native";


export default function ShopScreen() {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>Tela produtos</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.primary.roxo900,
        justifyContent: 'center',
        alignItems: 'center',
    },
    text: {
        color: '#fff',
    },
})