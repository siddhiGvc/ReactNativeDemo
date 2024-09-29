import React,{useState,useEffect} from 'react';
import { View,Image, ImageBackground, TouchableOpacity, StyleSheet, Dimensions,ImageSourcePropType } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const dots= [
    { id: 1, x: '9.3%', y: '24.8%' },
    { id: 2, x: '17.6%', y: '24.7%' },
    { id: 3, x: '8.7%', y: '33.3%' },
    { id: 4, x: '18.2%', y: '33.2%' },
    { id: 5, x: '8.3%', y: '42.3%' },
    { id: 6, x: '18.3%', y: '42%' },
    { id: 7, x: '11.1%', y: '57%' },
    { id: 8, x: '15.5%', y: '57%' },
    { id: 9, x: '11.8%', y: '77%' },
    { id: 10, x: '15.2%', y: '77%' },


    { id: 11, x: '26.5%', y: '25.4%' },
    { id: 12, x: '35%', y: '25.5%' },
    { id: 13, x: '26.4%', y: '34.6%' },
    { id: 14, x: '35.4%', y: '34.4%' },
    { id: 15, x: '26%', y: '42.5%' },

    { id: 16, x: '30.9%', y: '40.4%' },

    { id: 17, x: '36.2%', y: '42.5%' },
    { id: 18, x: '29.5%', y: '49.4%' },
    { id: 19, x: '33.1%', y: '49.4%' },
    { id: 20, x: '29.2%', y: '59.8%' },
    { id: 21, x: '33%', y: '59.5%' },
    { id: 22, x: '29%', y: '72.2%' },
    { id: 23, x: '33%', y: '72%' },




  ];


  type ImageKeys = 'image1' | 'image2' | 'image3' |'image4' |'image5' |'image6' |'image7' |'image8' |'image9' |'image10' 
                  |'image11' |'image12' |'image13' |'image14' |'image15' |'image16' |'image17' |'image18' |'image19' |'image20'
                  |'image21' |'image22' |'image23' |'image24';


  const images:Record<ImageKeys, ImageSourcePropType>={
    image1: require('../../assets/images/BodyImages/BioFes.png'),
    image2: require('../../assets/images/BodyImages/AnteriorDeltoid.png'),
    image3: require('../../assets/images/BodyImages/AnteriorDeltoid2.png'),
    image4: require('../../assets/images/BodyImages/Biceps3.png'),
    image5: require('../../assets/images/BodyImages/Biceps4.png'),
    image6: require('../../assets/images/BodyImages/WristFlexion5.png'),
    image7: require('../../assets/images/BodyImages/WristFlexion6.png'),
    image8: require('../../assets/images/BodyImages/Quadriceps7.png'),
    image9: require('../../assets/images/BodyImages/Quadriceps8.png'),
    image10: require('../../assets/images/BodyImages/Tibalis9.png'),
    image11: require('../../assets/images/BodyImages/Tibalis10.png'),
    image12: require('../../assets/images/BodyImages/Posterior12.png'),
    image13: require('../../assets/images/BodyImages/Posterior12.png'),
    image14: require('../../assets/images/BodyImages/Triceps13.png'),
    image15: require('../../assets/images/BodyImages/Triceps14.png'),
    image16: require('../../assets/images/BodyImages/hand15.png'),
    image17: require('../../assets/images/BodyImages/Elector16.png'),
    image18: require('../../assets/images/BodyImages/hand17.png'),
    image19: require('../../assets/images/BodyImages/Glueus18.png'),
    image20: require('../../assets/images/BodyImages/Gluteus19.png'),
    image21: require('../../assets/images/BodyImages/Hamstrings20.png'),
    image22: require('../../assets/images/BodyImages/Hamstrings21.png'),
    image23: require('../../assets/images/BodyImages/Gastro22.png'),
    image24: require('../../assets/images/BodyImages/Gastro23.png'),

  }




  // Second set of dots for the second image

  const windowWidth = Dimensions.get('window').width;
  const windowHeight = Dimensions.get('window').height;
 
// var storedProgram = AsyncStorage.getItem('SelectedProgram');
const InfoScreen = () => {
  // First set of dots for the first image

  const Images: ImageKeys[] = ['image1', 'image2', 'image3', 'image4', 'image5', 'image6', 'image7', 'image8', 'image9', 'image10', 'image11', 'image12', 'image13', 'image14', 'image15', 'image16', 'image17', 'image18', 'image19', 'image20', 'image21', 'image22', 'image23', 'image24'];

  const [selectedDot,setSelectedDot]=useState(0);
  const [selectedProgram, setSelectedProgram] = useState<string | null>(null);

  const fetchSelectedProgram = async () => {
    try {
      var storedProgram = await AsyncStorage.getItem('SelectedProgram');
      if (storedProgram !== null) {
        setSelectedProgram(storedProgram); // Now you have the stored value
        const program=parseInt(storedProgram);
        if(program==0)
        {
          setSelectedDot(1);
        }
        else if(program==1)
        {
          setSelectedDot(7);
        }
        else if(program==2)
        {
          setSelectedDot(11);
        }
        else if(program==3)
        {
          setSelectedDot(9);
        }
        else if(program==4)
        {
          setSelectedDot(13);
        }
        else if(program==5)
        {
          setSelectedDot(22);
        }
        else if(program==6)
        {
          setSelectedDot(3);
        }
        else if(program==7)
        {
          setSelectedDot(20);
        }
        else if(program==8)
        {
          setSelectedDot(5);
        }
        else if(program==9)
        {
          setSelectedDot(18);
        }
        else if(program==10)
        {
          setSelectedDot(15);
        }
        else if(program==11)
        {
          setSelectedDot(16);
        }
        else {
          setSelectedDot(0);
        }
        
      }
    } catch (error) {
      console.error('Error fetching selected program:', error);
    }
  };


  useEffect(() => {
   
   
    fetchSelectedProgram();
    const interval=setInterval(()=>{
    fetchSelectedProgram();
    },2000)

    return ()=>clearInterval(interval);
  }, []);
  
 

  

  const calculatePosition = (percentage: string, size: number) => {
    return (parseFloat(percentage) / 100) * size;
  };

  return (
    <View style={styles.container}>
      <Image
        source={images[Images[selectedDot]]} // Add your normal image path
        style={styles.Image}
        resizeMode="contain"
      />

      <ImageBackground
        source={require('../../assets/images/BodyImages/Body2.png')} // Second image
        resizeMode="contain"
        style={styles.image}
      >
        {dots.map((dot) => (
        <TouchableOpacity
          key={dot.id}
          onPress={async() => {setSelectedDot(dot.id); await AsyncStorage.removeItem("SelectedProgram");}}
          style={[
            styles.dotContainer,
           
            {
              left: calculatePosition(dot.x, windowWidth),
              top: calculatePosition(dot.y, windowHeight),
            },
            selectedDot == dot.id && styles.selectedDot,{ left: calculatePosition(dot.x, windowWidth),
                top: calculatePosition(dot.y, windowHeight),}
          ]}
          
        >
          
          </TouchableOpacity>
      ))}
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  dotContainer: {
    position: 'absolute',
    width: windowWidth/8,  // Larger clickable area
    height: windowHeight/5,  // Larger clickable area
    justifyContent: 'center',  // Center the dot inside the container
    alignItems: 'center',  // Center the dot inside the container
  },
  container: {
    width:windowWidth,
    height:windowHeight,
    flex: 1,
    flexDirection: 'row', // Align children horizontally
    justifyContent:'space-between', // Adjust space between images
    textAlign:'center',
    alignItems: 'center', 
    
  },
  image: {
    width: windowWidth / 2, // Divide screen width between the two images
    height: windowHeight, // Make the image fill the available height
  },
  dot: {
    position: 'absolute',
    width: 8,
    height: 8,
    borderRadius: 10,
    backgroundColor: '#000080',
    
  },
  selectedDot: {
    position: 'absolute',
    width: windowWidth/80,
    height: windowHeight/40,
    borderRadius: 10,
    backgroundColor: 'white',
  },
  Image: {
    width:windowWidth / 2,// Adjust size for normal image
    height:windowHeight, // Full height to align with other images
  },
});

export default InfoScreen;
