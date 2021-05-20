import { useContext } from 'react';
import { Context as MoodContext } from '../context/MoodContext';
import { navigate } from '../navigationRef';

export default () => {
  const { createMood } = useContext(MoodContext);
  const {
    state: { mood, description },
    
  } = useContext(MoodContext);

  const saveMood = async () => {
    await createMood(mood, description);
    // reset();
    navigate('moodList');
  };

  return [saveMood];
};
