import React from 'react'
import {View, Text, StyleSheet, Pressable} from 'react-native';


const CustomButton = ({onPress, text, type="PRIMARY", bgColor, fgColor}) => {
    return (
        <Pressable onPress={onPress} 
        style={[styles.container, 
        styles['container_${type}'],
        bgColor ? {backgroundColor: bgColor} : {},
        
        ]}>
            <Text style={[styles.text, 
                styles['text_${type}'],
                fgColor ? {color: fgColor} : {},
                
                ]}>{text}</Text>
        </Pressable>
       
    );
    
};
const styles = StyleSheet.create({
    container: {
        
        width: '70%',
        height: '4.8%',

        
        borderWidth: 0.3,
        borderRadius: 40,
        padding: 15,
        marginVertical: 5,
        alignItems: 'center',
        backgroundColor: '#db54ff',
        

    },
    container_PRIMARY: {
        backgroundColor: '#db54ff',

    },
    container_TERTIARY:
    {

    },
    text: {
        
        fontWeight: 'bold',
        color: '#fff',
        fontSize: 15,

    },
    text_TERITIARY: {
        color: 'gray',

    }
})

export default CustomButton  