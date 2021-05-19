import React, { useState } from 'react';
import {View, StyleSheet} from 'react-native';
import {Input, Button, Text, Icon, TextFiled} from 'react-native-elements';
// import { Ionicons } from '@expo/vector-icons'; 
import Spacer from './Spacer';

const MoodForm = () => {
    const [mood, setMood] = useState('');
    const [note, setNote] = useState('')

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
                onPress={() => setMood('Happy')}/>
            <Icon 
                value='sad'
                name="sad-outline" 
                color='blue'
                type='ionicon' 
                size = {50} 
                style={styles.emoticon} 
                onPress={() => setMood('Sad')}/>
            <Icon 
                value='angry'
                name="flame" 
                type='ionicon' 
                color='red'
                size = {50} 
                style={styles.emoticon} 
                onPress={() => setMood('Angry')}/>
            <Icon 
                value='calm'
                name="volume-mute-outline" 
                type='ionicon' 
                color='orange'
                size = {50} 
                style={styles.emoticon} 
                onPress={() => setMood('Calm')}/>
            <Spacer/>
        </View>
        <View>
            <Text style={styles.text}> {mood}</Text>
            <Input 
                style={styles.input}
                autoCapitalize={false}
                autoCorrect={false} 
                placeholder='Note here....'
                onChangeText={text => setNote(text)}
                />
            <Button title='Done' style={styles.button}/>
        </View>
    </View>
    );

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