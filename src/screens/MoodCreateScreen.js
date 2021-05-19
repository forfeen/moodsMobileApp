import React from 'react';
import {View, StyleSheet} from 'react-native';
import { Text } from 'react-native-elements';
import MoodForm from '../components/MoodForm';

const MoodCreateScreen = () => {
    return (
        <View>
            <Text h2 style={{fontSize: 20, marginTop: 100, marginLeft: 10}}> What did you feel today? </Text>
            <MoodForm />
        </View>
    );
}


const styles = StyleSheet.create({});

export default MoodCreateScreen;
