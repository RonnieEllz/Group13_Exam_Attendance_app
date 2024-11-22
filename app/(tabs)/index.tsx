import React from "react";
import { Text, View, TouchableOpacity, SafeAreaView } from "react-native";
import tw from "twrnc";

const LandingPage: React.FC = () => {
  return (
    <SafeAreaView style={tw`flex-1 bg-custom-gray p-6`}>
      <View style={tw`flex-1 justify-center items-center`}>
        <Text style={tw`text-3xl font-bold mb-4 text-center`}>
          LET'S GET STARTED WITH DETAPP
        </Text>

        <Text style={tw`text-lg font-semibold mb-2 text-center`}>
          Exam attendance management that empowers your workforce
        </Text>

        <Text style={tw`text-base text-center mb-10`}>
          Bid farewell to tedious Excel sheets and say hello to a more efficient way to manage student attendance.
        </Text>

        <TouchableOpacity style={tw`bg-black p-4 rounded-lg w-4/5 items-center`}>
          <Text style={tw`text-white font-bold`}>LOG IN</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default LandingPage;
