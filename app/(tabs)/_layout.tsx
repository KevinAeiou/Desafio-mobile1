import { Tabs } from "expo-router";
import Ionicons from "@expo/vector-icons/Ionicons"
import { colors } from "@/constants/cores";

export default function TabLayout() {
    return (
        <Tabs
            screenOptions={{
                tabBarActiveTintColor: colors.primary.roxo900,
                headerStyle: {
                    backgroundColor: colors.primary.roxo900,
                },
                headerShadowVisible: false,
                headerTintColor: '#fff',
                tabBarStyle: {
                    paddingTop: 8,
                    height: 60,
                },
            }}
        >
            <Tabs.Screen 
                name="home" 
                options={{
                    title: 'Home',
                    tabBarIcon: ({ focused }) => (
                        <Ionicons name={focused ? 'home' : 'home-outline'} color={colors.primary.roxo900} size={24}/>
                    ),
                }}
            />
            <Tabs.Screen 
                name="shop" 
                options={{
                    title: 'Shop',
                    tabBarIcon: ({ focused }) => (
                        <Ionicons name={focused ? 'bag' : 'bag-outline'} color={colors.primary.roxo900} size={24}/>
                    ),
                }}
            />
            <Tabs.Screen 
                name="perfil" 
                options={{
                    title: 'Perfil',
                    tabBarIcon: ({ focused }) => (
                        <Ionicons name={focused ? 'person' : 'person-outline'} color={colors.primary.roxo900} size={24}/>
                    ),
                }} 
            />
        </Tabs>
    )
}