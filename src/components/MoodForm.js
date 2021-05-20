import React, { useState } from 'react';
import {View, StyleSheet} from 'react-native';
import {Input, Button, Text, Icon} from 'react-native-elements';
import Spacer from './Spacer';
// import { Context as MoodContext } from '../context/MoodContext';
// import useSaveMood from '../hooks/useSaveMood';

const MoodForm = ({onSubmit, defaultValue}) => {
    const [moodIcon, setMoodIcon] = useState(defaultValue.moodIcon);
    const [moodColor, setMoodColor] = useState(defaultValue.moodColor);
    const [mood, setMood] = useState(defaultValue.mood);
    const [description, setDescription] = useState(defaultValue.description);

    const setMoodColorHappy= () => {
        setMoodColor('green');
    };

    const setMoodIconHappy= () => {
        setMoodIcon('happy-outline');
    };

    const setHappyMood = () => {
        setMood('Happy')
    };

    const setHappy = () => {
        setHappyMood();
        setMoodIconHappy();
        setMoodColorHappy();
    };

    const setMoodColorSad = () => {
        setMoodColor('blue');
    };

    const setMoodIconSad= () => {
        setMoodIcon('sad-outline');
    };

    const setSadMood = () => {
        setMood('Sad')
    };

    const setSad = () => {
        setSadMood();
        setMoodIconSad();
        setMoodColorSad();
    };

    const setMoodColorAngry = () => {
        setMoodColor('red');
    };

    const setMoodIconAngry = () => {
        setMoodIcon('flame');
    };

    const setAngryMood = () => {
        setMood('Angry')
    };

    const setAngry = () => {
        setAngryMood();
        setMoodIconAngry();
        setMoodColorAngry();
    };

    const setMoodColorCalm = () => {
        setMoodColor('orange');
    };

    const setMoodIconCalm = () => {
        setMoodIcon('volume-mute-outline');
    };

    const setCalmMood = () => {
        setMood('Calm')
    };

    const setCalm = () => {
        setCalmMood();
        setMoodIconCalm();
        setMoodColorCalm();
    };

    return(
        <View>
            <View style={styles.container}>
                <Spacer/>
                <Icon 
                    value='happy'
                    name="happy-outline" 
                    color='green'
                    type='ionicon' 
                    size = {50} 
                    style={styles.emoticon} 
                    onPress={setHappy}/>
                <Icon 
                    value='sad'
                    name="sad-outline" 
                    color='blue'
                    type='ionicon' 
                    size = {50} 
                    style={styles.emoticon} 
                    onPress={setSad}/>
                <Icon 
                    value='angry'
                    name="flame" 
                    type='ionicon' 
                    color='red'
                    size = {50} 
                    style={styles.emoticon} 
                    onPress={setAngry}/>
                <Icon 
                    value='calm'
                    name="volume-mute-outline" 
                    type='ionicon' 
                    color='orange'
                    size = {50} 
                    style={styles.emoticon} 
                    onPress={setCalm}/>
                <Spacer/>
            </View>
            <View>
                <Text style={styles.text}> {mood}</Text>
                <Input 
                    style={styles.input}
                    autoCorrect={false} 
                    placeholder='Note here....'
                    onChangeText={text => setDescription(text)}
                    />
                <Button 
                    title='Done' 
                    onPress={() => onSubmit(moodIcon,moodColor, mood, description)}
                    style={styles.button}/>
            </View>
        </View>
    );
};

MoodForm.defaultProps = {
    defaultValue: {
        moodIcon: '',
        moodColor: '',
        mood: '',
        description: ''
    }
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row', 
        justifyContent: 'space-between', 
        marginLeft:0
    },
    emoticon: {
        marginTop: 40,
    },
    text: {
        marginTop:40,
        marginBottom: 30,
        fontSize: 30,
        textAlign: 'center'
    }, 
    input: {
        borderColor: 'gray',
        // height: 20,
        marginLeft: 10,
        // width: 20
    },
    button: {
        width: 100,
        marginLeft: 160,
        marginTop:30,
    }

});

export default MoodForm;