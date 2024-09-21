// import { Image, StyleSheet, Platform } from 'react-native';
// import {View} from 'react-native';
import React, {useState} from 'react';
import {StyleSheet, Text,TextInput, TouchableOpacity, View} from 'react-native';
import type {PropsWithChildren} from 'react';


import { HelloWave } from '@/components/HelloWave';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { Link } from 'expo-router';
import Slider from '@react-native-community/slider';

import { useRouter, useLocalSearchParams } from 'expo-router';


export default function SettingScreen() {
  const [flexDirection, setflexDirection] = useState('column');
  const [value1, setValue1] = useState(0);
  const [value2, setValue2] = useState(0);
 
  const [selectedValue1, setSelectedValue1] = useState('-MONO'); 
  const [selectedValue2, setSelectedValue2] = useState('1');
  const [selectedValue3, setSelectedValue3] = useState('PAUSE');

  const [inputValue1, setInputValue1] = useState('');
  const [inputValue2, setInputValue2] = useState('');
  const [inputValue3, setInputValue3] = useState('');
  const [inputValue4, setInputValue4] = useState('');
  const params = useLocalSearchParams();
  

  return (
  
 
   <>
  
        <View style={styles.row}>
      
                <ThemedView style={styles1.stepContainer}>
                    <ThemedText style={styles1.heading} type="subtitle">SEQUENCE</ThemedText>
                </ThemedView>
                <View style={styles1.box}>
                <SequenceLayout
                label=''
                values2={['1', '2','3','4']}
                selectedValue2={selectedValue2}
                setSelectedValue2={setSelectedValue2}>
            
              </SequenceLayout>

              </View>
           
            <ThemedView style={styles1.stepContainer}>
                  <ThemedText style={styles1.heading} type="subtitle">{params.paramName}</ThemedText>
              </ThemedView>
            
        
        </View>
       

  
  <View style={styles.row}>
   <View style={styles.box}>
   <ThemedView style={styles.stepContainer}>
    <ThemedText style={styles.heading} type="subtitle">WAVE SHAPE</ThemedText>
    </ThemedView>
    <PreviewLayout
    label=''
    values1={['-MONO', '+MONO','BI-PHASE']}
    selectedValue1={selectedValue1}
    setSelectedValue1={setSelectedValue1}>
  
  </PreviewLayout>
  </View>
  <View style={styles.box}>
   <ThemedView style={styles.stepContainer}>
    <ThemedText style={styles.heading} type="subtitle">FREQUENCEY</ThemedText>
    </ThemedView>
    <TextInput
       
        keyboardType="numeric"
        value={inputValue1}
        onChangeText={text => setInputValue1(text)} // Update the state as user types
        placeholder="Type here..."
      />
   <Text >You entered: {inputValue1} Hz</Text>
  </View>
  </View>
  <View style={styles.row}>
  <View style={[styles.box]}>
    <ThemedView style={styles.stepContainer}>
    <ThemedText style={styles.heading} type="subtitle">DUTY CYCLE</ThemedText>
    </ThemedView>
    <Slider
        style={{ width: 350, height: 40 }}
        minimumValue={0}
        maximumValue={100}
        step={1}
        value={value1}
        onValueChange={(val) => setValue1(val)}
        minimumTrackTintColor="#1EB1FC"
        maximumTrackTintColor="#8B9CB6"
        thumbTintColor="#1EB1FC"
      />
       <ThemedView style={styles.stepContainer}>
    <ThemedText style={styles.heading} type="subtitle">{value1}</ThemedText>
    </ThemedView>
  </View>
  <View style={[styles.box]}>
    <ThemedView style={styles.stepContainer}>
    <ThemedText style={styles.heading} type="subtitle">PULSE WIDTH</ThemedText>
    </ThemedView>
     <View style={styles.row}>
     <Text style={styles.label}>PULSE TIME:</Text>
     <TextInput
       
       keyboardType="numeric"
       value={inputValue2}
       onChangeText={text => setInputValue2(text)} // Update the state as user types
       placeholder="Type here..."
     />
      <Text >You entered: {inputValue2} Sec</Text>

     </View>
     <View style={styles.row}>
     <Text style={styles.label}>REST TIME:</Text>
     <TextInput
       
       keyboardType="numeric"
       value={inputValue3}
       onChangeText={text => setInputValue3(text)} // Update the state as user types
       placeholder="Type here..."
     />
      <Text >You entered: {inputValue3} Sec</Text>

     </View>
  </View>
  </View>
  <View style={styles.row}>
  <View style={[styles.box]}>
    <ThemedView style={styles.stepContainer}>
    <ThemedText style={styles.heading} type="subtitle">INTENSITY</ThemedText>
    </ThemedView>
    <Slider
        style={{ width: 350, height: 40 }}
        minimumValue={0}
        maximumValue={100}
        step={1}
        value={value2}
        onValueChange={(val) => setValue2(val)}
        minimumTrackTintColor="#1EB1FC"
        maximumTrackTintColor="#8B9CB6"
        thumbTintColor="#1EB1FC"
      />
       <ThemedView style={styles.stepContainer}>
    <ThemedText style={styles.heading} type="subtitle">{value2}</ThemedText>
    </ThemedView>
  </View>
  <View style={[styles.box]}>
    <ThemedView style={styles.stepContainer}>
    <ThemedText style={styles.heading} type="subtitle">TREATMENT TIME</ThemedText>
    </ThemedView>
    <View style={styles.row}>
     <Text style={styles.label}>TREATMENT TIME:</Text>
     <TextInput
       
       keyboardType="numeric"
       value={inputValue4}
       onChangeText={text => setInputValue4(text)} // Update the state as user types
       placeholder="Type here..."
     />
      <Text >You entered: {inputValue4} Sec</Text>

     </View>
     <MachineButtons
    label=''
    values3={['START', 'PAUSE','STOP']}
    selectedValue3={selectedValue3}
    setSelectedValue3={setSelectedValue3}>
 
  </MachineButtons>
  </View>
 </View>
  
  </>
  
  );
}


type PreviewLayoutProps = PropsWithChildren<{
  label: string;
  values1: string[];
  selectedValue1: string;
  setSelectedValue1: (value: string) => void;
  children?: React.ReactNode;
}>;

type SequenceLayoutProps = PropsWithChildren<{
  label: string;
  values2: string[];
  selectedValue2: string;
  setSelectedValue2: (value: string) => void;
  children?: React.ReactNode;
}>;

type MachineButtonsProps = PropsWithChildren<{
  label: string;
  values3: string[];
  selectedValue3: string;
  setSelectedValue3: (value: string) => void;
  children?: React.ReactNode;
}>;

const PreviewLayout: React.FC<PreviewLayoutProps> = ({
  label,
  values1,
  selectedValue1,
  setSelectedValue1,
  children,
}) => {
  const router = useRouter();

  return (
    <View style={styles.container}>
      {/* <Text style={styles.label}>{label}</Text> */}

      <View style={styles.row}>
        {values1.map((value) => (
          <TouchableOpacity
            key={value}
            onPress={() => {
              setSelectedValue1(value);
              // Navigate to '/programs' screen
            }}
            style={[
              styles.button,
              selectedValue1 === value && styles.selected,
            ]}
          >
            <Text
              style={[
                styles.buttonLabel,
                selectedValue1 === value && styles.selectedLabel,
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

const SequenceLayout: React.FC<SequenceLayoutProps> = ({
  label,
  values2,
  selectedValue2,
  setSelectedValue2,
  children,
}) => {
  const router = useRouter();

  return (
    
   
    <View style={styles1.container}>
      
      {/* <Text style={styles1.label}>{label}</Text> */}

      <View style={styles1.row}>
        {values2.map((value) => (
          <TouchableOpacity
            key={value}
            onPress={() => {
              setSelectedValue2(value);
              // Navigate to '/programs' screen
            }}
            style={[
              styles1.button,
              selectedValue2 === value && styles1.selected,
            ]}
          >
            <Text
              style={[
                styles1.buttonLabel,
                selectedValue2 === value && styles1.selectedLabel,
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


const MachineButtons: React.FC<MachineButtonsProps> = ({
  label,
  values3,
  selectedValue3,
  setSelectedValue3,
  children,
}) => {
  const router = useRouter();

  return (
    
   
    <View style={styles2.container}>
      
      {/* <Text style={styles1.label}>{label}</Text> */}

      <View style={styles2.row}>
        {values3.map((value) => (
          <TouchableOpacity
            key={value}
            onPress={() => {
              setSelectedValue3(value);
              // Navigate to '/programs' screen
            }}
            style={[
              value==='START' && styles2.button1,
              value==='PAUSE' && styles2.button2,
              value==='STOP' && styles2.button3,
              selectedValue3 === value && styles2.selected,
            ]}
          >
            <Text
              style={[
                styles2.buttonLabel,
                selectedValue3 === value && styles2.selectedLabel,
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
    paddingVertical:2,
    paddingLeft:40,
    backgroundColor: 'white',
    borderRadius: 10,
    justifyContent:'center',
    textAlign:'center',
    alignItems:'center'
  },
  box: {
    maxWidth:360,
    width: 350,
    height: 87,
    flex:1,
    borderWidth: 2, // Thickness of the border
    borderColor: '#D3D3D3', // Border color
    borderRadius: 10,
    justifyContent:'center',
    alignContent:'center' // Rounded corners (optional)
  
  
  },
  row: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  button: {

    paddingVertical: 4,
    borderRadius: 10,
    backgroundColor: '#D3D3D3',
    alignSelf: 'center',
    marginHorizontal: '1%',
    marginBottom: 6,
    minWidth: '25%',
    textAlign: 'center',
    justifyContent:'center',
    alignItems:'center',
    marginTop:-30

    
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
  },
  label: {
    textAlign: 'center',
    marginBottom: 10,
    fontSize: 14,
  },
  titleContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 8,
      },
      stepContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent:'center',
      
      },
      reactLogo: {
        height: 178,
        width: 290,
        bottom: 0,
        left: 0,
        position: 'absolute',
      },
      heading:{
        fontSize: 15,
      }
});

const styles1 = StyleSheet.create({
  container: {
    flex: 1,
    marginTop:3,
    paddingLeft:40,
    backgroundColor: 'white',
    justifyContent:'center',
    textAlign:'center',
    borderRadius: 10,
    alignItems:'center'
  },
  box: {
    maxWidth:160,
    paddingVertical:-10,
    height: 50,
    flex:1,
  
    borderRadius: 10,
    justifyContent:'center',
    alignContent:'center' // Rounded corners (optional)
  
  
  },
  row: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  button: {
  
    paddingVertical: 5,
    borderRadius: 10,
    backgroundColor: '#D3D3D3',
    alignSelf: 'center',
    marginHorizontal: '1%',
    marginBottom: 6,
    minWidth: '23%',
    textAlign: 'center',
    justifyContent:'center',
   
    
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
  },
  label: {
    textAlign: 'center',
    marginBottom: 10,
    fontSize: 14,
  },
  titleContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 8,
      },
      stepContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent:'center',
      },
      reactLogo: {
        height: 178,
        width: 290,
        bottom: 0,
        left: 0,
        position: 'absolute',
      },
      heading:{
        fontSize: 15,
        marginLeft:4
      }
});


const styles2 = StyleSheet.create({
  container: {
    flex: 1,
    marginTop:3,
    paddingLeft:40,
    backgroundColor: 'white',
    justifyContent:'center',
    textAlign:'center',
    borderRadius: 10,
    alignItems:'center'
  },
  box: {
    maxWidth:160,
    paddingVertical:-10,
    height: 50,
    flex:1,
   
  
    borderRadius: 10,
    justifyContent:'center',
    alignContent:'center' // Rounded corners (optional)
  
  
  },
  row: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  button1: {
  
    paddingVertical: 4,
    borderRadius: 10,
    backgroundColor: 'green',
    alignSelf: 'center',
    marginHorizontal: '1%',
    marginBottom: 6,
    minWidth: '23%',
    textAlign: 'center',
    justifyContent:'center',
   
    
  },
  button2: {
  
    paddingVertical: 4,
    borderRadius: 10,
    backgroundColor: 'orange',
    alignSelf: 'center',
    marginHorizontal: '1%',
    marginBottom: 6,
    minWidth: '23%',
    textAlign: 'center',
    justifyContent:'center',
   
    
  },
  button3: {
  
    paddingVertical: 4,
    borderRadius: 10,
    backgroundColor: 'red',
    alignSelf: 'center',
    marginHorizontal: '1%',
    marginBottom: 6,
    minWidth: '23%',
    textAlign: 'center',
    justifyContent:'center',
   
    
  },
  selected: {
    backgroundColor: '#000080',
    borderWidth: 0,
    textAlign:'center'
  },
  buttonLabel: {
    fontSize: 14,
    fontWeight: '400',
    color: 'white',
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
  titleContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 8,
      },
      stepContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent:'center',
      },
      reactLogo: {
        height: 178,
        width: 290,
        bottom: 0,
        left: 0,
        position: 'absolute',
      },
      heading:{
        fontSize: 18,
      }
});
