import React from 'react';
import {View, StyleSheet, Text, Button} from 'react-native';

const MoodListScreen = ({navigation}) => {
    return (
        <View>
            <Text style={{fontSize: 48}}>  Mood List Screen</Text>
            <Button 
                title='Go to Mood Detail'
                onPress={() => navigation.navigate('moodDetail')}/>
        </View>

    )}


const styles = StyleSheet.create({});

export default MoodListScreen;
