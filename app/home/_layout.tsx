import { GestureHandlerRootView, Pressable } from 'react-native-gesture-handler';
import { Drawer } from 'expo-router/drawer';
import CustomDraweContent from '@/components/customDraweContent';
import ProfileInfo from '@/components/profileInfo';
export default function Layout() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <Drawer 
      screenOptions={{
        drawerActiveBackgroundColor:'white',
        drawerInactiveBackgroundColor:'FFFDFD',
        drawerActiveTintColor:'000000',
        drawerInactiveTintColor:'',
        headerRight: () => (<ProfileInfo/>
          ),
      }}
      drawerContent = {CustomDraweContent}>
      <Drawer.Screen
        name='index'

        options={{
            drawerLabel:'Home',
            title:'Home'
            
        }}
        
        
        />
        <Drawer.Screen
        name='mark'

        options={{
            drawerLabel:'Mark Attendnce',
            title:'Mark Attendance'
        }}
        
        />
        <Drawer.Screen
        name='Sheet'

        options={{
            drawerLabel:'Google Sheet',
            title:'Google Sheet'
        }}
        />
           <Drawer.Screen
        name='about'

        options={{
            drawerLabel:'about',
            title:'About Us'
        }}
        />
        
     
      </Drawer>
    </GestureHandlerRootView>
  );
}
