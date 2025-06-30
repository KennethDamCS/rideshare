import { Text, View, StatusBar } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import "./global.css";

export default function HomeScreen() {
    return (
        <SafeAreaView style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'white' }}>
            <Text style={{ fontSize: 24, color: 'red' }}>
                UBER CLONE
            </Text>
        </SafeAreaView>
    );
}

