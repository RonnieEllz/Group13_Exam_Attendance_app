import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  TextInput,
  FlatList,
  TouchableOpacity,
  Alert,
} from "react-native";
import tw from "twrnc";
import { useNavigation } from "@react-navigation/native";
import { useCameraPermissions } from "expo-camera";
import { Link } from "expo-router";
import { useRouter } from "expo-router";
import AsyncStorage from '@react-native-async-storage/async-storage';

interface Student {
  id: string;
  name: string;
  regNo: string;
  gender: string;
  status: "Pending" | "Checked In" | "Checked Out";
}

const students: Student[] = [
  {
    id: "1",
    name: "Daniel Medson",
    regNo: "BED/COM/48/21",
    gender: "Male",
    status: "Pending",
  },
  {
    id: "2",
    name: "Samuel Chihana",
    regNo: "BED/COM/08/22",
    gender: "Male",
    status: "Pending",
  },
  {
    id: "3",
    name: "Pleasant Ainan",
    regNo: "BSC/INF/18/22",
    gender: "Female",
    status: "Pending",
  },
  {
    id: "4",
    name: "Ronald Longwe",
    regNo: "BSC/INF/12/21",
    gender: "Male",
    status: "Pending",
  },
  {
    id: "5",
    name: "Walunji Kumwenda",
    regNo: "BSC/COM/38/22",
    gender: "Female",
    status: "Pending",
  },
  {
    id: "6",
    name: "Chipulumutso Phiri",
    regNo: "BSC/COM/01/20",
    gender: "Male",
    status: "Pending",
  },
];

export default function Mark() {
  const [permission, requestPermission] = useCameraPermissions();
  const isPermissionGranted = Boolean(permission?.granted);

  const [searchTerm, setSearchTerm] = useState("");
  const [filteredStudents, setFilteredStudents] = useState<Student[]>([]);
  const navigation = useNavigation();
  const router = useRouter();

  useEffect(() => {
    loadSavedStudents();
  }, []);

  const loadSavedStudents = async () => {
    try {
      const savedStudents = await AsyncStorage.getItem('students');
      if (savedStudents) {
        setFilteredStudents(JSON.parse(savedStudents));
      } else {
        setFilteredStudents(students); 
      }
    } catch (error) {
      console.error('Error loading students:', error);
      setFilteredStudents(students);
    }
  };

  const handleSearch = (text: string) => {
    setSearchTerm(text);
    const savedStudents = filteredStudents.length > 0 ? filteredStudents : students;
    setFilteredStudents(
      savedStudents.filter(
        (student) =>
          student.name.toLowerCase().includes(text.toLowerCase()) ||
          student.regNo.toLowerCase().includes(text.toLowerCase()) ||
          student.gender.toLowerCase().includes(text.toLowerCase())
      )
    );
  };

  const getStatusText = (status: string) => {
    switch (status) {
      case "Pending":
        return "Pending";
      case "Checked In":
        return "Checked In";
      case "Checked Out":
        return "Checked Out";
      default:
        return "Pending";
    }
  };

  const handlePress = async (studentId: string) => {
    const updatedStudents = filteredStudents.map((student) => {
      if (student.id === studentId) {
        const newStatus =
          student.status === "Pending"
            ? "Checked In"
            : student.status === "Checked In"
            ? "Checked Out"
            : "Pending";
        return { ...student, status: newStatus };
      }
      return student;
    });
    
    try {
      await AsyncStorage.setItem('students', JSON.stringify(updatedStudents));
      setFilteredStudents(updatedStudents);
    } catch (error) {
      console.error('Error saving students:', error);
    }
  };

  const handleLogout = () => {
    Alert.alert(
      "Logout",
      "Are you sure you want to log out?",
      [
        {
          text: "Cancel",
          style: "cancel"
        },
        {
          text: "Logout",
          onPress: () => router.replace('/LogIn'),
          style: "destructive"
        }
      ]
    );
  };

  return (
    <View style={tw`flex-1 bg-white p-4`}>
      <View style={tw`flex-row justify-between mb-4`}>
        <Link href="/about" asChild>
          <TouchableOpacity style={tw`bg-gray-200 px-4 py-2 rounded-md`}>
            <Text style={tw`text-black font-semibold`}>About Us</Text>
          </TouchableOpacity>
        </Link>
        
        <TouchableOpacity 
          style={tw`bg-red-500 px-4 py-2 rounded-md`}
          onPress={handleLogout}
        >
          <Text style={tw`text-white font-semibold`}>Logout</Text>
        </TouchableOpacity>
      </View>

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
          <View
            style={tw`flex-row justify-between p-7 border-b bg-white rounded-lg m-1`}
          >
            <View>
              <Text style={tw`text-base`}>{item.name}</Text>
              <Text style={tw`text-base`}>{item.regNo}</Text>
              <Text style={tw`text-base`}>{item.gender}</Text>
            </View>
            <View style={tw`justify-center`}>
              <TouchableOpacity
                style={tw`w-32 h-10 rounded-full justify-center items-center ${
                  item.status === "Pending"
                    ? "bg-red-500"
                    : item.status === "Checked In"
                    ? "bg-orange-500"
                    : "bg-green-500"
                }`}
                onPress={() => handlePress(item.id)}
              >
                <Text style={tw`text-white text-base font-bold`}>
                  {item.status}
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        )}
      />

      <View style={tw`items-center mb-1`}>
        <Link href={"/scanner"} asChild>
          <TouchableOpacity
            style={tw`bg-black p-3 pl-10 pr-10 rounded-full`}
          >
            <Text style={tw`text-white text-xl font-bold text-center`}>
              Scan Code
            </Text>
          </TouchableOpacity>
        </Link>
      </View>
    </View>
  );
}
