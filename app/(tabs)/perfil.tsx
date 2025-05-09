import ButtonAcao from "@/components/ButtonAcao";
import ButtonDetalhePerfil from "@/components/ButtonDetalhePerfil";
import Container1 from "@/components/Container1";
import Container2 from "@/components/Container2";
import ImageViewer from "@/components/ImagemViewer";
import { colors } from "@/constants/cores";
import Ionicons from "@expo/vector-icons/Ionicons";
import { router } from "expo-router";
import { StyleSheet, Text, ToastAndroid, TouchableOpacity, View } from "react-native";

const PlaceholderImage = require('@/assets/images/imagem-perfil.jpg')
export default function PerfilScreen() {
    const vaiParaEntrar = () => {
        router.replace('/');
    }
    const showToast = (mensagem: string) => {
        ToastAndroid.show(mensagem, ToastAndroid.SHORT);
    };
    return (
        <Container1>
            <View style={styles.containerHeader}>
                <View style={styles.containerImagem}>
                    <ImageViewer imgSource={PlaceholderImage} />
                    <View style={styles.containerIconeCamera}>
                        <Ionicons name='camera-outline' color={colors.primary.roxo900} size={13}/>
                    </View>
                </View>
                <Text style={styles.text}>Mary</Text>
                <TouchableOpacity style={styles.buttonPerfil}>
                    <Text style={styles.text}>Editar Perfil</Text>
                </TouchableOpacity>
            </View>
            <Container2>
                <View style={styles.containerOpcoes}>
                    <ButtonDetalhePerfil 
                        aoClicado={() => showToast('Detalhes do perfil')}
                        icone= "perfil"
                        titulo="Detalhes do Perfil"
                        />
                    <ButtonDetalhePerfil 
                        aoClicado={() => showToast('Detalhes da conta')}
                        icone= "conta"
                        titulo="Detalhes da Conta"
                        />
                    <ButtonDetalhePerfil 
                        aoClicado={() => showToast('Histórico')}
                        icone= "historico"
                        titulo="Histórico"
                    />
                </View>
                <View style={styles.containerButton}>
                    <ButtonAcao
                        aoClicado={vaiParaEntrar}
                        texto="Sair"
                    />
                </View>
            </Container2>
        </Container1>
    )
}

const styles = StyleSheet.create({
    containerHeader: {
        alignItems: 'center',
        paddingTop: 15,
        gap: 10,
    },
    containerImagem: {
        alignItems: 'center',
    },
    containerIconeCamera: {
        position: 'relative',
        bottom: 12,
        backgroundColor: '#fff',
        borderRadius: 100,
        elevation: 4,
        width: 24,
        height: 24,
        alignItems: 'center',
        justifyContent: 'center',
    },
    containerButton: {
        alignItems: 'center',
    },
    containerItensMenu: {
        backgroundColor: '#000',
        borderTopLeftRadius: 24,
        borderTopRightRadius: 24,
        paddingHorizontal: 20,
        paddingTop: 20,
        height: '100%',
    },
    containerInfoPerfil: {
        flex: 1,
        gap: 8,
        alignItems: 'center'
    },
    containerDetalhes: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        paddingBottom: 32,
    },
    containerOpcoes: {
        gap: 20,
    },
    text: {
        fontSize: 16,
        color: colors.neutrals.cinza50,
        fontWeight: 600,
        fontFamily: 'Sora-Regular',
    },
    textDetalhes: {
        fontSize: 18,
        color: colors.neutrals.cinza900,
        fontFamily: 'Sora-Regular',
    },
    buttonPerfil: {
        backgroundColor: colors.neutrals.cinza900,
        padding: 8,
        borderRadius: 24,
        paddingStart: 24,
        paddingEnd: 24,
        elevation: 4,
        marginBottom: 32,
    },
    buttonDetalhes: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        backgroundColor: '#fff',
        elevation: 4,
        borderRadius: 24,
        width: 330,
        height: 80,
        padding: 24,
        marginTop: 24,
    },
})