
import React, { useState } from 'react';
import { View, Text, TextInput, FlatList, Button, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const students = [
  { id: '1', name: 'Daniel Medson' },
  { id: '2', name: 'Samuel Chihana' },
  { id: '3', name: 'Pleasant Ainan' },
  { id: '4', name: 'Ronald Longwe' },
  { id: '5', name: 'Walunji Kumwenda' },
  { id: '6', name: 'Chipulumutso Phiri' },
];

export default function Home() {
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
    <View style={styles.container}>
      
      <TextInput
        style={styles.searchInput}
        placeholder="Search students..."
        value={searchTerm}
        onChangeText={handleSearch}
      />

      <Text style={styles.title}>Student List</Text>
      
      <FlatList
        data={filteredStudents}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.studentItem}>
            <Text style={styles.studentName}>{item.name}</Text>
          </View>
        )}
      />
      
      <Button
        title="Go to QR Scanner"
        onPress={() => navigation.navigate('Scanner')}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    padding: 16,
  },
  searchInput: {
    borderWidth: 1,
    borderColor: '#D1D5DB', // Light gray color
    borderRadius: 8,
    padding: 10,
    marginBottom: 16,
  },
  title: {
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 8,
  },
  studentItem: {
    padding: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#E5E7EB', // Light gray border color
  },
  studentName: {
    fontSize: 16,
  },
});




