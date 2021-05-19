import createDataContext from './createDataContext';
import MoodsApi from '../api/moods';
import { AsyncStorage } from 'react-native';
import {navigate} from '../navigationRef';

const authReducer = (state, action) => {
    switch (action.type){
        case 'add_error':
            return {...state, errorMessage: action.payload }
        case 'signin':
            return { errorMessage: '', token: action.payload}
        case 'clear_error_message':
            return {...state, errorMessage: ''}
        case 'signout':
            return {token: null, errorMessage: ''}
        default:
            return state;
    }
};

const tryLocalSignin = dispatch => async () => {
    const token = await AsyncStorage.getItem('token');
    if (token) {
        dispatch({ type: 'signin', payload: token});
        navigate('moodList');
    } else {
        navigate('Signup')
    }
};

const clearErrorMessage = dispatch => () => {
    dispatch({type: 'clear_error_message'});
};

const signup = dispatch => async ({email, password}) => {
        try{
            const response = await MoodsApi.post('/signup', { email, password});
            await AsyncStorage.setItem('token', response.data.token);
            dispatch({ type: 'signin', payload: response.data.token});
            navigate('moodList')
        } catch (err) {
            dispatch({ type: 'add_error', payload: 'Something went wrong with sign up'})
        }
    };


const signin = (dispatch) => async ({email, password}) => {
        try {
            const response = await MoodsApi.post('/signin', { email, password});
            await AsyncStorage.setItem('token', response.data.token);
            dispatch({ type: 'signin', payload: response.data.token});
            navigate('moodList')
        } catch (err) {
            dispatch({ type: 'add_error', 
            payload: 'Something went wrong with sign in'})
        }
    };

const signout = dispatch => async () => {
    await AsyncStorage.removeItem('token');
    dispatch({ type: 'signout'});
    navigate('loginFlow')

};

export const { Provider, Context } = createDataContext(
    authReducer,
    { signup, signin, signout, clearErrorMessage, tryLocalSignin },
    { token: null, errorMessage: '' }
);