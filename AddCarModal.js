import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Modal, StyleSheet } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import DropDownPicker from 'react-native-dropdown-picker';


const carMakes = [
  {
      "make": "Acura",
      "model": "ILX",
      "imgPath": "Acura_ILX.jpg"
  },
  {
      "make": "Audi",
      "model": "R8",
      "imgPath": "Audi_R8.jpg"
  },
  {
      "make": "Hyundai",
      "model": "Accent",
      "imgPath": "Hyundai_Accent.jpg"
  },
  {
      "make": "Hyundai",
      "model": "Elantra",
      "imgPath": "Hyundai_Elantra.jpg"
  }
];


export default function AddCarModal({ visible, onClose, onValidate }) {
  const [open, setOpen] = useState(false);
  const [openSecond, setOpenSecond] = useState(false);
  const [selectedMake, setSelectedMake] = useState('');
  const [selectedModel, setSelectedModel] = useState('');

  const handleValidate = () => {
    onValidate(selectedMake, selectedModel);
  };

  const uniqueMakes = Array.from(new Set(carMakes.map(car => car.make)));
  items = uniqueMakes.map(make => ({ label: make, value: make }));
  
  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={visible}
      onRequestClose={onClose}
    >
      <View style={styles.centeredView}>
        <View style={styles.modalView}>
          <Text style={styles.modalTitle}>Add a New Car</Text>

          <View style={styles.pickerContainer}>
            <Text style={styles.pickerLabel}>Make:</Text>
            <DropDownPicker
              dropDownDirection="TOP"
              defaultValue={selectedMake || null}
              containerStyle={{ height: 40, flex: 1 }}
              style={{ backgroundColor: '#fafafa' }}
              itemStyle={{ justifyContent: 'flex-start' }}
              dropDownStyle={{ backgroundColor: '#fafafa' }}
              open={open}
              setOpen={setOpen}
              zIndex={9998}
              items={items}
              value={selectedMake}
              setValue={setSelectedMake}            
              />
          </View>

          <View style={styles.pickerContainer}>
            <Text style={styles.pickerLabel}>Model:</Text>
            <DropDownPicker
              items={
                selectedMake
                  ? carMakes.filter(car => car.make === selectedMake).map(car => ({ label: car.model, value: car.model }))
                  : []
              }
              defaultValue={selectedModel || null}
              containerStyle={{ height: 40, flex: 1 }}
              style={{ backgroundColor: '#fafafa' }}
              itemStyle={{ justifyContent: 'flex-start' }}
              dropDownStyle={{ backgroundColor: '#fafafa', zIndex: -1}}
              visible={selectedMake ? true : false}
              disabled={!selectedMake}
              value={selectedModel}
              setValue={setSelectedModel}
              open={openSecond}
              setOpen={setOpenSecond}
            />
          </View>

          <View style={styles.buttonContainer}>
            <TouchableOpacity style={styles.cancelButton} onPress={onClose}>
              <Text style={styles.buttonText}>Cancel</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.validateButton} onPress={handleValidate}>
              <Text style={styles.buttonText}>Validate</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Modal>
  );
}
const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalView: {
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 20,
    alignItems: 'center',
    width: '80%',
  },
  modalTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 15,
  },
  pickerContainer: {
    flexDirection:   'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  pickerLabel: {
    fontSize: 18,
    marginRight: 10,
  },
  picker: {
    flex: 1,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    marginTop: 20,
    width: '100%',
    zIndex: -5
  },
  cancelButton: {
    backgroundColor: 'gray',
    padding: 10,
    borderRadius: 5,
    marginHorizontal: 5,
    zIndex: 0
  },
  validateButton: {
    backgroundColor: 'blue',
    padding: 10,
    borderRadius: 5,
    marginHorizontal: 5,
    zIndex: 0
  },
  buttonText: {
    fontSize: 18,
    color: 'white',
  },
});
