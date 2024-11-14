
// import React, { useState, useEffect } from 'react';
// import { Text, View, StyleSheet, Button, Linking } from 'react-native';
// import { BarCodeScanner } from 'expo-barcode-scanner';

// export default function Scanner() {
//     const [hasPermission, setHasPermission] = useState(null);
//     const [scanned, setScanned] = useState(false);

//     useEffect(() => {
//         (async () => {
//             const { status } = await BarCodeScanner.requestPermissionsAsync(); // corrected method name
//             setHasPermission(status === 'granted');
//         })();
//     }, []);
    
//     const handleBarcodeScanned = ({ type, data }) => { // fixed typo in function name
//         setScanned(true);
//         alert(`Bar code with type ${type} and data ${data} has been scanned`); // fixed template literals
//         Linking.openURL(data); // fixed the URL opening
//     }

//     if (hasPermission === null) {
//         return <Text>Requesting for Camera permission</Text>;
//     }

//     if (hasPermission === false) {
//         return <Text>No access to Camera</Text>;
//     }

//     return (
//         <View style={styles.container}>
//             <BarCodeScanner 
//                 onBarCodeScanned={scanned ? undefined : handleBarcodeScanned} 
//                 style={StyleSheet.absoluteFillObject} 
//             />
//             {scanned && (
//                 <Button 
//                     title="Tap to Scan again" 
//                     onPress={() => setScanned(false)} 
//                 />
//             )}
//         </View>
//     );
// }

// const styles = StyleSheet.create({ // fixed typo in StyleSheet
//     container: {
//         flex: 1,
//         flexDirection: 'column', // fixed typo (flextDirection -> flexDirection)
//         justifyContent: 'center', // fixed typo (justfyContent -> justifyContent)
//         alignItems: 'center',
//     }
// });
import React, { useState, useEffect } from 'react';
import { Text, View, Button, Linking } from 'react-native';
import { BarCodeScanner } from 'expo-barcode-scanner';
import tailwind from 'tailwind-rn'; // Import tailwind-rn

export default function Scanner() {
    const [hasPermission, setHasPermission] = useState(null);
    const [scanned, setScanned] = useState(false);

    useEffect(() => {
        (async () => {
            const { status } = await BarCodeScanner.requestPermissionsAsync();
            setHasPermission(status === 'granted');
        })();
    }, []);
    
    const handleBarcodeScanned = ({ type, data }) => {
        setScanned(true);
        alert(`Bar code with type ${type} and data ${data} has been scanned`);
        Linking.openURL(data);
    }

    if (hasPermission === null) {
        return <Text style={tailwind('text-center text-xl mt-4')}>Requesting for Camera permission</Text>;
    }

    if (hasPermission === false) {
        return <Text style={tailwind('text-center text-xl mt-4')}>No access to Camera</Text>;
    }

    return (
        <View style={tailwind('flex-1 justify-center items-center')}>
            <BarCodeScanner 
                onBarCodeScanned={scanned ? undefined : handleBarcodeScanned} 
                style={tailwind('absolute inset-0')} 
            />
            {scanned && (
                <Button 
                    title="Tap to Scan again" 
                    onPress={() => setScanned(false)} 
                    style={tailwind('mt-4')} 
                />
            )}
        </View>
    );
}
