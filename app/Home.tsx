import ProfileInfo from '@/components/profileInfo';
import { Link, router } from 'expo-router';
import React, { useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import RNPickerSelect from 'react-native-picker-select';
import Icon from 'react-native-vector-icons/Ionicons';
import tw from 'twrnc';

export default function Home() {
  const [course, setCourse] = useState(null);
  const [room, setRoom] = useState(null);

  const handleSubmit = () => {
    if (course && room) {
      router.push('/mark');
    } else {
      alert('Please select both a course and a room');
    }
  };

  return (
    <View style={tw`flex-1 bg-custom-gray  items-center`}>

      <View style={tw`flex-row justify-between items-center w-full p-4 bg-white border-b border-gray-300`}>
        <TouchableOpacity style={tw`p-2`}>
          <Icon name="menu" size={24} color="black" />
        </TouchableOpacity>

        <Text style={tw`text-lg text-x2 font-bold`}>Detapp</Text>
        <TouchableOpacity style={tw`p-2`} onPress={() => router.push("/about")}>
           <ProfileInfo />
        </TouchableOpacity>

      </View>

      <Text style={tw`text-2xl font-bold mt-5 mb-5`}>Welcome to Detapp</Text>

      <View style={tw`w-4/5 bg-white rounded-lg p-5 pt-10 my-2 items-center`}>
        <RNPickerSelect
          onValueChange={(value) => setCourse(value)}
          items={[
            { label: 'COM 311', value: 'com 311' },
            { label: 'COM 312', value: 'com 312' },
            { label: 'COM 313', value: 'com 313' },
            { label: 'COM 314', value: 'com 314' },
            { label: 'COM 315', value: 'com 315' },
          ]}
          placeholder={{ label: 'Course', value: null }}
          style={{
            inputIOS: tw`text-base py-2 px-2 text-center text-black`,
            inputAndroid: tw`text-base py-2 px-2 text-center text-black`,
          }}
        />

        <RNPickerSelect
          onValueChange={(value) => setRoom(value)}
          items={[
            { label: 'GH', value: 'gh' },
            { label: 'WAD', value: 'wad' },
            { label: 'CK1', value: 'ck1' },
            { label: 'CK2', value: 'ck2' },
            { label: 'MW1', value: 'mw1' },
            { label: 'MW2', value: 'mw2' },
          ]}
          placeholder={{ label: 'Room', value: null }}
          style={{
            inputIOS: tw`text-base py-2 px-2 text-center text-black`,
            inputAndroid: tw`text-base py-2 px-2 text-center text-black`,
          }}
        />
        <TouchableOpacity 
          style={tw`bg-black p-2 pl-10 pr-10 rounded-full mt-2`}
          onPress={handleSubmit}
        >
          <Text style={tw`text-white text-base font-bold text-center`}>Submit</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
/*hello*/
