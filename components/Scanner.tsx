import React, { useState, useEffect } from 'react';
import { Text, View, Button, Linking, StyleSheet } from 'react-native';
import { QrCodeScanner } from 'expo-qrcode-scanner';  // Import QrCodeScanner from expo-qrcode-scanner

export default function Scanner() {
    const [hasPermission, setHasPermission] = useState(null);
    const [scanned, setScanned] = useState(false);

    useEffect(() => {
        (async () => {
            // Request permission for camera
            const { status } = await QrCodeScanner.requestPermissionsAsync();  
            setHasPermission(status === 'granted');
        })();
    }, []);

    const handleQrcodeScanned = ({ type, data }) => {
        setScanned(true);
        alert(`Qrcode with type ${type} and data ${data} has been scanned`);
        Linking.openURL(data);  // Open the URL from the QR code
    };

    if (hasPermission === null) {
        return (
            <Text style={styles.permissionText}>
                Requesting camera permission...
            </Text>
        );
    }

    if (hasPermission === false) {
        return (
            <Text style={styles.permissionText}>
                No access to camera
            </Text>
        );
    }

    return (
        <View style={styles.container}>
            <QrCodeScanner
                onQrCodeScanned={scanned ? undefined : handleQrcodeScanned}  // Prevent scanning after QR code is scanned
                style={StyleSheet.absoluteFillObject}  // Make scanner fullscreen
            />
            {scanned && (
                <Button 
                    title="Tap to Scan Again" 
                    onPress={() => setScanned(false)} 
                    style={styles.button} 
                />
            )}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    permissionText: {
        textAlign: 'center',
        fontSize: 24,
        marginTop: 20,
    },
    button: {
        marginTop: 20,
    }
});
