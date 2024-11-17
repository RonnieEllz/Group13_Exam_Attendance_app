import { View, Text, Button } from 'react-native'
import React from 'react'
import { Link } from 'expo-router'

export default function Page() {
  return (
    <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
      <Text style={{fontSize:30}}>Welcome to ur page</Text>
      <Link href={'/about'}>Go to about </Link>
      <Link href={'/blog'} asChild>
      <Button  title='Got to blog'></Button>
      </Link>
      <Link href={'/contact'} asChild>
      <Button  title='Go to contact page'></Button>
      </Link>
      <Link href={'/(tabs)/feed'} asChild>
      <Button  title='go to tabs'></Button>
      </Link>
    </View>

  )  
}