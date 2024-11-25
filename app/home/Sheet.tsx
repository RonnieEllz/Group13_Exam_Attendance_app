import { View, Text,Image,TouchableOpacity } from 'react-native'
import React from 'react'
import { TextInput } from 'react-native-gesture-handler'
import tw from 'twrnc';
import { Link } from 'expo-router';

export default function Sheet() {
  return (
    <View>
    {/* <Image
        source={require("./home/assets/images/logo.png")}
        style={tw`w-25 h-25 mb-5`}
      />       */}
    <Text style={tw`text-2xl font-bold mb-10`}>LOG IN</Text>

    <View style={tw` mt-3 p-5 shadow  bg-gray-100 rounded-lg`} >
    <Text style={tw`text font-bold`}>Email</Text>

    {/* <TextInput value={email} onChangeText={setEmail} style={tw`"w-5/5 p-3 rounded-lg bg-white mb-5`} keyboardType="email-address" autoCapitalize="none"/>

     <Text style={tw`font-bold`}>Password</Text>
    <TextInput value={password}  onChangeText={setPassword} style={tw`"w-5/5  p-3 rounded-lg bg-white mb-5`} secureTextEntry/> */}

    <Link href={'/Home'} asChild>
    <TouchableOpacity style={tw`bg-black p-3 pl-15 pr-15 rounded-md`}>
          <Text style={tw`text-white text-x2 font-bold text-center`}>continue</Text>
        </TouchableOpacity>
    </Link>
    </View>
    </View>
  )
}