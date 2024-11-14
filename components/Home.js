// // import {View, Button, Stylesheet} from 'react-native';
// // import react from 'react';
// // import { useNavigation } from '@react-navigation/native';
// // export default function Home(){
// //     const navigation = useNavigation();
// //     return(
// //         <view Style = {Stylesheet.container}> <Button title='Scan' onPress = {() => navigation.navigate('Scanner')}/>
        
// //         </view>

// //     );
// // }
// // const Style = Stylesheet.create({
// //     container : {
// //         flex : 1,
// //         backgroundColor: '#fff',
// //         alignItems: 'Center',
// //         justfyContent: 'center',
// //     }
// // });
// import React from 'react';
// import { View, Button } from 'react-native';
// import tailwind from 'tailwind-rn'; // Import tailwind-rn
// import { useNavigation } from '@react-navigation/native';

// export default function Home() {
//     const navigation = useNavigation();

//     return (
//         <View style={tailwind('flex-1 bg-white items-center justify-center')}>
//             <Button
//                 title='Scan'
//                 onPress={() => navigation.navigate('Scanner')}
//             />
//         </View>
//     );
// }
import React, { useState } from 'react';
import { View, Text, TextInput, FlatList, Button } from 'react-native';
import tailwind from 'tailwind-rn'; // Import Tailwind for styling
import { useNavigation } from '@react-navigation/native';

// Example student data
const students = [
  { id: '1', name: 'Daniel Medson' },
  { id: '2', name: 'Samuel Chihana' },
  { id: '3', name: 'Pleasant Ainan' },
  { id: '4', name: 'Ronald Longwe' },
  { id: '5', name: 'Walunji Kumwenda' },
  { id: '6', name: 'Chipulumutso phiri' },
];

export default function Home() {
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredStudents, setFilteredStudents] = useState(students);
  const navigation = useNavigation();

  // Handle search input
  const handleSearch = (text) => {
    setSearchTerm(text);
    setFilteredStudents(
      students.filter(student =>
        student.name.toLowerCase().includes(text.toLowerCase())
      )
    );
  };

  return (
    <View style={tailwind('flex-1 bg-white p-4')}>
      {/* Search Bar */}
      <TextInput
        style={tailwind('border border-gray-300 rounded-md p-2 mb-4')}
        placeholder="Search students..."
        value={searchTerm}
        onChangeText={handleSearch}
      />

      {/* Student List */}
      <Text style={tailwind('text-lg font-semibold mb-2')}>Student List</Text>
      <FlatList
        data={filteredStudents}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={tailwind('p-2 border-b border-gray-200')}>
            <Text style={tailwind('text-md')}>{item.name}</Text>
          </View>
        )}
      />

      {/* QR Scanner Button */}
      <Button
        title="Go to QR Scanner"
        onPress={() => navigation.navigate('Scanner')}
      />
    </View>
  );
}

