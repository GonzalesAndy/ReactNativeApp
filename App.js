import React from 'react';
import {View, Text, TextInput, TouchableOpacity, StyleSheet, Image, KeyboardAvoidingView} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import Carousel, { Pagination } from 'react-native-snap-carousel';

// Replace with the actual path to your images
const carouselImages = [
  {
    image:   require('./assets/carreraGt.jpg'),
    modelName: 'Porsche Carrera GT',

  },
  {
    image: require('./assets/cayenne.png'),
    modelName: 'Porsche Cayenne',
  },
  {
    image:   require('./assets/r8-2021.jpg'),

    modelName: 'Audi r8',
  },
  {
    image: require('./assets/supra.jpg'),
    modelName: 'Toyota GR Supra',
  },

];

export default function App() {
  const [activeSlide, setActiveSlide] = React.useState(0);

  const renderItem = ({ item }) => (
    <View style={styles.carouselCard}>
      <Image source={item.image} style={styles.carouselImage} />
      <Text style={styles.carouselModelName}>{item.modelName}</Text>
    </View>
  );
  

  return (
    <KeyboardAvoidingView
        style={{ flex: 1 }}
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        keyboardVerticalOffset={-300}
      >
    <View style={styles.container}>
      <Text style={styles.title}>Car'Spoter</Text>

      <View style={styles.inputContainer}>
        <TextInput
          style={styles.textInput}
          placeholder="Plate Number"
          placeholderTextColor="#A0A0A0"
        />

        <TouchableOpacity style={styles.sendButton}>
          <Text style={styles.sendButtonText}>Send</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.cameraButton}>
          <Icon name="camera" size={20} color="#A0A0A0" />
        </TouchableOpacity>
      </View>
      
      <Carousel
        data={carouselImages}
        renderItem={renderItem}
        sliderWidth={360}
        itemWidth={300}
        onSnapToItem={(index) => setActiveSlide(index)}
        containerCustomStyle={{flexGrow: 0}}
        contentContainerCustomStyle={styles.carouselContentContainer}
        loop={true}
        autoplay={true}
        autoplayDelay={1500}
        autoplayInterval={3000}

        shouldOptimizeUpdates={true}
      />

      <View style={styles.paginationWrapper}>
        <Pagination
          dotsLength={carouselImages.length}
          activeDotIndex={activeSlide}
          dotStyle={styles.paginationDot}
          inactiveDotOpacity={0.4}
          inactiveDotScale={0.6}
        />
      </View>

      <Text style={styles.subtitle}>Daily Tasks</Text>

      <View style={styles.cardContainer}>
        <View style={styles.card}>
          <Text style={styles.cardText}>Scan 3 Toyota</Text>
          <Text style={styles.cardXP}>+200xp</Text>
        </View>
        <View style={styles.card}>
          <Text style={styles.cardText}>Scan 2 cars rare or more</Text>
          <Text style={styles.cardXP}>+400xp</Text>
        </View>
      </View>

      <View style={styles.footer}>
        <Icon name="home" size={25} color="#A0A0A0" />
        <Icon name="folder-open" size={25} color="#A0A0A0" />
        <Icon name="person" size={25} color="#A0A0A0" />
      </View>
    </View>
    </KeyboardAvoidingView>
  );
}

// Add your styles here
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E0E0E0',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginVertical: 20,
  },
  carouselCard: {
    backgroundColor: '#E0E0E0',
    borderRadius: 10,
    shadowColor: '#A0A0A0',
    shadowOffset: {
      width: -1,
      height: -1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 2,
    elevation: 5,
    alignItems: 'center',
    padding: 10,
    marginBottom: 10,
  },
  carouselModelName: {
    marginTop: 10,
    fontSize: 16,
    fontWeight: 'bold',
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 10,
    backgroundColor: '#E0E0E0',
    borderRadius: 10,
    shadowColor: '#A0A0A0',
    shadowOffset: {
      width: -1,
      height: -1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 2,
    elevation: 5,
  },
  textInput: {
    flex: 1,
    fontSize: 16,
    color: '#000',
    paddingVertical: 10,
    paddingHorizontal: 5,
  },
  carouselContentContainer: {
    marginTop: 30,
    marginBottom: 20,
  },
  sendButton: {
    backgroundColor: '#E0E0E0',
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderRadius: 10,
    marginRight: 5,
    shadowColor: '#A0A0A0',
    shadowOffset: {
      width: 1,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 2,
    elevation: 5,
  },
  sendButtonText: {
    fontSize: 16,
    color: '#000',
  },
  cameraButton: {
    padding: 10,
  },
  carouselImage: {
    flexGrow: 0,
    width: '100%',
    height: 200,
    borderRadius: 10,
  },
  paginationWrapper: {
    marginTop: -25, // Adjust this value to reduce or increase the gap
  },
  
  paginationDot: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: '#A0A0A0',
  },
  subtitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 20,
  },
  cardContainer: {
    marginTop: 10,
  },
  card: {
    backgroundColor: '#E0E0E0',
    borderRadius: 10,
    padding: 10,
    marginBottom: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    shadowColor: '#A0A0A0',
    shadowOffset: {
      width: -1,
      height: -1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 2,
    elevation: 5,
  },
  cardText: {
    fontSize: 16,
    color: '#000',
  },
  cardXP: {
    fontSize: 16,
    color: '#00A000',
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    width: '100%',
    position: 'absolute',
    bottom: 10,
  },
});