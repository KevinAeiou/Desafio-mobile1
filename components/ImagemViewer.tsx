import {Image, type ImageSource } from 'expo-image';
import { StyleSheet } from 'react-native';


interface ImageViewerProps {
    imgSource: ImageSource;
    tamanho?: number;
}

export default function ImageViewer({ imgSource, tamanho = 96 }: ImageViewerProps) {
    return (
        <Image source={imgSource} style={[
            styles.image,
            {
                width: tamanho,
                height: tamanho,
            }
        ]} />
    )
}

const styles = StyleSheet.create({
    image: {
        borderRadius: 24,
    }
})