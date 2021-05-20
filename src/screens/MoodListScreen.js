import React, {useContext, useEffect} from 'react';
import {SafeAreaView, StatusBar,View, Text, StyleSheet, FlatList, Button, TouchableOpacity} from 'react-native';
import {Context} from '../context/MoodContext';
import {Icon} from 'react-native-elements';


const MoodListScreen = ({navigation}) => {

    const {state, getMoods } = useContext(Context);

    useEffect(() => {
        getMoods();
        
        const listener = navigation.addListener('didFocus', () =>{
            getMoods();
        });

        return () => {
            listener.remove();
        };
        
    }, []);

    return (

        <View>
            <Text style={styles.head}> All Your Daily Mood</Text>

                <FlatList 
                    data={state}
                    keyExtractor={(mood) => mood.mood}
                    renderItem={( {item} ) => {
                        return (
                        <TouchableOpacity onPress={() => navigation.navigate('moodDetail', {id: item.id})}>
                            <View style={styles.row}>
                            <Icon 
                                    value='happy'
                                    name={item.moodIcon}
                                    color={item.moodColor}
                                    type='ionicon' 
                                    size = {50} 
                                    style={styles.emoticon} 
                                    />
                                <Text style={styles.title}>{item.mood} </Text>
                                
                            {/* <TouchableOpacity onPress={() => deleteBlogPost(item.id)} >
                                    <Feather style={styles.icon} name='trash'/>
                            </TouchableOpacity> */}
                            </View>
                        </TouchableOpacity>
                        );
                    }}/>
            {/* </SafeAreaView> */}
        </View>

    )}


const styles = StyleSheet.create({
    head:{
        fontSize: 30,
        marginLeft: 20,
        marginTop: 30,
        marginBottom: 20
    },
    row: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        paddingVertical: 40,
        paddingHorizontal: 0,
        borderTopWidth: 0.5,
        borderColor: 'gray',
        // borderWidth: 1
    },
    title: {
        fontSize: 25,
    },
    emoticon: {
        marginLeft: 40,
        marginRight: 100,
    }
});

export default MoodListScreen;
