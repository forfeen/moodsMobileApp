import React, {useState } from 'react';
import {StyleSheet, View} from 'react-native';
import {Text, Button, Input} from 'react-native-elements';
import Spacer from '../components/Spacer';

const AuthForm = ({ headerText, errorMessage, onSubmit, submitButtonText }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    return(
        <View>
            <Spacer>
                <Text h3>{headerText}</Text>
            </Spacer>
            <Spacer />
            <Input 
                label='Email' 
                value={email} 
                onChangeText={setEmail} 
                autoCapitalize='none'
                autoCorrect={false}/>

            <Spacer />
            <Input 
                secureTextEntry
                label='Password' 
                value={password} 
                onChangeText={setPassword}
                autoCapitalize='none'
                autoCorrect={false}
                 />
                { errorMessage ? <Text style={styles.errorMessage}>{errorMessage}</Text> : null}     
            <Spacer>
                <Button title={submitButtonText} onPress={() => onSubmit({ email, password})}/>
            </Spacer>
        </View>
    );


};


const styles = StyleSheet.create({
    errorMessage:{
        fontSize: 16,
        color: 'red',
        marginLeft: 12
    },
});

export default AuthForm;

