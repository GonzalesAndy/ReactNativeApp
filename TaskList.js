import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const TaskCard = () => {
  return (
    <View>
    <Text style={taskStyles.subtitle}>Daily Tasks [WIP]</Text>

        <View style={taskStyles.cardContainer}>
            <View style={taskStyles.card}>
                <Text style={taskStyles.cardText}>Scan 3 Toyota</Text>
                <Text style={taskStyles.cardXP}>+200xp</Text>
            </View>
            <View style={taskStyles.card}>
                <Text style={taskStyles.cardText}>Scan 2 cars rare or more</Text>
                <Text style={taskStyles.cardXP}>+400xp</Text>
            </View>
            <View style={taskStyles.card}>
                <Text style={taskStyles.cardText}>Scan 1 car legendary</Text>
                <Text style={taskStyles.cardXP}>+1000xp</Text>
            </View>
        </View>
    </View>
  );
};

export default TaskCard;


const taskStyles = StyleSheet.create({
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
    subtitle: {
        fontSize: 20,
        fontWeight: 'bold',
        marginTop: 20,
    },
});