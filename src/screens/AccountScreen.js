import React, {useContext} from 'react';
import {View, StyleSheet, Text} from 'react-native';
import { Button } from 'react-native-elements';
import Spacer from '../components/Spacer';
import { Context as AuthContext} from '../context/AuthContext';

const AccountScreen = () => {
    const { signout } = useContext(AuthContext);
    return(
        <View>
            <Text style={{ fontSize: 48, marginTop: 100, marginLeft:35}}> Account Screen </Text>
            <Spacer/>
            <Spacer>
            <Button title='Sign Out' onPress={signout} style={{width: 190, marginLeft:100}}/>
            </Spacer>
        </View>
    );
};


const styles = StyleSheet.create({});

export default AccountScreen;
