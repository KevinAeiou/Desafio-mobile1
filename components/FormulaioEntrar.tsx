import { StyleSheet, Text, View } from "react-native";
import CampoTexto from "./CampoTexto";
import { useState } from "react";
import { colors } from "@/constants/cores";
import ButtonAcao from "./ButtonAcao";
import { router } from "expo-router";


export default function FormularioEntrar() {
    const [email, setEmail] = useState<string>('');
    const [senha, setSenha] = useState<string>('');
    const [erroEmail, setErroEmail] = useState<boolean>(false);
    const [erroSenha, setErroSenha] = useState<boolean>(false);
    
    const campoVazio = ( valor: string ) => {
        return valor.trim() === '';
    }
    const validaCampos = () => {
        if (campoVazio(email)) {
            setErroEmail(true);
            return false
        };
        if (campoVazio(senha)){
            setErroSenha(true);
            return false;
        }
        return true;
    }
    const vaiParaInicio = () => {
        if (validaCampos()) router.replace('/home')
    }
    return (
        <View style={styles.containerForm}>
            <View style={styles.containerTextTitle}>
                <Text style={styles.textTitle}>Login</Text>
            </View>
            <CampoTexto
                valor={email}
                aoMudar={(valor) => {
                    setEmail(valor)
                    setErroEmail(false)
                }}
                placeholder="E-email"
                tipo="email"
                obrigatorio={true}
                mostraErro={erroEmail}
                />
            <CampoTexto 
                valor={senha}
                aoMudar={(valor) => {
                    setSenha(valor)
                    setErroSenha(false)
                }}
                placeholder="Senha"
                tipo="senha"
                obrigatorio={true}
                mostraErro={erroSenha}
            />
            <View style={styles.containerButton}>
                <ButtonAcao aoClicado={vaiParaInicio} texto="Entrar" />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    containerForm: {
        gap: 24,
    },
    containerTextTitle: {
        alignItems: 'center',
    },
    containerButton: {
        marginVertical: 40,
        alignItems: 'center',
    },
    textTitle: {
        color: colors.neutrals.cinza900,
        fontSize: 24,
        fontWeight: 600,
    },
})