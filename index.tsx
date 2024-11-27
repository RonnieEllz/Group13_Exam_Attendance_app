import React, { useEffect, useState } from "react";
import { View, Text, Button, FlatList, Alert, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context"; // Safe area import for better device compatibility
import LandingPage from "./Welcome"; // Assuming LandingPage is another component

// Import database functions
import { addStudent, getStudents, markAttendance, createTables } from "./database";

const HomeScreen = () => {
  const [students, setStudents] = useState([]); // State to hold student data

  // Initialize the database and fetch students
  useEffect(() => {
    const initializeDatabase = async () => {
      try {
        await createTables(); // Create tables on initial load
        fetchStudents(); // Fetch students after tables are ready
      } catch (error) {
        Alert.alert("Error", "Failed to initialize database: " + error.message);
      }
    };

    initializeDatabase();
  }, []);

  // Fetch students from the database
  const fetchStudents = async () => {
    try {
      const data = await getStudents(); // Get students from the database
      setStudents(data); // Update state with fetched data
    } catch (error) {
      Alert.alert("Error", "Failed to fetch students: " + error.message);
    }
  };

  // Add a student to the database
  const handleAddStudent = async () => {
    const studentName = "John Doe"; // Replace with input field values
    const registrationNumber = "12345";

    try {
      await addStudent(studentName, registrationNumber);
      Alert.alert("Success", "Student added successfully!");
      fetchStudents(); // Refresh the list after adding
    } catch (error) {
      Alert.alert("Error", "Failed to add student: " + error.message);
    }
  };

  // Mark attendance for a student
  const handleMarkAttendance = async (studentId) => {
    const date = "2024-11-27"; // Replace with dynamic date
    const status = "Present"; // Replace with actual status

    try {
      await markAttendance(studentId, date, status);
      Alert.alert("Success", "Attendance marked successfully!");
    } catch (error) {
      Alert.alert("Error", "Failed to mark attendance: " + error.message);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Students</Text>
      <Button title="Add Student" onPress={handleAddStudent} />
      <FlatList
        data={students}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.studentCard}>
            <Text style={styles.studentText}>Name: {item.name}</Text>
            <Text style={styles.studentText}>Registration Number: {item.registration_number}</Text>
            <Button title="Mark Attendance" onPress={() => handleMarkAttendance(item.id)} />
          </View>
        )}
      />
    </SafeAreaView>
  );
};

// Index Component for Navigation or Landing Page
const Index = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={{ flex: 1 }}>
        {/* LandingPage can be replaced with navigation logic */}
        <LandingPage />
      </View>
    </SafeAreaView>
  );
};

// Styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
  },
  studentCard: {
    marginVertical: 10,
    padding: 10,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 5,
  },
  studentText: {
    fontSize: 16,
    marginBottom: 5,
  },
});

export default Index;
