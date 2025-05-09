import { colors } from "@/constants/cores";
import Ionicons from "@expo/vector-icons/Ionicons";
import { useState } from "react";
import { StyleSheet, Text, TextInput, View } from "react-native";

type TipoInput = 'email' | 'senha';

interface CampoTextoProps {
    placeholder: string;
    valor: string;
    aoMudar: (texto: string) => void;
    tipo: TipoInput;
    obrigatorio: boolean;
    mostraErro: boolean;
}

export default function CampoTexto({ placeholder, valor, aoMudar, tipo, obrigatorio = false, mostraErro = false }: CampoTextoProps) {
    const campoVazio = obrigatorio && mostraErro && valor.trim() === ''; 
    return (
        <View style={styles.container}>
            <View style={[
                styles.containerInput,
                obrigatorio && campoVazio && styles.containerInputErro
            ]}>
                <Ionicons 
                    name={tipo === 'email' ? 'mail-outline' : 'lock-closed-outline'} 
                    size={24} 
                    color={campoVazio && obrigatorio ? colors.error : colors.primary.roxo900}/>
                <TextInput
                    onChangeText={aoMudar}
                    selectionColor={colors.primary.roxo900}
                    placeholder={placeholder}
                    style={styles.inputText}
                    value={valor}
                    keyboardType={tipo === 'email' ? 'email-address' : 'default'}
                    secureTextEntry={tipo === 'senha'}
                    textContentType={tipo === 'email' ? 'emailAddress' : 'password'}
                    autoCapitalize={tipo === 'email' ? 'none' : undefined}
                    autoCorrect={tipo === 'email' ? false : undefined}
                />
            </View>
            {obrigatorio && campoVazio && (
                <Text style={styles.textoErro}>
                    Este campo é obrigatório!
                </Text>
            )}
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        marginBottom: 16,
    },
    containerInput: {
        alignItems: 'center',
        backgroundColor: '#fff',
        borderColor: '#6200ee',
        borderWidth: 1,
        borderRadius: 24,
        paddingHorizontal: 24,
        paddingVertical: 1,
        opacity: 10,
        elevation: 4,
        gap: 16,
        width: 328,
        height: 80,
        flexDirection: 'row',
    },
    containerInputErro: {
        borderColor: colors.error,
    },
    inputText: {
        fontSize: 24,
        color: colors.neutrals.cinza900,
        height: '100%',
        width: '100%',
        outlineWidth: 0,
    },
    textoErro: {
        color: colors.error,
        marginTop: 4,
        marginLeft: 16,
        fontSize: 14,
    },
})