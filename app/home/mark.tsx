import React, { useState } from 'react';
import { View, Text, TextInput, FlatList, Button, TouchableOpacity } from 'react-native';
import tw from 'twrnc';
import { useNavigation } from '@react-navigation/native';

interface Student {
  id: string;
  name: string;
  regNo: string;
  gender: string;
  status: 'green' | 'orange' | 'red';
}

const students: Student[] = [
  { id: '1', name: 'Daniel Medson', regNo: 'BIT/01/20', gender: 'Male', status: 'green' },
  { id: '2', name: 'Samuel Chihana', regNo: 'BIT/02/20', gender: 'Male', status: 'green' },
  { id: '3', name: 'Pleasant Ainan', regNo: 'BIT/03/20', gender: 'Male', status: 'green' },
  { id: '4', name: 'Ronald Longwe', regNo: 'BIT/04/20', gender: 'Male', status: 'green' },
  { id: '5', name: 'Walunji Kumwenda', regNo: 'BIT/05/20', gender: 'Male', status: 'green' },
  { id: '6', name: 'Chipulumutso Phiri', regNo: 'BIT/06/20', gender: 'Male', status: 'green' },
];

export default function Mark() {
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

  const handlePress = (studentId: string) => {
    setFilteredStudents(current =>
      current.map(student => {
        if (student.id === studentId) {
          const newStatus = student.status === 'green' ? 'orange' 
            : student.status === 'orange' ? 'red' 
            : 'green';
          return { ...student, status: newStatus };
        }
        return student;
      })
    );
  };

  const getStatusText = (status: string) => {
    switch (status) {
      case 'red': return 'Status';
      case 'orange': return 'Checked In';
      default: return 'Checked out';
    }
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
          <View style={tw`flex-row justify-between p-7 border-b bg-white rounded-lg m-1`}>
            <View>
              <Text style={tw`text-base`}>{item.name}</Text>
              <Text style={tw`text-base`}>{item.regNo}</Text>
              <Text style={tw`text-base`}>{item.gender}</Text>
            </View> 
            <View style={tw`justify-center`}>
              <TouchableOpacity
                style={tw`w-32 h-10 rounded-full justify-center items-center ${
                  item.status === 'red' ? 'bg-red-500' : item.status === 'orange' ? 'bg-orange-500' : 'bg-green-500'
                }`}
                onPress={() => handlePress(item.id)}
              >
                <Text style={tw`text-white text-base font-bold`}>{getStatusText(item.status)}</Text>
              </TouchableOpacity>
            </View>
          </View>
        )}
      />

      <View style={tw`items-center mb-1`}>   
        <TouchableOpacity style={tw`bg-black p-3 pl-10 pr-10 rounded-full`} onPress={() => navigation.navigate('Scanner')}>
          <Text style={tw`text-white text-x2 font-bold text-center`}>SCAN QR</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
