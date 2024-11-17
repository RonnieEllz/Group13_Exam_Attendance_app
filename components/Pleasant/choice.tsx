import React, { useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import RNPickerSelect from 'react-native-picker-select';
import Icon from 'react-native-vector-icons/Ionicons';
import tw from 'twrnc';

export default function App() {
  const [course, setCourse] = useState(null);
  const [room, setRoom] = useState(null);

  return (
    <View style={tw`flex-1 bg-lightgrey items-center`}>
      {/* Header */}
      <View style={tw`flex-row justify-between items-center w-full p-4 bg-white border-b border-gray-300`}>
        <TouchableOpacity style={tw`p-2`}>
          <Icon name="menu" size={24} color="black" />
        </TouchableOpacity>

        <Text style={tw`text-lg font-bold`}>Detapp</Text>

        <TouchableOpacity style={tw`p-2`}>
          <Icon name="person-circle" size={28} color="black" />
        </TouchableOpacity>
      </View>

      <Text style={tw`text-2xl font-bold mt-5 mb-5`}>Welcome to Detapp</Text>

      <View style={tw`w-4/5 bg-white rounded-lg p-5 my-2 items-center`}>
        {/* Course Dropdown */}
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

        {/* Room Dropdown */}
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

        {/* Button */}
        <TouchableOpacity style={tw`bg-black rounded p-3 mt-5`}>
          <Text style={tw`text-white text-base font-bold text-center`}>Submit</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
/*hello*/