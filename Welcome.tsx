import React from "react";
import { Text, View, Image, TouchableOpacity } from "react-native";
import { Link } from "expo-router";
import tw from "twrnc";

const LandingPage = () => {
  return (
    <View style={tw`flex-1 justify-center items-center bg-custom-gray px-5`}>
      <Image source={require("./home/assets/images/logo.png")} style={tw`w-20 h-20 mb-4`} />
      <Text style={tw`text-4xl font-bold mb-4 text-center`}>LET'S GET STARTED WITH DETAPP</Text>
      <Text style={tw`text-lg font-semibold mb-2 text-center`}>
        Exam attendance management that empowers your workforce
      </Text>
      <Text style={tw`text-base text-center mb-10`}>
        Bid farewell to tedious Excel sheets and say hello to a more efficient way to manage student attendance.
      </Text>
      <Link href="/LogIn" asChild>
        <TouchableOpacity style={tw`bg-black py-3 px-10 rounded-full`}>
          <Text style={tw`text-white text-xl font-bold text-center`}>Log In</Text>
        </TouchableOpacity>
      </Link>
    </View>
  );
};

export default LandingPage;
