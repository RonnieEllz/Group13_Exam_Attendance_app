import React from "react";
import { View, Text, Image, TouchableOpacity, ScrollView } from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import tw from "twrnc";

const developers = [
  {
    name: "Walunji Kumwenda",
    info: "Lead Full-Stack Developer.",
    photo: require("./assets/images/Walunji.jpg"), 
  },
  {
    name: "Chipulumutso Phiri",
    info: "Passionate UI/UX Designer.",
    photo: require("./assets/images/Chipu.jpg"),
  },
  {
    name: "Ronald Longwe",
    info: "Focused Full-Stack Developer.",
    photo: require("./assets/images/Ronald_Longwe.jpg"),
  },
  {
    name: "Daniel Medson",
    info: "Active Full-Stack Developer.",
    photo: require("./assets/images/Daniel.png"),
  },
  {
    name: "Pleasant Ainani",
    info: "Quality UI/UX design Specialist.",
    photo: require("./assets/images/Pleasant.jpg"),
  },
  {
    name: "Tuntufye Samuel Chihana",
    info: "Active Developer.",
    photo: "https://via.placeholder.com/100",
  },
];

const AboutUs = () => {
  return (
    <View style={tw`flex-1 bg-custom-gray p-6`}>
      <View style={tw`items-center mb-6`}>
        <FontAwesome name="users" size={50} color="black" /> 
        <Text style={tw`text-lg text-black font-semibold mt-2`}>About Us</Text>
      </View>
      
      <ScrollView>
        {developers.map((developer, index) => (
          <View
            key={index}
            style={tw`flex-row bg-white rounded-lg p-4 mb-4 shadow-md`}
          >
            <Image
              source={developer.photo}
              style={tw`w-24 h-24 rounded-lg mr-4`} />
            <View style={tw`flex-1 justify-center`}>
              <Text style={tw`text-xl font-bold text-black`}>
                {developer.name}
              </Text>
              <Text style={tw`text-base text-gray-700 mt-2`}>
                {developer.info}
              </Text>
            </View>
          </View>
        ))}
      </ScrollView>
      
      <TouchableOpacity
        style={tw`bg-black p-4 rounded-lg items-center mt-6 w-full`}
      >
          <Text style={tw`text-white font-bold text-lg`}>CONTACT US</Text>
        </TouchableOpacity>
    </View>
  );
};

export default AboutUs;
