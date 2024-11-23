//use this in the components directory Ronald!! to call out and customise the navigation drawer
import { View, Text, Pressable, Alert } from 'react-native';
import React from 'react';
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
    <View style={{ flex: 1, backgroundColor: '#D9D9D9' }}>
      <View style={{padding:2}}>
         <Text>DETAPP</Text>
        </View>
      <DrawerContentScrollView {...props}>
        <DrawerItemList {...props} />
      </DrawerContentScrollView>
    
      <Pressable 
        onPress={showAlert} 
        style={{
          paddingVertical: 15,
          paddingHorizontal: 30,
          marginBottom: bottom + 20, 
          backgroundColor: 'black',
          borderRadius: 15,
          alignSelf: 'center',
          marginVertical: 15,
          marginTop: 40,
          marginLeft: 25,
        }}
      >
        <Text style={{ color: 'white', textAlign: 'center' }}>Log out</Text>
      </Pressable>
    </View>
  );
}
