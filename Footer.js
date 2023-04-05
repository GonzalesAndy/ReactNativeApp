import React from 'react';
import { View, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const Footer = () => {
  return (
    <View style={footerStyles.footer}>
      <Icon name="home" size={25} color="#A0A0A0" />
      <Icon name="folder-open" size={25} color="#A0A0A0" />
      <Icon name="person" size={25} color="#A0A0A0" />
    </View>
  );
};

const footerStyles = StyleSheet.create({
    footer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        width: '100%',
        position: 'absolute',
        bottom: 10,
    }
});

export default Footer;
