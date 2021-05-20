import React, {useContext} from 'react';
import {View, StyleSheet} from 'react-native';
import { Text } from 'react-native-elements';
import MoodForm from '../components/MoodForm';
import {Context} from '../context/MoodContext';

const MoodCreateScreen = ({navigation}) => {
    const { addMood } = useContext(Context);
    return (
        <View>
            <Text h2 style={{fontSize: 20, marginTop: 100, marginLeft: 10}}> What did you feel today? </Text>
            <MoodForm onSubmit={(moodIcon, moodColor, mood, description) => { addMood(moodIcon, moodColor, mood, description, () => navigation.navigate('Mood'))}}/>
        </View>
    );
}


const styles = StyleSheet.create({});

export default MoodCreateScreen;
