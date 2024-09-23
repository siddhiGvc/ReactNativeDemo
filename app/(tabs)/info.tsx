import React from 'react';
import { View,Image, ImageBackground, TouchableOpacity, StyleSheet, Dimensions } from 'react-native';


const dots= [
    { id: 1, x: '9.3%', y: '23.2%' },
    { id: 2, x: '17.8%', y: '23.3%' },
    { id: 3, x: '8.7%', y: '32.6%' },
    { id: 4, x: '18.2%', y: '33%' },
    { id: 5, x: '8.3%', y: '40.7%' },
    { id: 6, x: '18.3%', y: '40.7%' },
    { id: 7, x: '11.3%', y: '55.7%' },
    { id: 8, x: '15.5%', y: '55.7%' },
    { id: 9, x: '11.8%', y: '75.7%' },
    { id: 10, x: '15.2%', y: '75.7%' },


    { id: 11, x: '26.5%', y: '24.4%' },
    { id: 12, x: '35.2%', y: '24.2%' },
    { id: 13, x: '26.4%', y: '33.6%' },
    { id: 14, x: '35.6%', y: '33.4%' },
    { id: 15, x: '26%', y: '41.7%' },

    { id: 16, x: '31%', y: '39.3%' },

    { id: 17, x: '36.2%', y: '41.3%' },
    { id: 18, x: '29.5%', y: '48.8%' },
    { id: 19, x: '33.1%', y: '48.5%' },
    { id: 20, x: '29.2%', y: '58.8%' },
    { id: 21, x: '33.2%', y: '58.9%' },
    { id: 22, x: '29%', y: '71%' },
    { id: 23, x: '33.2%', y: '71%' },




  ];

  // Second set of dots for the second image
 

const InfoScreen = () => {
  // First set of dots for the first image

  const windowWidth = Dimensions.get('window').width;
  const windowHeight = Dimensions.get('window').height;
 

  const handleDotClick = (id: number) => {
    console.log(`Dot ${id} clicked`);
  };

  const calculatePosition = (percentage: string, size: number) => {
    return (parseFloat(percentage) / 100) * size;
  };

  return (
    <View style={styles.container}>
      <Image
        source={require('../../assets/images/BodyImages/BioFes.png')} // Add your normal image path
        style={styles.Image}
        resizeMode="contain"
      />

      <ImageBackground
        source={require('../../assets/images/BodyImages/Body.png')} // Second image
        resizeMode="contain"
        style={styles.image}
      >
        {dots.map((dot) => (
        <TouchableOpacity
          key={dot.id}
          onPress={() => handleDotClick(dot.id)}
          style={[
            styles.dot,
            {
              left: calculatePosition(dot.x, windowWidth),
              top: calculatePosition(dot.y, windowHeight),
            },
          ]}
          
        />
      ))}
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row', // Align children horizontally
    justifyContent:'space-between', // Adjust space between images
    alignItems: 'center', // Center vertically in landscape mode
  },
  image: {
    width: Dimensions.get('window').width / 2, // Divide screen width between the two images
    height: 350, // Make the image fill the available height
  },
  dot: {
    position: 'absolute',
    width: 8,
    height: 8,
    borderRadius: 10,
    backgroundColor: 'red',
  },
  Image: {
    width:Dimensions.get('window').width / 2,// Adjust size for normal image
    height: 350, // Full height to align with other images
  },
});

export default InfoScreen;
