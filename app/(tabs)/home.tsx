import Container1 from "@/components/Container1";
import Container2 from "@/components/Container2";
import ImageViewer from "@/components/ImagemViewer";
import Ionicons from "@expo/vector-icons/Ionicons";
import { StyleSheet, Text, View } from "react-native";

const PlaceholderImage = require('@/assets/images/imagem-perfil.jpg')
export default function HomeScreen() {
    return (
        <Container1>
            <View style={styles.containerHeader}>
                <ImageViewer imgSource={PlaceholderImage} tamanho={40}/>
                <View style={styles.containerHearderSaudacao}>
                    <View style={styles.containerSaudacao}>
                        <Text style={styles.textHeaderSaudacao}>Olá,</Text>
                        <Text style={styles.textHeaderNome}>Mary</Text>
                    </View>
                    <Ionicons name='notifications' color='#fff' size={16}/>
                </View>
            </View>
            <Container2>
            </Container2>
        </Container1>
    )
}

const styles = StyleSheet.create({
    containerHeader: {
        marginHorizontal: 32,
        marginVertical: 16,
        gap: 16,
    },
    containerHearderSaudacao: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    containerSaudacao: {
        flexDirection: 'row',
        gap: 8,
        alignItems: 'baseline',
    },
    textHeaderSaudacao: {
        fontFamily: 'Sora-Regular',
        fontSize: 14,
        fontWeight: 400,
        color: '#fff',
    },
    textHeaderNome: {
        fontFamily: 'Sora-Regular',
        fontWeight: 600,
        fontSize: 16,
        color: '#fff',
    },
})