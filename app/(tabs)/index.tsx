import React, {useState} from 'react';
import {StyleSheet, Text, TouchableOpacity, View,Dimensions} from 'react-native';
import type {PropsWithChildren} from 'react';
import Constants from 'expo-constants';
import { useRouter ,Href} from 'expo-router';
import AsyncStorage from '@react-native-async-storage/async-storage';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;


export default function HomeScreen() {
  const [flexDirection, setflexDirection] = useState('MANUAL');
  return (
    
 
    <PreviewLayout
    label=''
    values={['MANUAL', 'PRE-PROGRAM']}
    selectedValue={flexDirection}
    setSelectedValue={setflexDirection}>
    
  </PreviewLayout>
  
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
  const router = useRouter();

  return (
    <View style={styles.container}>
      <Text style={styles.label}>{label}</Text>

      <View style={styles.row}>
        {values.map((value) => (
          <TouchableOpacity
            key={value}
            onPress={async() => {
              setSelectedValue(value);
              await AsyncStorage.setItem("SelectedMenu",value);
              router.push('./programs' as Href); // Navigate to '/programs' screen
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

    
    </View>
  );
};



const styles = StyleSheet.create({
  container: {
    width:windowWidth,
    height:windowHeight,
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
    paddingVertical: 60,
    borderRadius: 10,
    backgroundColor: '#D3D3D3',
    alignSelf: 'center',
    marginHorizontal: '2%',
    marginBottom: 6,
    minWidth: '38%',
    textAlign: 'center',
    justifyContent:'center'
    
  },
  selected: {
    backgroundColor: '#000080',
    borderWidth: 0,
    textAlign:'center'
  },
  buttonLabel: {
    fontSize: 22,
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
    fontSize: 24,
  },
});


