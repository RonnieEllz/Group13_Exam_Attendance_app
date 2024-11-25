import React, { useState } from 'react';
import { View, Text, TextInput, FlatList, Button } from 'react-native';
import tw from 'twrnc';
import { useNavigation } from '@react-navigation/native';

const students = [
  { id: '1', name: 'Daniel Medson' },
  { id: '2', name: 'Samuel Chihana' },
  { id: '3', name: 'Pleasant Ainan' },
  { id: '4', name: 'Ronald Longwe' },
  { id: '5', name: 'Walunji Kumwenda' },
  { id: '6', name: 'Chipulumutso Phiri' },
];

export default function mark() {
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredStudents, setFilteredStudents] = useState(students);
  const navigation = useNavigation();

  const handleSearch = (text) => {
    setSearchTerm(text);
    setFilteredStudents(
      students.filter(student =>
        student.name.toLowerCase().includes(text.toLowerCase())
      )
    );
  };

  return (
    <View style={tw`flex-1 bg-white p-4`}>
      <TextInput
        style={tw`border border-gray-300 rounded-md p-3 mb-4`}
        placeholder="Search students..."
        value={searchTerm}
        onChangeText={handleSearch}
      />

      <Text style={tw`text-lg font-semibold mb-2`}>Student List</Text>

      <FlatList
        data={filteredStudents}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={tw`p-3 border-b border-gray-200`}>
            <Text style={tw`text-base`}>{item.name}</Text>
          </View> 
        )}
      />

      <View style={tw`mt-4`}>
        <Button
          title="Go to QR Scanner"
          onPress={() => navigation.navigate('Scanner')}
        />
      </View>
    </View>
  );
}
