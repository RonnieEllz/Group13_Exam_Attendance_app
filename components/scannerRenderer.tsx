import { View, Text } from 'react-native'
import React from 'react'
import ScanScreen from '@/app/home/ScanScreen';


const mockRoute = {
    params: {
      course: "Test Course",
    }
  };
export default function Scan() {
  return (
    <View>
    <ScanScreen route={mockRoute}/>
  </View>
)
}