import createDataContext from './createDataContext';
import MoodsApi from '../api/moods';
import { AsyncStorage } from 'react-native';
import {navigate} from '../navigationRef';

const authReducer = (state, action) => {
    switch (action.type){
        case 'add_error':
            return {...state, errorMessage: action.payload }
        case 'signup':
            return { errorMessage: '', token: action.payload}
        default:
            return state;
    }
};

const signup = dispatch => async ({email, password}) => {
        try{
            const response = await MoodsApi.post('/signup', { email, password});
            await AsyncStorage.setItem('token', response.data.token);
            dispatch({ type: 'signup', payload: response.data.token});
            navigate('moodList')

        } catch (err) {
            dispatch({ type: 'add_error', payload: 'Something went wrong with sign up'})
        }
    };



// const signin = (dispatch) => {
//     return ({email, password}) => {

//     };

// };

// const signout = dispatch => {
//     return () => {

//     };

// };

export const { Provider, Context } = createDataContext(
    authReducer,
    { signup},
    { token: null, errorMessage: '' }
);