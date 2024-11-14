// // import React from 'react';
// // import Scanner from '@/componets/Scanner';
// // import Home from '@/componets/Home';
// // import { NavigationContainer } from '@react-navigation/native';
// // import {createstackNavigator} from 'react-navigation/stack';

// // const stack = createstackNavigator();
// // function App() {
// //     return(
// //         <stack.Navigator>
// //             <stack.Screen name = "Home" component = {Home}/>
// //             <stack.Screen name = "Scanner" component = {Scanner}/>
// //         </stack.Navigator>
// //     )
// // }

// // export default () => {
// //     return(
// //         <NavigationContainer>
// //             <App/>
// //         </NavigationContainer>
// //     )
// // }
// import React from 'react';
// import Scanner from '@/components/Scanner';  // Fixed typo: 'componets' -> 'components'
// import Home from '@/components/Home';        // Fixed typo: 'componets' -> 'components'
// import { NavigationContainer } from '@react-navigation/native';
// import { createStackNavigator } from '@react-navigation/stack'; // Corrected import

// const Stack = createStackNavigator();

// function App() {
//   return (
//     <Stack.Navigator
//       screenOptions={{
//         headerStyle: { backgroundColor: '#f5f5f5' },
//         headerTitleStyle: { fontWeight: 'bold' },
//       }}
//     >
//       <Stack.Screen name="Home" component={Home} />
//       <Stack.Screen name="Scanner" component={Scanner} />
//     </Stack.Navigator>
//   );
// }

// export default () => {
//   return (
//     <NavigationContainer>
//       <App />
//     </NavigationContainer>
//   );
// };
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from '@/components/Home';       // Import Home component
import Scanner from '@/components/Scanner'; // Import Scanner component

const Stack = createNativeStackNavigator();

function App() {
  return (
    <Stack.Navigator
      initialRouteName="Home" 
      screenOptions={{
        headerStyle: { backgroundColor: '#f5f5f5' },
        headerTitleStyle: { fontWeight: 'bold' },
      }}
    >
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Scanner" component={Scanner} />
    </Stack.Navigator>
  );
}

export default () => {
  return (
    <NavigationContainer>
      <App />
    </NavigationContainer>
  );
};

