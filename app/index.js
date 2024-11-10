import { StatusBar } from "react-native-web";
import {Text, View} from 'react-native';
import {Link} from 'expo-router';
import { useFonts } from "expo-font";
import {Tabs, Redirect }  from 'expo-router'

export default function App() {
    return(
        <View  className="flex-1 items-center justify-center bg-white">
            <Text className="text-3xl font- ">Aora!</Text>
            <StatusBar style="auto"/>
            <Link href='/home' style={{color: 'blue'}}>Go to Home</Link>
        </View>
    );
}

