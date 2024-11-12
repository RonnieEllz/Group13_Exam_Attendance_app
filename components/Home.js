import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, Button, TouchableOpacity, FlatList, CheckBox, Linking } from 'react-native';
import tailwind from 'tailwind-rn'; 
import { BarCodeScanner } from 'expo-barcode-scanner'; 
import { useNavigation } from '@react-navigation/native';

export default function Home() {
    const navigation = useNavigation();
    const [hasPermission, setPermission] = useState(null);
    const [scanned, setScanned] = useState(false);
    const [searchQuery, setSearchQuery] = useState('');
    const [showStudentList, setShowStudentList] = useState(false);
    const [students, setStudents] = useState([
        { id: '1', name: 'Daniel Medson', regNo: '12345', selected: false },
        { id: '2', name: 'Pleasant Ainan', regNo: '67890', selected: false },
        { id: '3', name: 'Ronald Longwe', regNo: '11223', selected: false },
        { id: '4', name: 'Samuel Chihanas', regNo: '44556', selected: false },
    ]);
    const [currentStudentId, setCurrentStudentId] = useState(null);

    useEffect(() => {
        (async () => {
            const { status } = await BarCodeScanner.requestPermissionsAsync();
            setPermission(status === 'granted');
        })();
    }, []);

    const handleBarCodeScanned = ({ type, data }) => {
        setScanned(true);
        alert(`Bar Code with type ${type} and data ${data} has been scanned`);
        Linking.openURL(data);
    };

    const toggleStudentList = () => {
        setShowStudentList(prev => !prev);
    };

    const handleCheckboxChange = (id) => {
        setStudents(prevStudents =>
            prevStudents.map(student =>
                student.id === id ? { ...student, selected: !student.selected } : student
            )
        );
    };

    const handleSearchChange = (text) => {
        setSearchQuery(text);
    };

    const filteredStudents = students.filter(student => 
        student.name.toLowerCase().includes(searchQuery.toLowerCase())
    );

    if (hasPermission === null) {
        return <Text style={tailwind('text-lg text-center')}>Requesting camera permission...</Text>;
    }

    if (hasPermission === false) {
        return <Text style={tailwind('text-lg text-center')}>No access to camera</Text>;
    }

    return (
        <View style={tailwind('flex-1 bg-white justify-between')}>
        
            <View style={tailwind('mx-4 mt-10')}>
                <TextInput
                    style={tailwind('border p-2 rounded-md')}
                    placeholder="Search for a student"
                    value={searchQuery}
                    onChangeText={handleSearchChange}
                />
            </View>

        
            <View style={tailwind('mt-6 mx-4')}>
                <TouchableOpacity onPress={toggleStudentList} style={tailwind('flex-row items-center')}>
                    <Text style={tailwind('text-xl font-bold mr-2')}>Student List</Text>
                    <Text style={tailwind('text-lg')}>{showStudentList ? '▲' : '▼'}</Text>
                </TouchableOpacity>
                {showStudentList && (
                    <FlatList
                        data={filteredStudents}
                        renderItem={({ item }) => (
                            <View style={tailwind('flex-row items-center p-2 border-b')}>
                                <CheckBox
                                    value={item.selected}
                                    onValueChange={() => handleCheckboxChange(item.id)}
                                    style={tailwind('mr-2')}
                                />
                                <Text style={tailwind('flex-1')}>{item.name}</Text>
                                <Text style={tailwind('mr-2')}>Reg: {item.regNo}</Text>
                            </View>
                        )}
                        keyExtractor={item => item.id}
                    />
                )}
            </View>

            
            <View style={tailwind('mx-4 mt-6')}>
                <TouchableOpacity
                    style={tailwind('bg-blue-500 p-3 rounded-md')}
                    onPress={() => navigation.navigate('Scanner')}>
                    <Text style={tailwind('text-white text-center text-xl')}>Scan QR Code</Text>
                </TouchableOpacity>
            </View>

            
            {scanned && (
                <View style={tailwind('flex-1 justify-center items-center')}>
                    <BarCodeScanner
                        onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
                        style={tailwind('absolute top-0 left-0 right-0 bottom-0')}
                    />
                    <Text style={tailwind('text-white text-lg')}>Scanning...</Text>
                </View>
            )}
        </View>
    );
}
