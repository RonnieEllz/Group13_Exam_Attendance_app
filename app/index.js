/*import { StatusBar } from "react-native-web";
import {Text, View} from 'react-native';
import {Link} from 'expo-router';
import { useFonts } from "expo-font";
import {Tabs, Redirect }  from 'expo-router'

export default function App() {
    return(
        <View  className="flex-1 items-center justify-center bg-white">
            <Text className="text-3xl font- ">Aora!</Text>
            <StatusBar style="auto"/>
            <Link href='/home' style={{color: 'blue'}}>Go to Home</Link>
        </View>
    );
}*/

import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import RNPickerSelect, { PickerStyle } from 'react-native-picker-select';
import Icon from 'react-native-vector-icons/Ionicons';

export default function App() {
  const [course, setCourse] = useState(null);
  const [room, setRoom] = useState(null);

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity style={styles.menuButton}>
          <Icon name="menu" size={24} color="black" />
        </TouchableOpacity>

        <Text style={styles.headerTitle}>Detapp</Text>

        <TouchableOpacity style={styles.profileButton}>
          <Icon name="person-circle" size={28} color="black" />
        </TouchableOpacity>
      </View>

      <Text style={styles.heading}>Welcome to Detapp</Text>
      
      <Text style= {styles.instructorText}>Instructor : name</Text>
      
      <View style={styles.dropdownContainer}>
        {/* Course Dropdown */}
        <View style={styles.dropdownSpacing}>
        <RNPickerSelect
          onValueChange={(value) => setCourse(value)}
          items={[
            { label: 'COM 311', value: 'com 311' },
            { label: 'COM 312', value: 'com 312' },
            { label: 'COM 313', value: 'com 313' },
            { label: 'COM 314', value: 'com 314' },
            { label: 'COM 315', value: 'com 315' },
          ]}
          placeholder={{ label: 'Select Course code', value: null }}
          style={{
            inputIOS: styles.pickerInput,
            inputAndroid: styles.pickerInput,
          }}
        />
        </View>

        {/* Room Dropdown */}
        <View style={styles.dropdownSpacing}>
        <RNPickerSelect
          onValueChange={(value) => setRoom(value)}
          items={[
            { label: 'GH', value: 'gh' },
            { label: 'WAD', value: 'wad' },
            { label: 'CK1', value: 'CK1' },
            { label: 'CK2', value: 'CK2' },
            { label: 'MW1', value: 'MW2' },
          ]}
          placeholder={{ label: 'Choose Room', value: null }}
          style={{
            inputIOS: styles.pickerInput,
            inputAndroid: styles.pickerInput,
          }}
        />
        </View>

        {/* Button */}
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Continue</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'lightgrey',
    alignItems: 'center',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    padding: 15,
    backgroundColor: 'white',
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  menuButton: {
    padding: 5,
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  profileButton: {
    padding: 5,
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 20,
    marginBottom: 20,
  },
  instructorText :{
    textAlign: 'left',
    marginLeft:0,
    paddingLeft:0,
    fontWeight: 'bold',
    fontSize: 16,
    marginBottom: 10,
    
  },
  dropdownContainer: {
    width: '80%',
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 20,
    marginVertical: 10,
    alignItems: 'center',
    alignSelf: 'center',
  },
  dropdownSpacing:{
    marginTop:15,
    width:'100%',
  },
  pickerInput: {
    fontSize: 16,
    paddingVertical: 8,
    paddingHorizontal: 10,
    color: 'black',
    textAlign: 'center',
    padding :10,
  },
  button: {
    backgroundColor: 'black',
    borderRadius: 5,
    paddingVertical: 5,
    paddingHorizontal: 10,
    marginTop: 20,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

/*end of code*/

