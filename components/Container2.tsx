import { colors } from "@/constants/cores";
import { PropsWithChildren } from "react";
import { StyleSheet, View } from "react-native";


export default function Container2({ children }: PropsWithChildren<{}>) {
    return (
        <View style={styles.container}>
            {children}
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.neutrals.cinza50,
        borderTopLeftRadius: 24,
        borderTopRightRadius: 24,
        paddingHorizontal: 20,
        paddingTop: 20,
        alignItems: 'center',
        justifyContent: 'space-around',
    },
})