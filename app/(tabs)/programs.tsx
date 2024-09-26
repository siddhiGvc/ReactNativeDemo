
import React, {useState,useEffect} from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import type {PropsWithChildren} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

import { useRouter ,Href} from 'expo-router';


export default function ProgramsScreen() {
  const [flexDirection, setflexDirection] = useState('column');
  const [selected, setSelected] = useState('MANUAL');


  const fetchSelectedMenu = async () => {
    try {
      var storedMenu= await AsyncStorage.getItem('SelectedMenu');
      if (storedMenu !== null) {
       
        setSelected(storedMenu);
      }
    } catch (error) {
      console.error('Error fetching selected program:', error);
    }
  };


  useEffect(() => {
   
   
    fetchSelectedMenu();
    const interval=setInterval(()=>{
    fetchSelectedMenu();
    },1000)

    return ()=>clearInterval(interval);
  }, []);
 
  return (
   
<>
   <MenuLayout
    label=''
    values={['MANUAL', 'PRE-PROGRAM']}
    selectedValue={selected}
    setSelectedValue={setSelected}>
    
  </MenuLayout>
    <PreviewLayout
    label=''
    values={['ANTERIOR DELTOID', 'QADRICEPS','POSTERIOR DELTOID','TIBALIS POSTERIOR','TRICEPS','GASTRONEMIUS SOLEUS', 'BICEPS','HAMSTRINGS','ANTERIOR FOREARM','GLUTEUS','POSTERIOR FOREARM','ELECTOR SPINE']}
    selectedValue={flexDirection}
    setSelectedValue={setflexDirection}>
  
  </PreviewLayout>
  </>
  
  );
}


type PreviewLayoutProps = PropsWithChildren<{
  label: string;
  values: string[];
  selectedValue: string;
  setSelectedValue: (value: string) => void;
  children?: React.ReactNode;
}>;

type MenuLayoutProps = PropsWithChildren<{
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
        {values.map((value,i) => (
          <TouchableOpacity
            key={value}
            onPress={async() => {
              setSelectedValue(value);
              await AsyncStorage.setItem("SelectedProgram", i.toString());
              // localStorage.setItem("SelectedProgram",i);
              router.push(`./setting?paramName=${value}&id=${i+1}` as Href);
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


const MenuLayout: React.FC<MenuLayoutProps> = ({
  label,
  values,
  selectedValue,
  setSelectedValue,
  children,
}) => {


  return (
    <View style={styles1.container}>
      <Text style={styles1.label}>{label}</Text>

      <View style={styles1.row}>
        {values.map((value,i) => (
          <TouchableOpacity
            key={value}
          
            style={[
              styles1.button,
              selectedValue === value && styles1.selected,
            ]}
          >
            <Text
              style={[
                styles1.buttonLabel,
                selectedValue === value && styles1.selectedLabel,
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
    flex: 1,
    paddingLeft:40,
    backgroundColor: 'white',
    justifyContent:'flex-end',
    textAlign:'center',
    alignItems:'center'
  },
  box: {
    width: 50,
    height: 10,
    
  },
  row: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  button: {
    paddingHorizontal:0,
    paddingVertical: 8,
    borderRadius: 10,
    backgroundColor: '#D3D3D3',
    alignSelf: 'center',
    marginHorizontal: '1%',
    marginBottom: 6,
    minWidth: '45%',
    textAlign: 'center',
    justifyContent:'center'
    
  },
  selected: {
    backgroundColor: '#000080',
    borderWidth: 0,
    textAlign:'center'
  },
  buttonLabel: {
    fontSize: 14,
    fontWeight: '400',
    color: '#000080',
    textAlign:'center'
  },
  selectedLabel: {
    color: 'white',
    fontWeight:'400'
  },
  label: {
    textAlign: 'center',
    marginBottom: 10,
    fontSize: 14,
    fontWeight:'400'
  }
});

const styles1 = StyleSheet.create({
  container: {
    flex: 1,
    paddingLeft:40,
    backgroundColor: 'white',
    justifyContent:'flex-start',
    textAlign:'center',
    alignItems:'flex-start'
  },
  box: {
    width: 50,
    height: 10,
    
  },
  row: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  button: {
    paddingHorizontal:0,
    paddingVertical: 9,
    borderRadius: 10,
    backgroundColor: '#D3D3D3',
    alignSelf: 'center',
    minWidth: '18%',
    textAlign: 'center',
    justifyContent:'flex-start'
    
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
    fontWeight:'500'
  },
  label: {
    textAlign: 'center',
    marginBottom: 10,
    fontSize: 1,
    fontWeight:'500'
  }
});
