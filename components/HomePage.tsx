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
      
      <View style={styles.dropdownContainer}>
        {/* Course Dropdown */}
        <RNPickerSelect
          onValueChange={(value) => setCourse(value)}
          items={[
            { label: 'COM_2', value: 'com_2' },
            { label: 'COM_1', value: 'com_1' },
          ]}
          placeholder={{ label: 'Course', value: '
            ' }}
          style={{
            inputIOS: styles.pickerInput,
            inputAndroid: styles.pickerInput,
          }}
        />

        {/* Room Dropdown */}
        <RNPickerSelect
          onValueChange={(value) => setRoom(value)}
          items={[
            { label: 'GH', value: 'gh' },
            { label: 'WAD', value: 'wad' },
          ]}
          placeholder={{ label: 'Room', value: null }}
          style={{
            inputIOS: styles.pickerInput,
            inputAndroid: styles.pickerInput,
          }}
        />

        {/* Button */}
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Submit</Text>
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
  dropdownContainer: {
    width: '80%',
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 20,
    marginVertical: 10,
    alignItems: 'center',
  },
  pickerInput: {
    fontSize: 16,
    paddingVertical: 8,
    paddingHorizontal: 10,
    color: 'black',
    textAlign: 'center',
  },
  button: {
    backgroundColor: 'black',
    borderRadius: 5,
    paddingVertical: 10,
    paddingHorizontal: 20,
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