import React from 'react';
import { Stack,router } from 'expo-router';
import { Button } from 'react-native';

export default function Layout() {
  return (
    <Stack screenOptions={{
      headerStyle:{
        backgroundColor:'blue'
      }, 
      headerTintColor:'white'
    }}>
      <Stack.Screen  name='index' options={{headerTitle:'Home', headerRight: () =><Button onPress={()=> {router.push('/contact')}} title='Contact'/>}}/>
      <Stack.Screen  name='about' options={{headerTitle:'about'}}/>
      <Stack.Screen  name='(tabs)' options={{headerTitle:'The blog box'}}/>
    </Stack>
  )
 
}
 