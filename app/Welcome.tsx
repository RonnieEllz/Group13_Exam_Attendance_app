import { Link } from "expo-router";
import React from "react";
import { Text, View, Image, TouchableOpacity } from "react-native";
import tw from "twrnc";

const LandingPage = () => {
  return (
    <View style={tw`justify-center items-center bg-custom-gray p-20`}>
      <Image
        source={require("./home/assets/images/logo.png")}
        style={tw`w-20 h-20 mb-4`}
      />
      <Text style={tw`text-4xl font-bold mb-4 text-center`}>
        LET'S GET STARTED WITH DETAPP
      </Text>

      <Text style={tw`text-lg font-semibold mb-2 text-center`}>
        Exam attendance management that empowers your workforce
      </Text>

      <Text style={tw`text-base text-center mb-10`}>
        Bid farewell to tedious Excel sheets and say hello to a more efficient way to manage student attendance.
      </Text>

      <Link href="/LogIn" asChild>
        <TouchableOpacity style={tw`bg-black p-3 pl-15 pr-15 rounded-md`}>
          <Text style={tw`text-white text-x2 font-bold text-center`}>Log In</Text>
        </TouchableOpacity>
      </Link>
    </View>
  );
};

export default LandingPage;
