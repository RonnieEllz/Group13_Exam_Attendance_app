import React, { useState, useEffect } from 'react';
import { Text, View, Button, Linking } from 'react-native'; 
import { BarCodeScanner } from 'expo-barcode-scanner';
import tailwind from 'tailwind-rn'; 

export default function Scanner() {
    const [hasPermission, setPermission] = useState(null);
    const [scanned, setScanned] = useState(false);

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

    if (hasPermission === null) {
        return <Text style={tailwind('text-lg text-center')}>Requesting camera permission...</Text>; 
    }

    if (hasPermission === false) {
        return <Text style={tailwind('text-lg text-center')}>No access to camera</Text>; 
    }

    return (
        <View style={tailwind('flex-1 justify-center items-center')}>
            <BarCodeScanner
                onBarCodeScanned={scanned ? undefined : handleBarCodeScanned} 
                style={tailwind('absolute top-0 left-0 right-0 bottom-0')}
            />
            {scanned && (
                <Button title="Tap to Scan Again" onPress={() => setScanned(false)} /> 
            )}
        </View>
    );
}
