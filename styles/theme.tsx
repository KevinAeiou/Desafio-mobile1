import { StyleSheet } from "react-native";

export const theme = {
    fonts: {
        regular: 'Sora-Regular',
        semiBold: 'Sora-SemiBold',
    },
    text: StyleSheet.create({
        default: {
            fontFamily: 'Sora-Regular',
            fontSize: 16,
        },
        title: {
            fontFamily: 'Sora-Bold',
            fontSize: 24,
        },
    }),
};