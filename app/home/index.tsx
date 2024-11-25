import { View, Text } from 'react-native'
import React from 'react'
import Drawer from 'expo-router/drawer'
import Home from '../Home'

export default function index() {
  return (
    <View>
    <Drawer/>
    <Home/>
  </View>
)
}