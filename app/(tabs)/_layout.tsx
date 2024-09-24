import { Tabs } from 'expo-router';
import React from 'react';
import { View, Text, Image } from 'react-native';
import { TabBarIcon } from '@/components/navigation/TabBarIcon';
import { Colors } from '@/constants/Colors';
import { useColorScheme } from '@/hooks/useColorScheme';
import { FontAwesome } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';


const CustomHeader = () => (
  <View style={{ height: 50, flexDirection: 'row', alignItems: 'center', backgroundColor: 'white' }} >
    <Image
      source={require('../../assets/images/GVC.png')} // Replace with your logo path
      style={{ width: 150, height: 50, marginLeft: 10,marginTop:5 }}
    />
    <Text style={{ fontSize: 20, color: 'white', marginLeft: 10 }}>My App</Text>
  </View>
);

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
     

      screenOptions={({ route }) => ({
        tabBarActiveTintColor: Colors[colorScheme ?? 'light'].tint,
        header: () =>route.name==='index' ? <CustomHeader />:'',
        headerShown: true,
        // tabBarStyle: route.name === 'setting' ? { display: 'none' } : {},
      })}
      >
      <Tabs.Screen
        name="index"
        options={{
          title: 'Home',
          tabBarIcon: ({ color, focused }) => (
            
            <TabBarIcon name={focused ? 'home' : 'home-outline'} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="info"
        options={{
          title: 'Info',
          tabBarIcon: ({ color, focused }) => (
            focused ? (
              <FontAwesome name="info-circle" size={24} color={color} />
            ) : (
              <MaterialIcons name="info-outline" size={24} color={color} />
            )
          )
        }}
      />
       <Tabs.Screen
        name="programs"
        options={{
          title: 'Program',
          tabBarIcon: ({ color, focused }) => (
            focused ? (
              <FontAwesome name="code" size={24} color={color} />
            ) : (
              <MaterialIcons name="code" size={24} color={color} />
            )
          ),
          // tabBarStyle: { display: 'none' },
        }}
      />
      <Tabs.Screen
        name="setting"
        options={{
          title: 'Setting',
          tabBarIcon: ({ color, focused }) => (
            focused ? (
              <FontAwesome name="cog" size={24} color={color} />
            ) : (
              <Ionicons name="settings-outline" size={24} color={color} />
            )
          ),
          // tabBarStyle: { display: 'none' },
        }}
      />
    </Tabs>
  );
}
