import React, { useEffect, useState } from "react";
import { View, Text, Button, FlatList } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { createTables, addStudent, getStudents, markAttendance } from "./database";

const HomeScreen = () => {
  const [students, setStudents] = useState([]);

  useEffect(() => {
    createTables();
    fetchStudents();
  }, []);

  const fetchStudents = () => {
    getStudents(data => setStudents(data));
  };

  const handleAddStudent = () => {
    addStudent("John Doe", "john.doe@example.com");
    fetchStudents();
  };

  const handleMarkAttendance = studentId => {
    markAttendance(studentId, new Date().toISOString(), "Present");
  };

  return (
    <SafeAreaView style={{ flex: 1, padding: 20 }}>
      <Text style={{ fontSize: 24, marginBottom: 20 }}>Students</Text>
      <Button title="Add Student" onPress={handleAddStudent} />
      <FlatList
        data={students}
        keyExtractor={item => item.id.toString()}
        renderItem={({ item }) => (
          <View style={{ marginVertical: 10 }}>
            <Text>Name: {item.name}</Text>
            <Text>Email: {item.email}</Text>
            <Button title="Mark Attendance" onPress={() => handleMarkAttendance(item.id)} />
          </View>
        )}
      />
    </SafeAreaView>
  );
};

export default HomeScreen;
