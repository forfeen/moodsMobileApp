import React, {useContext } from 'react';
import {View, StyleSheet, Text} from 'react-native';
import { NavigationEvents} from 'react-navigation';
import { Context as AuthContext } from '../context/AuthContext';
import AuthForm from '../components/AuthForm';
import NavLink from '../components/NavLink';

const SigninScreen = () => {
    const {state, signin, clearErrorMessage} = useContext(AuthContext);

    return(
        <View style={styles.container}> 
            <NavigationEvents 
                onwillBlur={() => {clearErrorMessage}}/>
            <AuthForm 
                headerText='Sign In To Your Account'
                errorMessage={state.errorMessage}
                onSubmit={signin}
                submitButtonText='Sign In'
            />
            <NavLink 
                text='Dont have an account? Sign up instead'
                routeName='SignUp'
            />
            
        </View>
    );
};

SigninScreen.navigationOptions = () => {
    return{
        headerShown: false,
    };
};

const styles = StyleSheet.create({
    container: {
        marginTop: 65,
        flex: 1,
        justifyContent: 'center',
        marginBottom: 200
    },
});
export default SigninScreen;
