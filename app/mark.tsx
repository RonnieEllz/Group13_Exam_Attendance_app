import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  FlatList,
  TouchableOpacity,
  Pressable,
} from "react-native";
import tw from "twrnc";
import { useNavigation } from "@react-navigation/native";
import { useCameraPermissions } from "expo-camera";
import { Link } from "expo-router";


interface Student {
  id: string;
  name: string;
  regNo: string;
  gender: string;
  status: "green" | "orange" | "red";
}

const students: Student[] = [
  {
    id: "1",
    name: "Daniel Medson",
    regNo: "BED/COM/48/21",
    gender: "Male",
    status: "red",
  },
  {
    id: "2",
    name: "Samuel Chihana",
    regNo: "BED/COM/08/22",
    gender: "Male",
    status: "red",
  },
  {
    id: "3",
    name: "Pleasant Ainan",
    regNo: "BSC/INF/18/22",
    gender: "Male",
    status: "red",
  },
  {
    id: "4",
    name: "Ronald Longwe",
    regNo: "BSC/INF/12/21",
    gender: "Male",
    status: "red",
  },
  {
    id: "5",
    name: "Walunji Kumwenda",
    regNo: "BSC/COM/38/22",
    gender: "Male",
    status: "red",
  },
  {
    id: "6",
    name: "Chipulumutso Phiri",
    regNo: "BSC/COM/01/20",
    gender: "Male",
    status: "red",
  },
];

export default function Mark() {
  const [permission, requestPermission] = useCameraPermissions();
  const isPermissionGranted = Boolean(permission?.granted);

  const [searchTerm, setSearchTerm] = useState("");
  const [filteredStudents, setFilteredStudents] = useState(students);
  const navigation = useNavigation();

  const handleSearch = (text: string) => {
    setSearchTerm(text);
    setFilteredStudents(
      students.filter(
        (student) =>
          student.name.toLowerCase().includes(text.toLowerCase()) ||
          student.regNo.toLowerCase().includes(text.toLowerCase()) ||
          student.gender.toLowerCase().includes(text.toLowerCase())
      )
    );
  };

  const getStatusText = (status: string) => {
    switch (status) {
      case "red":
        return "Pending";
      case "orange":
        return "Checked In";
      case "green":
        return "Checked Out";
      default:
        return "Pending";
    }
  };

  const handlePress = (studentId: string) => {
    setFilteredStudents((current) =>
      current.map((student) => {
        if (student.id === studentId) {
          const newStatus =
            student.status === "red"
              ? "orange"
              : student.status === "orange"
              ? "green"
              : "red";
          return { ...student, status: newStatus };
        }
        return student;
      })
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
                  item.status === "red"
                    ? "bg-red-500"
                    : item.status === "orange"
                    ? "bg-orange-500"
                    : "bg-green-500"
                }`}
                onPress={() => handlePress(item.id)}
              >
                <Text style={tw`text-white text-base font-bold`}>
                  {getStatusText(item.status)}
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        )}
      />

      <View style={tw`items-center mb-1`}>
        <Link href={"/scanner"} asChild>
          <TouchableOpacity
            // disabled={!isPermissionGranted}
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
