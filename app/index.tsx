import { View, Text } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Link } from 'expo-router'
import Login from './LogIn'
import Landing from './Home'
import LandingPage from './Welcome'
import AboutUs from './home/about'

export default function index() {
  return (
    <SafeAreaView>
      <View>
   
      <Text>
       Welcoming Page
       </Text>
       <Link href={'/home'} >Go to Mark attendance</Link>
        <AboutUs/>
      </View>
    </SafeAreaView>

  )
}