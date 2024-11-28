import React, { useState, useEffect, useRef } from "react";
//import { useIsFocused } from '@react-navigation/native';
import {
  View,
  Text,
  Image,
  ActivityIndicator,
  Animated,
  Easing,
} from "react-native";
import { create } from "apisauce";
import { BarCodeScanner, BarCodeEvent } from "expo-barcode-scanner";
import { useNavigation, NavigationProp } from "@react-navigation/native";
import tw from "twrnc";

type ScanScreenProps = {
  route: {
    params: {
      course: string;
    };
  };
};

const ScanScreen: React.FC<ScanScreenProps> = ({ route }) => {
  const [hasPermission, setHasPermission] = useState<boolean | null>(null);
  const [scanned, setScanned] = useState(false);
  const [student, setStudent] = useState<any>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const navigation = useNavigation<NavigationProp<any>>();
  const animatedValue = useRef(new Animated.Value(0)).current;
  const selectedCourse = route.params.course;

  const api = create({
    baseURL: "http://192.168.38.206:3000/api/",
  });

  // Request camera permissions
  useEffect(() => {
    (async () => {
      const { status } = await BarCodeScanner.requestPermissionsAsync();
      setHasPermission(status === "granted");
    })();
  }, []);

  // Animated line movement
  const moveLine = () => {
    Animated.loop(
      Animated.sequence([
        Animated.timing(animatedValue, {
          toValue: 1,
          duration: 1500,
          easing: Easing.linear,
          useNativeDriver: false,
        }),
        Animated.timing(animatedValue, {
          toValue: 0,
          duration: 0,
          useNativeDriver: false,
        }),
      ])
    ).start();
  };

  useEffect(() => {
    moveLine();
  }, [animatedValue]);

  // Scan student and validate registration number
  interface StudentResponse {
    exists: boolean;
    name?: string; // Optional if 'name' might not always be present
    regNumber?: string;
  }
 
        const scanStudent = async (regNumber: string) => {
            try {
              setLoading(true);
              setError(null);
          
              const response = await api.get<StudentResponse>(`/students?regNumber=${regNumber}`);
          
              if (response.ok && response.data) {
                const data = response.data;
          
                if (data.exists) {
                  const studentName = data.name; // No error here because TypeScript knows `name` exists in `data`
                  setStudent({ name: studentName, regNumber });
          
                  console.log(`${studentName} has attended.`);
                } else {
                  console.log("Student not found in the database.");
                }
              } else {
                console.error("Unable to fetch data from the API.");
              }
            } catch (error) {
              console.error("Error occurred:", error);
              setError("An unexpected error occurred. Please try again.");
            } finally {
              setLoading(false);
            }
};

          


  // Handle barcode scan
  const handleBarCodeScanned = async ({ data }: BarCodeEvent) => {
    setScanned(true);
    await scanStudent(data);

    // Navigate to ScanCompleteScreen on success
    navigation.navigate("ScanCompleteScreen", { student });
  };

  // Animated line position
  const lineTranslateY = animatedValue.interpolate({
    inputRange: [0, 1],
    outputRange: [0, 380],
  });

  // Handle permissions
  if (hasPermission === null) {
    return <ActivityIndicator size="large" style={tw`flex-1 justify-center`} />;
  }

  if (hasPermission === false) {
    return (
      <View style={tw`flex-1 justify-center items-center`}>
        <Text style={tw`text-lg text-red-500`}>No access to camera</Text>
      </View>
    );
  }

  return (
    <View style={tw`flex-1 bg-gray-100 p-4`}>
      <View style={tw`items-center mb-6`}>
        {/* <Image
          source={require("../assets/Ems.png")}
          style={tw`w-32 h-32`}
          resizeMode="contain"
        /> */}
        <Text style={tw`text-xl font-bold mt-4`}>Scan Student ID QR Code</Text>
        <Text style={tw`text-sm text-gray-500`}>
          Hold your device steady over the QR code
        </Text>
      </View>
      <View
        style={tw`flex-1 border-2 border-gray-300 rounded-lg overflow-hidden relative`}
      >
        <BarCodeScanner
          onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
          style={tw`flex-1`}
        />
        <Animated.View
          style={[
            tw`absolute w-full h-0.5 bg-red-500`,
            { transform: [{ translateY: lineTranslateY }] },
          ]}
        />
      </View>
      {loading && <ActivityIndicator size="large" style={tw`mt-4`} />}
      {error && <Text style={tw`text-red-500 text-center mt-4`}>{error}</Text>}
    </View>
  );
};

export default ScanScreen;
