import { View, Text } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import LandingPage from './Welcome'

export default function index() {
  return (
    <SafeAreaView>
      <View>
        <LandingPage/>
      </View>
  
    </SafeAreaView>

  )
}