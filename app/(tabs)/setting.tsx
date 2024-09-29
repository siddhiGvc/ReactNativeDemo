// import { Image, StyleSheet, Platform } from 'react-native';
// import {View} from 'react-native';
import React, {useState,useEffect} from 'react';
import {StyleSheet, Text,TextInput, TouchableOpacity, View,Dimensions} from 'react-native';
import type {PropsWithChildren} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import Slider from '@react-native-community/slider';

import { useRouter, useLocalSearchParams } from 'expo-router';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

var interval :any;
export default function SettingScreen() {
 
  
  const [value1, setValue1] = useState(0);
  const [value2, setValue2] = useState(0);
 
  const [selectedValue1, setSelectedValue1] = useState(''); 
  const [selectedValue2, setSelectedValue2] = useState('1');
  const [selectedValue3, setSelectedValue3] = useState('');

  const [inputValue1, setInputValue1] = useState<number | null>(null);
  const [inputValue2, setInputValue2] = useState<number | null>(null);
  const [inputValue3, setInputValue3] = useState<number | null>(null);
  const [inputValue4, setInputValue4] = useState<number | null>(null);
  const params = useLocalSearchParams();

  const [selected, setSelected] = useState('MANUAL');


  const fetchSelectedMenu = async () => {
    try {
      var storedMenu= await AsyncStorage.getItem('SelectedMenu');
      if (storedMenu !== null) {
       
        setSelected(storedMenu);
      }
      
      var SO=params.id;
    
    if(storedMenu == "PRE-PROGRAM")
    {
      if(selectedValue2=='1')
      {
        if(SO=='1')
          {
            setValue1(10);
            setValue2(10);
            setInputValue1(30);
            setInputValue2(7);
            setInputValue3(10);
            setInputValue4(15);
           //SetWord(@TreatTime2@, 0, 00);
            setSelectedValue1('BI-PHASE');
            
          }
          else if(SO=='2')
          {
            setValue1( 11);
            setValue2( 11);
            setInputValue1(35);
            setInputValue2(4);
            setInputValue3(8);
            setInputValue4(15);
            //SetWord(@TreatTime2@, 0, 00);
            setSelectedValue1('BI-PHASE');
              
          }
          else if(SO=='3')
          {
            setValue1( 12);
            setValue2( 12);
            setInputValue1(25);
            setInputValue2(5);
            setInputValue3(8);
            setInputValue4(15);
           //SetWord(@TreatTime2@, 0, 00);
            setSelectedValue1('BI-PHASE');
          }
          else if(SO=='4')
          {
            setValue1( 13);
            setValue2( 13);
            setInputValue1(20);
            setInputValue2(8);
            setInputValue3(15);
            setInputValue4(15);
            //SetWord(@TreatTime2@, 0, 00);
            setSelectedValue1('BI-PHASE');
          }
          else if(SO=='5')
          {
            setValue1( 14);
            setValue2( 14);
            setInputValue1(35);
            setInputValue2(9);
            setInputValue3(12);
            setInputValue4(15);
            //SetWord(@TreatTime2@, 0, 00);
            setSelectedValue1('BI-PHASE');
          }
          else if(SO=='6')
          {
            setValue1( 15);
            setValue2( 15);
            setInputValue1(30);
            setInputValue2(0);
            setInputValue3(0);
            setInputValue4(15);
            //SetWord(@TreatTime2@, 0, 00);
            setSelectedValue1('BI-PHASE');
          }
          else if(SO=='7')
          {
            setValue1( 16);
            setValue2( 16);
            setInputValue1(35);
            setInputValue2(0);
            setInputValue3(0);
            setInputValue4(5);
        //SetWord(@TreatTime2@, 0, 00);
            setSelectedValue1('BI-PHASE');
          }
          else if(SO=='8')
          {
            setValue1( 17);
            setValue2( 17);
            setInputValue1(35);
            setInputValue2(0);
            setInputValue3(0);
            setInputValue4(5);
            //SetWord(@TreatTime2@, 0, 00);
            setSelectedValue1('BI-PHASE');
          }
          else if(SO=='9')
          {
            setValue1( 18);
            setValue2( 18);
            setInputValue1(30);
            setInputValue2(0);
            setInputValue3(0);
            setInputValue4(5);
            //SetWord(@TreatTime2@, 0, 00);
            setSelectedValue1('BI-PHASE');
          }
          else if(SO=='10')
          {
            setValue1( 19);
            setValue2( 19);
            setInputValue1(25);
            setInputValue2(0);
            setInputValue3(0);
            setInputValue4(5);
            //SetWord(@TreatTime2@, 0, 00);
            setSelectedValue1('BI-PHASE');
          }
          else if(SO=='11')
          {
            setValue1( 20);
            setValue2( 20);
            setInputValue1(35);
            setInputValue2(10);
            setInputValue3(15);
            setInputValue4(20);
            //SetWord(@TreatTime2@, 0, 00);
            setSelectedValue1('BI-PHASE');
          }
          else if(SO=='12')
          {
            setValue1( 21);
            setValue2( 21);
            setInputValue1(35);
            setInputValue2(0);
            setInputValue3(0);
            setInputValue4(5);
            //SetWord(@TreatTime2@, 0, 00);
            setSelectedValue1('BI-PHASE');
          }

      }
      else if(selectedValue2=='2')
      {
        if(SO=='1')
          {
            setValue1(0);
            setValue2(0);
            setInputValue1(0);
            setInputValue2(0);
            setInputValue3(0);
            setInputValue4(0);
          //SetWord(@TreatTime2@, 0, 00);
             setSelectedValue1('-MONO');
            
          }
          else if(SO=='2')
          {
            setValue1(11);
            setValue2(11);
            setInputValue1(35);
            setInputValue2(4);
            setInputValue3(8);
            setInputValue4(15);
          //SetWord(@TreatTime2@, 0, 00);
            setSelectedValue1('BI-PHASE');
              
          }
          else if(SO=='3')
          {
            setValue1(12);
            setValue2(12);
            setInputValue1(25);
            setInputValue2(5);
            setInputValue3(8);
            setInputValue4(15);
          //SetWord(@TreatTime2@, 0, 00);
            setSelectedValue1('BI-PHASE');
          }
          else if(SO=='4')
          {
            setValue1(13);
            setValue2(13);
            setInputValue1(20);
            setInputValue2(8);
            setInputValue3(15);
            setInputValue4(15);
          //SetWord(@TreatTime2@, 0, 00);
            setSelectedValue1('BI-PHASE');
          }
          else if(SO=='5')
          {
            setValue1(14);
            setValue2(14);
            setInputValue1(35);
            setInputValue2(9);
            setInputValue3(12);
            setInputValue4(15);
          //SetWord(@TreatTime2@, 0, 00);
            setSelectedValue1('BI-PHASE');
          }
          else if(SO=='6')
          {
            setValue1(15);
            setValue2(15);
            setInputValue1(30);
            setInputValue2(0);
            setInputValue3(0);
            setInputValue4(15);
          //SetWord(@TreatTime2@, 0, 00);
            setSelectedValue1('BI-PHASE');
          }
          else if(SO=='7')
          {
            setValue1(16);
            setValue2(16);
            setInputValue1(35);
            setInputValue2(0);
            setInputValue3(0);
            setInputValue4(5);
          //SetWord(@TreatTime2@, 0, 00);
            setSelectedValue1('BI-PHASE');
          }
          else if(SO=='8')
          {
            setValue1(17);
            setValue2(17);
            setInputValue1(35);
            setInputValue2(0);
            setInputValue3(0);
            setInputValue4(5);
          //SetWord(@TreatTime2@, 0, 00);
            setSelectedValue1('BI-PHASE');
          }
          else if(SO=='9')
          {
            setValue1(18);
            setValue2(18);
            setInputValue1(30);
            setInputValue2(0);
            setInputValue3(0);
            setInputValue4(5);
          //SetWord(@TreatTime2@, 0, 00);
            setSelectedValue1('BI-PHASE');
          }
          else if(SO=='10')
          {
            setValue1(19);
            setValue2(19);
            setInputValue1(25);
            setInputValue2(0);
            setInputValue3(0);
            setInputValue4(5);
          //SetWord(@TreatTime2@, 0, 00);
            setSelectedValue1('BI-PHASE');
          }
          else if(SO=='11')
          {
            setValue1(20);
            setValue2(20);
            setInputValue1(35);
            setInputValue2(10);
            setInputValue3(15);
            setInputValue4(20);
          //SetWord(@TreatTime2@, 0, 00);
            setSelectedValue1('BI-PHASE');
          }
          else if(SO=='12')
          {
            setValue1(21);
            setValue2(21);
            setInputValue1(35);
            setInputValue2(0);
            setInputValue3(0);
            setInputValue4(5);
          //SetWord(@TreatTime2@, 0, 00);
            setSelectedValue1('BI-PHASE');
          }
      }
      else{
        setValue1(0);
        setValue2(0);
        setInputValue1(0);
        setInputValue2(0);
        setInputValue3(0);
        setInputValue4(0);
      //SetWord(@TreatTime2@, 0, 00);
        setSelectedValue1('');
      }

    }
    else{
      setValue1(0);
      setValue2(0);
      setInputValue1(0);
      setInputValue2(0);
      setInputValue3(0);
      setInputValue4(0);
    //SetWord(@TreatTime2@, 0, 00);
      setSelectedValue1('');
      clearInterval(interval);
    }


    } catch (error) {
      console.error('Error fetching selected program:', error);
    }
  };


  useEffect(() => {
   
   
    fetchSelectedMenu();
    interval=setInterval(()=>{
    fetchSelectedMenu();
    },1000)

    return ()=>clearInterval(interval);
  }, [selected,selectedValue2,params.id]);

  


  

  return (
  
 
   <>
  
        <View style={styles.row}>
                <MenuLayout
                label=''
                values={['MANUAL', 'PRE-PROGRAM']}
                selectedValue={selected}
                setSelectedValue={setSelected}>
                
              </MenuLayout>
              
                <ThemedView style={styles1.stepContainer}>
                    <ThemedText style={styles.heading} type="subtitle">SEQUENCE</ThemedText>
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
        value={inputValue1 !== null ? inputValue1.toString() : ''}
       onChangeText={(text) => setInputValue1(text !== '' ? Number(text) : null)} // Update the state as user types
        placeholder="Type here..."
      />
   <Text >You entered: {inputValue1} Hz</Text>
  </View>
  </View>
  <View style={styles.row}>
  <View style={styles.box}>
    <ThemedView style={styles.stepContainer}>
    <ThemedText style={styles.heading} type="subtitle">DUTY CYCLE</ThemedText>
    </ThemedView>
    <Slider
        style={styles.slider}
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
  <View style={styles.box}>
    <ThemedView style={styles.stepContainer}>
    <ThemedText style={styles.heading} type="subtitle">PULSE WIDTH</ThemedText>
    </ThemedView>
     <View style={styles.row}>
     <Text style={styles.label}>PULSE TIME:</Text>
     <TextInput
       
       keyboardType="numeric"
       value={inputValue2!== null ? inputValue2.toString() : ''}
       onChangeText={(text) => setInputValue2(text !== '' ? Number(text) : null)} // Update the state as user types
       placeholder="Type here..."
     />
      <Text >You entered: {inputValue2} Sec</Text>

     </View>
     <View style={styles.row}>
     <Text style={styles.label}>REST TIME:</Text>
     <TextInput
       
       keyboardType="numeric"
       value={inputValue3 !== null ? inputValue3.toString() : ''}
       onChangeText={(text) => setInputValue3(text !== '' ? Number(text) : null)} // Update the state as user types
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
        style={styles.slider}
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
       value={inputValue4 !== null ? inputValue4.toString() : ''}
       onChangeText={(text) => setInputValue4(text !== '' ? Number(text) : null)} // Update the state as user types
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

type MenuLayoutProps = PropsWithChildren<{
  label: string;
  values: string[];
  selectedValue: string;
  setSelectedValue: (value: string) => void;
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

const MenuLayout: React.FC<MenuLayoutProps> = ({
  label,
  values,
  selectedValue,
  setSelectedValue,
  children,
}) => {


  return (
    <View style={styles3.container}>
      <Text style={styles3.label}>{label}</Text>

      <View style={styles3.row}>
        {values.map((value,i) => (
          <TouchableOpacity
            key={value}
          
            style={[
              styles3.button,
              selectedValue === value && styles3.selected,
            ]}
          >
            <Text
              style={[
                styles3.buttonLabel,
                selectedValue === value && styles3.selectedLabel,
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
    paddingVertical:2,
    backgroundColor: 'white',
    borderRadius: 10,
    justifyContent:'center',
    textAlign:'center',
    alignItems:'center'
  },
  slider:{
    flex:1,
    width: windowWidth/2,
    height: windowHeight/4,
    justifyContent:'center',
    alignContent:'center'
  },
  box: {
 
    width: windowWidth /5 ,
    height:windowHeight / 4.2,
    flex:1,
    padding:1,
    borderWidth: 2, // Thickness of the border
    borderColor: '#D3D3D3', // Border color
    borderRadius: 10,
    justifyContent:'center',
    alignContent:'center' // Rounded corners (optional)
  
  
  },
  row: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    backgroundColor:'white',
    textAlign:'center'
    
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
    paddingLeft:10,
    backgroundColor: 'white',
    justifyContent:'center',
    textAlign:'center',
    borderRadius: 10,
    alignItems:'center',
    marginRight:10

  },
  box: {
    maxWidth:windowWidth/2,
    paddingVertical:-10,
    height: windowHeight/6.7,
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
    paddingHorizontal:1,
    paddingVertical: 5,
    borderRadius: 10,
    backgroundColor: '#D3D3D3',
    alignSelf: 'center',
 
    marginBottom: 6,
    minWidth: '25%',
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
        
      },
      stepContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent:'flex-start',
       
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
        color:'#000080'
      }
});


const styles2 = StyleSheet.create({
  container: {
    flex: 1,
    marginTop:3,
  
    backgroundColor: 'white',
    justifyContent:'center',
    textAlign:'center',
    borderRadius: 10,
    alignItems:'center'
  },
  box: {
    maxWidth:windowWidth/4,
    paddingVertical:-10,
    height: windowHeight/4,
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
    fontSize: 11,
    fontWeight: '500',
    color: 'white',
    textAlign:'center'
  },
  selectedLabel: {
    color: 'white',
  },
  label: {
    textAlign: 'center',
    marginBottom: 10,
    fontSize: 13,
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


const styles3 = StyleSheet.create({
  container: {
    width:windowWidth/3.5,
    backgroundColor: 'white',
    justifyContent:'flex-start',
    textAlign:'center',
    alignItems:'center'
  },
  box: {
    width: windowWidth/4,
    height: windowHeight/4,
    
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
    minWidth: '45%',
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
