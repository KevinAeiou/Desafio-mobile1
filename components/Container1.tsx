import { colors } from "@/constants/cores";
import { PropsWithChildren } from "react";
import { StyleSheet, View } from "react-native";


export default function Container1({ children }: PropsWithChildren<{}>) {
    return (
        <View style={styles.container}>
            {children}
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.primary.roxo900,
    },
})