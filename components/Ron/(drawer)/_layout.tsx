import React from 'react';
import { Drawer } from 'expo-router/drawer';
import { DrawerContentScrollView, DrawerItem } from '@react-navigation/drawer';
import { useRouter } from 'expo-router';

const CustomDrawerContent = (props) => {
  const router = useRouter();

  return (
    <DrawerContentScrollView {...props}>
      <DrawerItem
        label="DETTAP"
        onPress={() => {
          router.push('/(drawer/(tabs)/feed)');
        }}
      />
       <DrawerItem
        label="Attendance Mark"
        onPress={() => {
          router.push('/(drawer/(tabs)/feed)');
        }}
      />
         <DrawerItem
        label="Google sheet"
        onPress={() => {
          router.push('/(drawer/(tabs)/feed)');
        }}
      />
         <DrawerItem
        label="About us<"
        onPress={() => {
          router.push('/(drawer/(tabs)/feed)');
        }}
      />
      

    </DrawerContentScrollView>
    
  );
};

export default function Layout() {
  return (
    <Drawer
      drawerContent={(props) => <CustomDrawerContent {...props} />}
    />
  );
}
