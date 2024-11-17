import React, {useState} from "react";
import { Text, View, TextInput, TouchableOpacity} from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import tw  from "twrnc";
const Login= () => {
    const [email,setEmail] = useState(' ');
    const [password, setPassword]=  useState(' ');

return(
    <View style={tw`flex-1 justify-center items-center  bg-custom-gray w-1/4`}> 

    <Text style={tw`text-2xl font-bold mb-10`}>LOG IN</Text>

    <View style={tw` mt-5 p-4 shadow  bg-gray-200 rounded-lg w-4/5`} >
    <Text style={tw`text font-bold`}>Email</Text>

    <TextInput value={email} onChangeText={setEmail} style={tw`"w-5/5 p-4 rounded-lg bg-white mb-5`} keyboardType="email-address" autoCapitalize="none"/>

     <Text style={tw`font-bold`}>Password</Text>
    <TextInput value={password}  onChangeText={setPassword} style={tw`"w-5/5  p-4 rounded-lg bg-white mb-5`} secureTextEntry/>

    <View style = {tw`items-center justify-center mt-4`}>
    <TouchableOpacity style={tw`bg-black p-3 rounded-lg w-2/5 items-center h-10` }>
    <Text style={tw`text-white items-center font-bold mb-7`}> Continue </Text>       
    </TouchableOpacity>

        <TouchableOpacity>
            <Text style={tw`underline text-black`}>create account</Text>
        </TouchableOpacity>
        </View>

    </View>
    
    </View>
);
};

export default Login;
