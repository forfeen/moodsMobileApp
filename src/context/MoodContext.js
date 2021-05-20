import createDataContext from './createDataContext';
import MoodsApi from '../api/moods';

const moodReducer = (state, action) => {
    switch (action.type) {
        case 'get_moods':
            return action.payload;
        case 'edit_mood':
            return state.map((mood) => {
                return mood.id === action.payload.id 
                    ? action.payload : mood;
                });
        case 'delete_mood':
            return state.filter(mood => mood.id !== action.payload); 
        default:
            return state;
    }
}; 

const getMoods = dispatch => {
    return async () => {
        const response = await MoodsApi.get('/moods');
        dispatch({ type: 'get_moods', payload: response.data});
    };
};

const addMood = dispatch => {
    return async (moodIcon, moodColor, mood, description, callback) => {
        await MoodsApi.post('/moods', {moodIcon, moodColor, mood, description});
        if (callback) {
            callback();
        }
    };
};

const deleteMood = dispatch => {
    return async id => {
        await MoodsApi.delete(`/moods/${id}`)
        dispatch({ type: 'delete_mood', payload: id});
    };
};

const editMood = dispatch => {
    return async (id, moodIcon, moodColor, mood, description, callback) => {
        await MoodsApi.put(`/moods/${id}`, {moodIcon, moodColor, mood, description});
        dispatch({ 
            type: 'edit_mood', 
            payload: {id, moodIcon, moodColor, mood, description} });
        if (callback) {
            callback();
        }
    };
};

export const { Context, Provider } = createDataContext(moodReducer,
    { getMoods, addMood, editMood, deleteMood }, []);