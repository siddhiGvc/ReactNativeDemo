import { Tabs } from 'expo-router';
import React,{useState} from 'react';
import {StyleSheet, Text, TouchableOpacity, View,Dimensions,Image} from 'react-native';
import type {PropsWithChildren} from 'react';
import { TabBarIcon } from '@/components/navigation/TabBarIcon';
import { Colors } from '@/constants/Colors';
import { useColorScheme } from '@/hooks/useColorScheme';
import { FontAwesome } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { useRouter ,Href} from 'expo-router';



  

const CustomHeader = () => {
  const router = useRouter();

  return <>
  <View style={{ height: 50, flexDirection: 'row', alignItems: 'center', backgroundColor: 'white' }} >
    <Image
      source={require('../../assets/images/GVC.png')} // Replace with your logo path
      style={{ width: 150, height: 50, marginLeft: 10,marginTop:5 }}
      onProgress={()=>{
        router.push(`./index` as Href);
      }}
    />
    <Text style={{ fontSize: 20, color: 'white', marginLeft: 10 }}>My App</Text>
  </View>
  </>
}



export default function TabLayout() {
  const colorScheme = useColorScheme();
 

  return (
    <Tabs
     

      screenOptions={({ route }) => ({
        tabBarActiveTintColor: Colors[colorScheme ?? 'light'].tint,
        header: () =>route.name==='index' ? <CustomHeader />:'',
        headerShown: true,
        // tabBarStyle: route.name === ''  ? { } : {display: 'none'},
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
    </Tabs>
  );
}



type PreviewLayoutProps = PropsWithChildren<{
  label: string;
  values: string[];
  selectedValue: string;
  setSelectedValue: (value: string) => void;
  children?: React.ReactNode;
}>;

const PreviewLayout: React.FC<PreviewLayoutProps> = ({
  label,
  values,
  selectedValue,
  setSelectedValue,
  children,
}) => {
  

  return (
    <View style={styles.container}>
      <Text style={styles.label}>{label}</Text>

      <View style={styles.row}>
        {values.map((value) => (
          <TouchableOpacity
            key={value}
            onPress={() => {
              setSelectedValue(value);
              
            }}
            style={[
              styles.button,
              selectedValue === value && styles.selected,
            ]}
          >
            <Text
              style={[
                styles.buttonLabel,
                selectedValue === value && styles.selectedLabel,
              ]}
            >
              {value}
            </Text>
          </TouchableOpacity>
        ))}
      </View>

      {/* <View style={styles.contentContainer}>
        {children}
      </View> */}
    </View>
  );
};



const styles = StyleSheet.create({
  container: {
   
    flex: 1,
    backgroundColor: 'white',
    justifyContent:'flex-start',
    textAlign:'center',
    alignItems:'center',
  },
  box: {
    width: 50,
    height: 50,
  },
  row: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    
  },
  button: {
    paddingHorizontal:-10,
    paddingVertical: 10,
    backgroundColor: '#D3D3D3',
    alignSelf: 'center',
    marginBottom: 6,
    minWidth: '15%',
    textAlign: 'center',
    justifyContent:'center'
    
  },
  selected: {
    backgroundColor: '#000080',
    borderWidth: 0,
    textAlign:'center'
  },
  buttonLabel: {
    fontSize: 12,
    fontWeight: '500',
    color: '#000080',
    textAlign:'center'
  },
  selectedLabel: {
    color: 'white',
  },
  label: {
    textAlign: 'center',
    marginBottom: 10,
    fontSize: 14,
  },
});