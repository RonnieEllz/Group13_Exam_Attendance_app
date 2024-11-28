import { Ionicons } from '@expo/vector-icons';
import tw from 'twrnc';
import React from 'react';
import Home from '@/app/Home';
import { View, Text, Image, TouchableOpacity } from 'react-native';

const ProfileInfo = ({ name, email, imageUri }) => (
  <TouchableOpacity
    style={tw`flex-row items-center p-0.5`}
    accessibilityLabel={`Profile info for ${name}`}
  >
    {/* Image */}
    {imageUri ? (
      <Image
        source={{ uri: imageUri }}
        style={tw`w-10 h-10 rounded-full mr-2`}
      />
    ) : (
      <Ionicons name="person-circle-outline" size={40} color="gray" style={tw`mr-2`} />
    )}

  
    <View>
      <Text style={tw`text-l font-bold`}>{name}</Text>
      <Text style={tw`text-gray-500`}>{email}</Text>
    </View>
  </TouchableOpacity>
);

export default ProfileInfo;
