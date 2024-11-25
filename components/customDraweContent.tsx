//use this in the components directory Ronald!! to call out and customise the navigation drawer
import { View, Text, Pressable, Alert } from 'react-native';
import React from 'react';
import tw from 'twrnc';
import { DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

export default function CustomDrawerContent(props: any) {
  const { bottom } = useSafeAreaInsets();

  const showAlert = () => {
    Alert.alert(
      "Logout", 
      "Are you sure you want to log out?", 
      [
        { text: "Cancel", onPress: () => console.log("Cancel Pressed"), style: "cancel" },
        { text: "OK", onPress: () => console.log("OK Pressed") }
      ]
    );
  };

  return (
    <View style={tw`flex-1 bg-[#D9D9D9]`}>
      <View style={tw`p-2 pl-5`}>
         <Text style={tw`text-xl text-bold`}>DETAPP</Text>
        </View>
      <DrawerContentScrollView {...props}>
        <DrawerItemList {...props} />
      </DrawerContentScrollView>
    
     <Pressable 
  onPress={showAlert} 
  style={tw`py-4 px-8 mb-5 bg-black rounded-lg self-center my-4 mt-10 ml-6`}>
        <Text style={tw`text-white text-center`}>Log in</Text>
    </Pressable>
    </View>
  );
}
