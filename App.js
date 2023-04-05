import React from 'react';
import {View, Text, TextInput, TouchableOpacity, StyleSheet, Image, KeyboardAvoidingView} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import Carousel, { Pagination } from 'react-native-snap-carousel';
import { Provider } from 'react-redux';
import store from './store';
import CarouselCard from './CarouselCard';
import TaskList from './TaskList';
import Footer from './Footer';
import AddCarModal from './AddCarModal';


// Replace with the actual path to your images


export default function App() {
  
  const [modalVisible, setModalVisible] = React.useState(false);

  const handleAddCar = () => {
    setModalVisible(true);
  };

  const handleValidate = (selectedMake, selectedModel) => {
    // Add your logic here to save the selected make and model
    console.log('Selected Make:', selectedMake);
    console.log('Selected Model:', selectedModel);
    setModalVisible(false);
  };

  return (
    <Provider store={store}>
    <KeyboardAvoidingView
        style={{ flex: 1 }}
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        keyboardVerticalOffset={-300}
      >
    <View style={styles.container}>
      <Text style={styles.title}>Car'Spoter</Text>

      <TouchableOpacity style={styles.sendButton} onPress={handleAddCar}>
        <Text style={styles.sendButtonText}>Add a new Car to Collection</Text>
      </TouchableOpacity>
      <CarouselCard />
      <TaskList />
      <Footer />

      <AddCarModal
            visible={modalVisible}
            onClose={() => setModalVisible(false)}
            onValidate={handleValidate}
      />
    </View>
    </KeyboardAvoidingView>
    </Provider>
  );
}

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
});