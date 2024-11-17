import { View, Text } from 'react-native'
import React from 'react'
import { Link } from 'expo-router'

export default function Page() {
  return (
    <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
      <Text style={{fontSize:30}}>Blog page</Text>
      <Text style={{fontSize:20}}> <Link href={'/about'}>Go to about </Link></Text>
    </View>
  )
}   