import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useFonts } from 'expo-font';
import {Stack, Tabs } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import { useEffect } from 'react';
import { StatusBar } from 'react-native';
import 'react-native-reanimated';
import HomeScreen from './(tabs)';

import { useColorScheme } from '@/hooks/useColorScheme';
// const Stack = createNativeStackNavigator();

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const colorScheme = useColorScheme();
  const [loaded] = useFonts({
    SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf'),
  });

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }

    StatusBar.setHidden(true, 'none');
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return (
   
    <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
     
    
      <Stack>
        <Stack.Screen name="(tabs)"  options={{headerShown: false}} />
     
       
     
        <Stack.Screen name="+not-found" />
      </Stack>
     
    </ThemeProvider>
  );
}
