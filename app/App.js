// // import React from 'react';
// // import Scanner from './app/componets/Scanner';
// // import Home from './app/componets/Home';
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
// import Scanner from './app/components/Scanner';  // Fixed typo: 'componets' -> 'components'
// import Home from './app/components/Home';        // Fixed typo: 'componets' -> 'components'
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
import { createStackNavigator } from '@react-navigation/stack';
import Home from './app/components/Home';       // Import Home component
import Scanner from './app/components/Scanner'; // Import Scanner component

const Stack = createStackNavigator();

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

